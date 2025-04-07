import { combineReducers } from "@reduxjs/toolkit";
import powerReducer from "../slice/powerSlice";
import deviceSlice from "../slice/deviceSlice";
import monthlyReducer from "../slice/monthlyUsageSlice";
import podSlice from "../slice/podDataSlice";

const rootReducer = combineReducers({
  powerData: powerReducer,
  deviceData: deviceSlice.reducer,
  monthlyData: monthlyReducer,
  podData: podSlice.reducer,
});

export default rootReducer;
