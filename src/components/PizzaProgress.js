import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removePizza } from "../utils/pizzaSlice";

const PizzaProgress = () => {
  const orderData = useSelector((store) => store.pizza.orders);
  const dispatch = useDispatch();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const calculateTimeDifference = (startTime) => {
    const differenceInMillis = currentTime.getTime() - startTime.getTime();
    const differenceInMinutes = Math.floor(differenceInMillis / (1000 * 60));
    return differenceInMinutes;
  };
  const handleCancelOrder = (orderId) => {
    dispatch(removePizza(orderId));
  };
  return (
    <div className="mt-10 flex justify-center items-center">
      <div className="bg-white w-10/12 p-4 rounded-md">
        <h2 className="text-lg font-semibold mb-4">Pizza Progress</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Order Id</th>
                <th className="px-4 py-2 border">Stage</th>
                <th className="px-4 py-2 border">Total Time Spent</th>
                <th className="px-4 py-2 border">Action</th>
              </tr>
            </thead>
            <tbody>
              {orderData.map((order) => (
                <tr key={order.id} className="border">
                  <td className="px-4 py-2 pl-16 border">{order.id}</td>
                  <td className="px-4 py-2 pl-40  border">{order.stage}</td>
                  <td className="px-4 py-2 pl-28  border">
                    {calculateTimeDifference(new Date(order.timer))}
                    min
                  </td>
                  <td className="px-4 py-2 pl-28  " style={{ width: "25%" }}>
                    {order.stage !== "Order Ready" &&
                      order.stage !== "Order Picked" && (
                        <button
                          className="bg-[#B53422] text-white px-2 py-1 rounded-md"
                          onClick={() => handleCancelOrder(order.id)}
                        >
                          Cancel
                        </button>
                      )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PizzaProgress;
