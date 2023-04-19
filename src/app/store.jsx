import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import ProductsReducer from "../features/products/productsSlice";
import AuthenticationReducer from "../features/authentication/authenticationSlice";

const store = configureStore({
  reducer: {
    authentication: AuthenticationReducer,
    products: ProductsReducer,
  },
  middleware: [thunk, logger],
});

export default store;