import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  online: true,
  serial: "c2G-XXXXX",
  id: "0366d483-3b26-4c0e-96de-ef4e5cd9f230",
};

export const fetchDeviceData = createAsyncThunk(
  "device/fetchStatus",
  async (authToken: string) => {
    const BASE_URL =
      "https://y7u224bky4.execute-api.eu-west-1.amazonaws.com/uat/v1/energy/chain-to-gate";

    const response = await axios.get(BASE_URL, {
      headers: {
        Accept: "application/json",
        "Content-type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });

    return { ...response.data[0], authToken };
  }
);

const deviceSlice = createSlice({
  name: "device",
  initialState: {
    data: initialState,
    authToken: "",
    loading: false,
    error: null,
  },
  reducers: {
    setAuthToken: (state, action) => {
      state.authToken = action.payload.token;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDeviceData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDeviceData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = {
          ...state.data, // Preserve existing fields in state.data
          ...action.payload, // Overwrite with fields from action.payload
        };
      })
      .addCase(fetchDeviceData.rejected, (state) => {
        state.loading = false;
        // state.error = action.error.message;
      });
  },
});
export const { setAuthToken } = deviceSlice.actions;
export default deviceSlice;
