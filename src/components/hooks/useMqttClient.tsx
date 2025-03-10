import mqtt, { MqttClient } from 'mqtt';
import { useEffect, useState } from 'react';

const AWS_IOT_ENDPOINT: string = 'wss://aexnbs2m3vzug-ats.iot.eu-west-1.amazonaws.com:443/mqtt';

interface MqttOptions {
  clientId: string;
  clean: boolean;
  connectTimeout: number;
  username?: string;
  password?: string;
  reconnectPeriod?: number;
  port ?: number;
}

const options: MqttOptions = {
  clientId: `iotconsole-9a11e896-a61b-45c1-a83d-7483a0af180a`, // Random client ID
  clean: true,
  connectTimeout: 4000,
  port: 443,
  reconnectPeriod: 4000,
};

const useMqttClient = () => {
  const [client, setClient] = useState<MqttClient | null>(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {


    // Initialize MQTT client
    const mqttClient = mqtt.connect(AWS_IOT_ENDPOINT, options);

    // Event: Connection established
    mqttClient.on('connect', () => {
      console.log('Connected to AWS IoT');
      setIsConnected(true);

      // Subscribe to a topic
      mqttClient.subscribe("c2/d/#", (err) => {
        if (!err) {
          console.log('Subscribed to topic');
        } else {
          console.error('Subscription error:', err);
        }
      });
    });

    // Event: Message received
    mqttClient.on('message', (topic: string, message: Buffer) => {
      console.log(`Message received on ${topic}:`, message.toString());
    });

    // Event: Connection error
    mqttClient.on('error', (error: Error) => {
      console.error('Connection error:', error);
      setIsConnected(false);
    });

    // Event: Connection closed
    mqttClient.on('close', () => {
      console.log('Connection closed');
      setIsConnected(false);
    });

    // Set the client in state
    setClient(mqttClient);
    return () => {
      if (mqttClient) {
        mqttClient.end(true); // Forcefully close the connection
      }
    };
  }, []);

  return { client, isConnected };
};

export default useMqttClient;
