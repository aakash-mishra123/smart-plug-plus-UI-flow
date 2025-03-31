import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchData = createAsyncThunk("data/fetchData", async () => {
  const response = await fetch("/api/data"); // Adjust API endpoint as needed
  return response.json();
});

const initialState = {
  online: true,
  serial: "c2g-57CFACECC",
};

const deviceSlice = createSlice({
  name: "device",
  initialState: { data: initialState, loading: false, error: null },
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

export default deviceSlice.reducer;
