import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from "./pizzaSlice";

const appStore = configureStore({
  reducer: {
    pizza: pizzaReducer,
  },
});
export default appStore;
