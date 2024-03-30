import { createSlice } from "@reduxjs/toolkit";

let nextOrderId = 1;

const pizzaSlice = createSlice({
  name: "pizza",
  initialState: {
    orders: [],
  },
  reducers: {
    addPizza: (state, action) => {
      const newPizzaOrder = {
        ...action.payload,
        id: nextOrderId++,
        stage: "Order Placed",
      };
      state.orders.push(newPizzaOrder);
    },
    removePizza: (state, action) => {
      const orderIdToRemove = action.payload;
      state.orders = state.orders.filter(
        (order) => order.id !== orderIdToRemove
      );
    },
    moveToMaking: (state, action) => {
      const orderId = action.payload;
      const orderIndex = state.orders.findIndex(
        (order) => order.id === orderId
      );
      if (orderIndex !== -1) {
        state.orders[orderIndex].stage = "Order In Making";
      }
    },
    moveToReady: (state, action) => {
      const orderId = action.payload;
      const orderIndex = state.orders.findIndex(
        (order) => order.id === orderId
      );
      if (orderIndex !== -1) {
        state.orders[orderIndex].stage = "Order Ready";
      }
    },
    moveToPicked: (state, action) => {
      const orderId = action.payload;
      const orderIndex = state.orders.findIndex(
        (order) => order.id === orderId
      );
      if (orderIndex !== -1) {
        state.orders[orderIndex].stage = "Order Picked";
      }
    },
  },
});

export const {
  addPizza,
  removePizza,
  moveToMaking,
  moveToReady,
  moveToPicked,
} = pizzaSlice.actions;
export default pizzaSlice.reducer;
