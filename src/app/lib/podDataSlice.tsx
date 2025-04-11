import { PodData } from "@/utils/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pesse: 1,
  dataPlate: "MATRICOLA_AABBCC",
  availablePower: 3420,
  pod: "IT0123456789AB",
  customerCode: "CLIENTExx",
  ttl: "1804248523",
  k: 1,
  messagePosixTimestamp: 1619433928,
  contractPower: 3000,
  meter: "M1",
  vendor: "NOME__VENDITORE__ENERGIA",
  eventPosixTimestamp: 1619433928,
  startContract: "01/02/2020 [7]",
  eventsCounter: 19,
  gap: 300,
  freezingDay: "31/01/2020 [6]",
  serial: "c2g-57CFACECC",
  phone: "0717450110",
};

const authToken = process.env.NEXT_PUBLIC_DEVICE_AUTH_TOKEN;

export const fetchPodData = createAsyncThunk<PodData, string>(
  "",
  async (serial = "c2g-57CFACECC") => {
    const BASE_URL =
      "https://y7u224bky4.execute-api.eu-west-1.amazonaws.com/uat/v1/energy/pod-data";

    const slug = `serial=${serial}`;
    const url = `${BASE_URL}?${slug}`;
    const response = await axios.get(url, {
      headers: {
        accept: "application/json",
        "Content-type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });
    return response.data[0];
  }
);

const podSlice = createSlice({
  name: "podDevice",
  initialState: { data: initialState, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPodData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchPodData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPodData.rejected, (state) => {
        state.loading = false;
        // state.error = action.error.message;
      });
  },
});

export default podSlice;
