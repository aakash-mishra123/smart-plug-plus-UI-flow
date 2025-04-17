import { createListenerMiddleware } from "@reduxjs/toolkit";
import { fetchDeviceData } from "../deviceSlice";
import { fetchPodData } from "../podDataSlice";
import { fetchQuarterData } from "../powerSlice";
import dayjs from "dayjs";
const listenerMiddleware = createListenerMiddleware();

listenerMiddleware.startListening({
  actionCreator: fetchDeviceData.fulfilled,
  effect: async (action, listenerApi) => {
    const result = action.payload;
    await listenerApi.dispatch(fetchPodData(result.serial, result.authToken));
  },
});

listenerMiddleware.startListening({
  actionCreator: fetchPodData.fulfilled,
  effect: async (action, listenerApi) => {
    const result = action.payload;
    const options = {
      date: dayjs(dayjs().locale("en")).format("YYYY-MM-DD"),
      serial: result.serial,
    };
    await listenerApi.dispatch(fetchQuarterData({ options }));
  },
});



export default listenerMiddleware;
