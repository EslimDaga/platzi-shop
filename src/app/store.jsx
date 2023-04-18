import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import AuthenticationReducer from "../features/authentication/authenticationSlice";

const store = configureStore({
  reducer: {
    authentication: AuthenticationReducer
  },
  middleware: [thunk, logger],
});

export default store;