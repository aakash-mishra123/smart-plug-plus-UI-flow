import { combineReducers } from "@reduxjs/toolkit";
import powerReducer from "../slice/powerSlice";

const rootReducer = combineReducers({
  data: powerReducer,
});

export default rootReducer;
