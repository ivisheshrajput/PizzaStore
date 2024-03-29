import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { moveToMaking } from "../utils/pizzaSlice"; // Importing the action

const PizzaStage = () => {
  const dispatch = useDispatch();
  const orderData = useSelector((store) => store.pizza.orders);

  const handleMoveToMaking = (orderId) => {
    dispatch(moveToMaking(orderId));
  };



  const ordersInMaking = orderData.filter(order => order.stage === "Order In Making").sort((a, b) => a.totalTimeSpent - b.totalTimeSpent);
  const ordersPlaced = orderData.filter(order => order.stage === "Order Placed").sort((a, b) => a.totalTimeSpent - b.totalTimeSpent);
  const ordersReady = orderData.filter(order => order.stage === "Order Ready").sort((a, b) => a.totalTimeSpent - b.totalTimeSpent);
  const ordersPicked = orderData.filter(order => order.stage === "Order Picked").sort((a, b) => a.totalTimeSpent - b.totalTimeSpent);

  return (
    <div className="mt-10 flex justify-center items-center ">
      <div className="bg-white w-10/12 p-4 rounded-md  ">
        <h2 className="text-lg font-semibold">Pizza Stage(Maximum 10 Order)</h2>
      

      <div className="flex">
      <div className="w-3/12 p-4 border h-auto space-y-3">
          <div>Order Placed</div>
        {ordersPlaced.map((order) => (
          <div key={order.id} >
            <div className="border p-4 flex flex-col justify-center items-center space-y-2 rounded-md">
              <div>{order.id}</div>
              <div>{new Date(order.timer).toISOString()}</div>
              <div>
                <button className="border px-2 py-1" onClick={() => handleMoveToMaking(order.id)}>Next</button>
              </div>
            </div>
          </div>
        ))}
        </div>
        <div className="w-3/12 p-4 border h-auto space-y-3">
          <div>Order In Making</div>
        {ordersInMaking.map((order) => (
          <div key={order.id} >
            <div className="border p-4 flex flex-col justify-center items-center space-y-2 rounded-md">
              <div>{order.id}</div>
              <div>{new Date(order.timer).toISOString()}</div>
              <div>
                <button className="border px-2 py-1">Next</button>
              </div>
            </div>
          </div>
        ))}
        </div>
        <div className="w-3/12 p-4 border h-auto space-y-3">
          <div>Order Ready</div>
        {ordersReady.map((order) => (
          <div key={order.id} >
            <div className="border p-4 flex flex-col justify-center items-center space-y-2 rounded-md">
              <div>{order.id}</div>
              <div>{new Date(order.timer).toISOString()}</div>
              <div>
                <button className="border px-2 py-1">Next</button>
              </div>
            </div>
          </div>
        ))}
        </div>
        <div className="w-3/12 p-4 border h-auto space-y-3">
          <div>Order Picked</div>
        {ordersPicked.map((order) => (
          <div key={order.id} >
            <div className="border p-4 flex flex-col justify-center items-center space-y-2 rounded-md">
              <div>{order.id}</div>
              <div>{new Date(order.timer).toISOString()}</div>
             
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
