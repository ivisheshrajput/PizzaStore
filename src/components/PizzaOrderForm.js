import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPizza } from "../utils/pizzaSlice";
import { ToastContainer, toast } from "react-toastify";

const PizzaOrderForm = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.pizza.orders);

  const [order, setOrder] = useState({
    type: "",
    size: "",
    base: "",
    timer: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder((prevOrder) => ({
      ...prevOrder,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (orders.length >= 10) {
      toast.error(
        "Order cart is full. Please wait for orders to be finished.",
        {
          icon: "⚠️",
          style: {
            backgroundColor: "#B53422",
            color: "white",
          },
        }
      );
      return;
    }
    const newOrder = { ...order };
    newOrder.timer = new Date();

    dispatch(addPizza(newOrder));
    setOrder({
      type: "",
      size: "",
      base: "",
      timer: null,
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="flex justify-center items-center">
        <form
          onSubmit={handleSubmit}
          className="space-y-2 bg-white w-4/12 p-5 rounded-md"
        >
          <h2 className="text-xl font-bold">Place Your Pizza Order</h2>
          <div className="flex justify-around">
            <div>
              <div className="flex flex-col">
                <label className="mb-1 space-x-6">
                  Type:
                  <select
                    name="type"
                    value={order.type}
                    onChange={handleChange}
                    className="rounded-md ml-4 border w-32"
                  >
                    <option value="">Select</option>
                    <option value="veg">Veg</option>
                    <option value="non-veg">Non-Veg</option>
                  </select>
                </label>
                <label className="mb-1">
                  Size:
                  <select
                    name="size"
                    value={order.size}
                    onChange={handleChange}
                    className="rounded-md ml-4 border w-32"
                  >
                    <option value="">Select</option>
                    <option value="large">Large</option>
                    <option value="medium">Medium</option>
                    <option value="small">Small</option>
                  </select>
                </label>
                <label className="mb-1">
                  Base:
                  <select
                    name="base"
                    value={order.base}
                    onChange={handleChange}
                    className="rounded-md ml-4 border w-32"
                  >
                    <option value="">Select</option>
                    <option value="thin">Thin</option>
                    <option value="thick">Thick</option>
                  </select>
                </label>
              </div>
            </div>
            <div>
              <button
                className="bg-[#B53422] text-white font-semibold px-2 py-1 rounded-md"
                type="submit"
                disabled={orders.length >= 10}
              >
                {orders.length >= 10 ? "Order Cart is Full" : "Place Order"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PizzaOrderForm;
