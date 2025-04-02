import { combineReducers } from "@reduxjs/toolkit";
import powerReducer from "../slice/powerSlice";
import deviceReducer from "../slice/deviceSlice";
import monthlyReducer from "../slice/monthlyUsageSlice";
import podReducer from "../slice/podDataSlice";

const rootReducer = combineReducers({
  powerData: powerReducer,
  deviceData: deviceReducer,
  monthlyData: monthlyReducer,
  podData: podReducer,
});

export default rootReducer;
