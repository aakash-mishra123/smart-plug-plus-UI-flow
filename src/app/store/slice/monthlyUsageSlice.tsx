import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import dayjs from "dayjs";
import axios from "axios";
import { dailyEnergyTypes } from "@/utils/types";
import { dummyDailyData } from "@/utils/constants";
// import queryString from "query-string";

const getMonthStartToEnd = (year: number, month: number) => {
  const targetMonth = dayjs(`${year}-${month}-01`);

  const firstDate = targetMonth.startOf("month").format("YYYY-MM-DD");
  const lastDate = targetMonth.endOf("month").format("YYYY-MM-DD");

  return { firstDate, lastDate };
};

type FetchDataParams = {
  serial: string;
  year: number;
  month: number;
};

export const fetchData = createAsyncThunk<dailyEnergyTypes[], FetchDataParams>(
  "",
  async ({ serial, year, month }) => {
    const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
    const authToken = process.env.NEXT_PUBLIC_DEVICE_AUTH_TOKEN;
    const { firstDate, lastDate } = getMonthStartToEnd(year, month);

    const options = {
      fromDate: firstDate,
      toDate: lastDate,
      serial: serial,
    };
    const response = await axios.get(`${BASE_URL}/v1/energy/daily`, {
      params: options,
      headers: {
        accept: "application/json",
        "Content-type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    });
    return response.data;
  }
);

type MonthlyState = {
  data: dailyEnergyTypes[];
  loading: boolean;
  error: string | null;
};

const initialState: MonthlyState = {
  data: dummyDailyData,
  loading: false,
  error: null,
};

const monthlySlice = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(
        fetchData.fulfilled,
        (state, action: PayloadAction<dailyEnergyTypes[]>) => {
          state.loading = false;
          state.data = action.payload;
        }
      )
      .addCase(fetchData.rejected, (state) => {
        state.loading = false;
        // state.error = action.error.message;
      });
  },
});

export default monthlySlice.reducer;
