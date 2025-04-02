import { dummyBarGraph } from "@/utils/constants";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchQuarterData = createAsyncThunk("", async () => {
  //
});

const powerSlice = createSlice({
  name: "data",
  initialState: { data: dummyBarGraph, loading: false, error: null },
  reducers: {},
});

export default powerSlice.reducer;
