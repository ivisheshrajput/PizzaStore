import { configureStore } from "@reduxjs/toolkit";
import pizzaReducer from "./pizzaSlice";


//Above instead of gptReducer or movieReducer and others can also write gptSlice or others
const appStore = configureStore({
  reducer: {
    pizza: pizzaReducer,
    // placed:placedReducer,
    // making:makingReducer,
    // ready:readyReducer,
    // picked:pickedReducer,
  },
});
export default appStore;
