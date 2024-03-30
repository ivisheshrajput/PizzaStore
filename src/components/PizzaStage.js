import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  moveToMaking,
  moveToPicked,
  moveToReady,
  removePizza,
} from "../utils/pizzaSlice";

const PizzaStage = () => {
  const dispatch = useDispatch();
  const orderData = useSelector((store) => store.pizza.orders);
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clear interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  const [currentTime, setCurrentTime] = useState(new Date());

  const handleDeliverOrder = (orderId) => {
    dispatch(removePizza(orderId));
  };

  const calculateTimeDifference = (startTime) => {
    const differenceInMillis = currentTime.getTime() - startTime.getTime();
    const differenceInMinutes = Math.floor(differenceInMillis / (1000 * 60));
    return differenceInMinutes;
  };
  const shouldHighlightYellow = (order) => {
    const differenceInMinutes = calculateTimeDifference(new Date(order.timer));
    return differenceInMinutes >= 3;
  };
  const handleMoveToMaking = (orderId) => {
    dispatch(moveToMaking(orderId));
  };
  const handleMoveToReady = (orderId) => {
    const orderInMaking = orderData.find(
      (order) => order.id === orderId && order.stage === "Order In Making"
    );

    if (orderInMaking) {
      dispatch(moveToReady(orderId));
    } else {
      console.log(
        "Cannot move order to the next stage. It is not in the 'Order In Making' stage."
      );
    }
  };
  const handleMoveToPicked = (orderId) => {
    const orderReady = orderData.find(
      (order) => order.id === orderId && order.stage === "Order Ready"
    );

    if (orderReady) {
      dispatch(moveToPicked(orderId));
    } else {
      console.log(
        "Cannot move order to the next stage. It is not in the 'Order Ready' stage."
      );
    }
  };

  const ordersInMaking = orderData
    .filter((order) => order.stage === "Order In Making")
    .sort((a, b) => a.totalTimeSpent - b.totalTimeSpent);
  const ordersPlaced = orderData
    .filter((order) => order.stage === "Order Placed")
    .sort((a, b) => a.totalTimeSpent - b.totalTimeSpent);
  const ordersReady = orderData
    .filter((order) => order.stage === "Order Ready")
    .sort((a, b) => a.totalTimeSpent - b.totalTimeSpent);
  const ordersPicked = orderData
    .filter((order) => order.stage === "Order Picked")
    .sort((a, b) => a.totalTimeSpent - b.totalTimeSpent);

  return (
    <div className="mt-10 flex justify-center items-center ">
      <div className="bg-white w-10/12 p-4 rounded-md  ">
        <h2 className="text-lg font-semibold mb-4">
          Pizza Stage(Maximum 10 Order)
        </h2>

        <div className="flex">
          <div className="w-3/12 p-4 border h-auto space-y-3">
            <div className="font-semibold ">Order Placed</div>
            {ordersPlaced.map((order) => (
              <div
                key={order.id}
                className={
                  shouldHighlightYellow(order) ? "bg-red-600 text-white" : ""
                }
              >
                <div className="border p-4 flex flex-col justify-center items-center space-y-2 rounded-md">
                  <div>{order.id}</div>
                  <div>
                    {calculateTimeDifference(new Date(order.timer))} minutes ago
                  </div>
                  <div>
                    <button
                      className="border px-2 py-1 rounded-md"
                      onClick={() => handleMoveToMaking(order.id)}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-3/12 p-4 border h-auto space-y-3">
            <div className="font-semibold ">Order In Making</div>
            {ordersInMaking.map((order) => (
              <div
                key={order.id}
                className={
                  shouldHighlightYellow(order) ? "bg-red-600 text-white" : ""
                }
              >
                <div className="border p-4 flex flex-col justify-center items-center space-y-2 rounded-md">
                  <div>{order.id}</div>
                  <div>
                    {calculateTimeDifference(new Date(order.timer))} minutes ago
                  </div>
                  <div>
                    <button
                      className="border px-2 py-1 rounded-md"
                      onClick={() => handleMoveToReady(order.id)}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-3/12 p-4 border h-auto space-y-3">
            <div className="font-semibold ">Order Ready</div>
            {ordersReady.map((order) => (
              <div
                key={order.id}
                className={
                  shouldHighlightYellow(order) ? "bg-red-600 text-white" : ""
                }
              >
                <div className="border p-4 flex flex-col justify-center items-center space-y-2 rounded-md">
                  <div>{order.id}</div>
                  <div>
                    {calculateTimeDifference(new Date(order.timer))} minutes ago
                  </div>
                  <div>
                    <button
                      className="border px-2 py-1 rounded-md"
                      onClick={() => {
                        handleMoveToPicked(order.id);
                      }}
                    >
                      Next
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-3/12 p-4 border h-auto space-y-3">
            <div className="font-semibold ">Order Picked</div>
            {ordersPicked.map((order) => (
              <div
                key={order.id}
                className={
                  shouldHighlightYellow(order) ? "bg-red-600 text-white" : ""
                }
              >
                <div className="border p-4 flex flex-col justify-center items-center space-y-2 rounded-md">
                  <div>{order.id}</div>
                  <div>
                    {calculateTimeDifference(new Date(order.timer))} minutes ago
                  </div>
                  <button
                    className="text-green-600 font-semibold  "
                    onClick={() => handleDeliverOrder(order.id)}
                  >
                    Picked
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaStage;
