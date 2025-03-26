type deviceData = {
  online: boolean;
  id: string;
  serial: string;
};

export type DeviceStatusResponseType = {
  data: deviceData[];
};

export type EnergyMeterData = {
  pesse?: number;
  dataPlate?: string;
  availablePower?: number;
  pod?: string;
  customerCode?: string;
  ttl?: string;
  k?: number;
  messagePosixTimestamp?: number;
  contractPower?: number;
  meter?: string;
  vendor?: string;
  eventPosixTimestamp?: number;
  startContract?: string;
  eventsCounter?: number;
  gap?: number;
  freezingDay?: string;
  serial?: string;
  phone?: string;
};

export type MeterEvent = {
  Id: string;
  Ts: string;
  Meter: string;
  Type: string;
  Payload: {
    MessagePosixTimestamp: number;
    EventType: number;
    EventPosixTimestamp: number;
    EventsCounter: number;
    InstantPower: number;
    ProdInstantPower: number;
    Gap: number;
  };
};
