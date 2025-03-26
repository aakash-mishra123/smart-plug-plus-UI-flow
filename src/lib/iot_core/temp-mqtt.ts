import Paho from "paho-mqtt";
const url = "wss://d008824835nrpjnf3rj9q-ats.iot.eu-west-1.amazonaws.com/mqtt";
const mqttUsername = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpZFByZXNhRm9ybWlkYWJpbGUiOiIwMzY2ZDQ4My0zYjI2LTRjMGUtOTZkZS1lZjRlNWNkOWYyMzAiLCJpc3MiOiJBUFAiLCJleHAiOjE3NDE2ODg5OTR9.Bste60xcPzeVwDwSC54xr8XuoXhc2qB7AhC-9M9G6ZfrWkZd8qGMfYiVqomk3DR37_-XlagqoDgvNjrSf2eDXAzkrXQH8ZVnJXz08aDhZjouZYMN_nv4QKo3eNek20mO9MsSjLNmn1MfPqKWYLwPMOCFo4O62LCs2mESexUAaSYPI-FWowtwWuWyOI_fs_7OQvGvKXyzhRNt9EBz1FzBvs5I1QSFXTyzm8pz8nyOPNiRbtSDrLcFiiS422Jv6P-SmD0rTxlbxfvZPYHosAEmq217Xg0SMp715kKrbxBAu6Y3wiRTWwnn92JXjJ_n3uH5oNHv9nCErcfBBKiGt81NnQ";

export async function startMQTTService() {
    //const clientId = crypto.randomUUID().replace(/-/g, "");
    const client = new Paho.Client(url, "test");
    client.connect({
        useSSL: true,
        timeout: 3,
        mqttVersion: 4,
        userName: mqttUsername,
        password: "password",
        onSuccess: function () {
            console.log("connected!");
            client.subscribe('c2/d/c2g-57CFB6E1C'); //serial from chain-2-gate 
        },
        onFailure: function (e) {
            console.log("ERROR: ", e);
            console.log("failed");
        },
    });

    client.onMessageArrived = function (message) {
        console.log("Message arrived: ", JSON.parse(message.payloadString));

        return { iotData: JSON.parse(message.payloadString).Chain2Data }
    };

    return { iotData: { message: 'Could not fetch Data' } }
}
