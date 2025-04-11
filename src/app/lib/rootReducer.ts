import { combineReducers } from "@reduxjs/toolkit";
import powerReducer from "./powerSlice";
import deviceSlice from "./deviceSlice";
import monthlyReducer from "./monthlyUsageSlice";
import podSlice from "./podDataSlice";

const rootReducer = combineReducers({
  powerData: powerReducer,
  deviceData: deviceSlice.reducer,
  monthlyData: monthlyReducer,
  podData: podSlice.reducer,
});

export default rootReducer;
