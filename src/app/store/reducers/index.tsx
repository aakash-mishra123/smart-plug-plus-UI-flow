import { combineReducers } from "@reduxjs/toolkit";
import powerReducer from "../slice/powerSlice";
import deviceReducer from "../slice/deviceSlice";

const rootReducer = combineReducers({
  powerData: powerReducer,
  deviceData: deviceReducer,
});

export default rootReducer;
