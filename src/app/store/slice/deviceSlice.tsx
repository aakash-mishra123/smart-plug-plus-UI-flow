import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  online: true,
  serial: "c2g-57CFACECC",
  id: "0366d483-3b26-4c0e-96de-ef4e5cd9f230",
};

const authToken = process.env.NEXT_PUBLIC_DEVICE_AUTH_TOKEN;

export const fetchDeviceData = createAsyncThunk("", async () => {
  const BASE_URL =
    "https://y7u224bky4.execute-api.eu-west-1.amazonaws.com/uat/v1/energy/chain-to-gate";

  const response = await axios.get(BASE_URL, {
    headers: {
      Accept: "application/json",
      "Content-type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  });
  return response.data[0];
});

const deviceSlice = createSlice({
  name: "device",
  initialState: { data: initialState, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeviceData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDeviceData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchDeviceData.rejected, (state) => {
        state.loading = false;
        // state.error = action.error.message;
      });
  },
});

export default deviceSlice.reducer;
