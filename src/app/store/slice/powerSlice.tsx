import { dummyQuarterUsage } from "@/utils/constants";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await fetch("/api/data"); // Adjust API endpoint as needed
  return response.json();
});

const powerSlice = createSlice({
  name: "data",
  initialState: { data: dummyQuarterUsage, loading: false, error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchData.rejected, (state) => {
        state.loading = false;
        // state.error = action.error.message;
      });
  },
});

export default powerSlice.reducer;
