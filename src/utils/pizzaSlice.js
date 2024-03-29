// pizzaSlice.js
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
        id: nextOrderId++, // Assigning an order number
        stage: "Order Placed",
      };
      state.orders.push(newPizzaOrder);
    },
    removePizza: (state, action) => {
      // Implement remove pizza logic if needed
    },
    moveToMaking: (state, action) => {
      const orderId = action.payload;
      const orderIndex = state.orders.findIndex((order) => order.id === orderId);
      if (orderIndex !== -1) {
        state.orders[orderIndex].stage = "Order In Making";
      }
    },
    
  },
});

export const { addPizza, removePizza, moveToMaking } = pizzaSlice.actions;
export default pizzaSlice.reducer;
