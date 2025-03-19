export interface MqttOptions {
  clientId: string;
  clean: boolean;
  connectTimeout: number;
  username?: string;
  password?: string;
  reconnectPeriod?: number;
  port ?: number;
}
