import { Server } from 'socket.io';
import { createServer } from 'http';
import { mqtt, iot } from 'aws-iot-device-sdk-v2';
import dotenv from 'dotenv';

dotenv.config();

const PORT = 4000;

// Create a basic HTTP server (No Express required)
const httpServer = createServer();

// Initialize Socket.IO on the HTTP server
const io = new Server(httpServer, {
    cors: {
        origin: "*", // Allow frontend connections
        methods: ["GET"]
    }
});

// AWS IoT Configuration
const iotEndpoint: string = "aexnbs2m3vzug-ats.iot.eu-west-1.amazonaws.com";
const clientId: string = 'mqtt-socketio-service';
const topic: string = 'c2/d/#'; // Wildcard topic

// AWS IoT MQTT Connection (WebSockets for Browser-Compatible IoT)
const mqttConfig = iot.AwsIotMqttConnectionConfigBuilder.new_with_websockets()
    .with_clean_session(true)
    .with_client_id(clientId)
    .with_endpoint(iotEndpoint)
    .build();

const mqttClient = new mqtt.MqttClient();
const connection = mqttClient.new_connection(mqttConfig);

async function startMQTTService() {
    try {
        await connection.connect();
        console.log('✅ Connected to AWS IoT');

        // Subscribe to AWS IoT Topic
        await connection.subscribe(topic, mqtt.QoS.AtLeastOnce, (topic: string, payload: ArrayBuffer) => {
            const message = Buffer.from(payload).toString();
            console.log(`📩 Received MQTT Message:`, { topic, message });

            // Send message to all connected Socket.IO clients
            io.emit('mqttMessage', { topic, message });
        });

    } catch (error) {
        console.error('❌ MQTT Connection Error:', error);
    }
}

// Start MQTT Service & WebSocket Server
startMQTTService();
httpServer.listen(PORT, () => console.log(`🚀 Socket.IO Server running on port ${PORT}`));
