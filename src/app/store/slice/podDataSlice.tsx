import { PodData } from "@/utils/types";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  availablePower: 3420,
  contractPower: 3000,
  meter: "M1",
  serial: "c2g-57CFB6E1C",
  pod: "TESPODTEST",
};

const authToken = process.env.NEXT_PUBLIC_DEVICE_AUTH_TOKEN;

export const fetchPodData = createAsyncThunk<PodData, string>(
  "",
  async (serial = "") => {
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
  name: "device",
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

export default podSlice.reducer;
