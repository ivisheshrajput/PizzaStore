import React from "react";
import dummyData from "../constant/config";

const PizzaProgress = () => {
  return (
    <div className="mt-10 flex justify-center items-center ">
      <div className="bg-white w-10/12 p-4 rounded-md">
        <h2 className="text-lg font-semibold">Pizza Progress</h2>
        <div>
          <table className="w-full">
            <thead>
              <tr>
                <th style={{ width: "25%" }}>Order Id</th>
                <th style={{ width: "25%" }}>Stage</th>
                <th style={{ width: "25%" }}>Total Time Spent</th>
                <th style={{ width: "25%" }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {dummyData.map((order) => (
                <tr key={order.id}>
                  <td style={{ width: "25%" }} className="mx-auto">
                    {order.id}
                  </td>
                  <td style={{ width: "25%" }} className="">
                    {order.stage}
                  </td>
                  <td style={{ width: "25%" }} className="">
                    {order.totalTimeSpent}
                  </td>
                  <td style={{ width: "25%" }} className="space-x-4">
                    {order.stage !== "Order Ready" && (
                      <>
                        <button className="bg-[#B53422] text-white">
                          {/* onClick={() => handleMoveOrder(order.id, "next")} */}{" "}
                          Next
                        </button>
                        <button>
                          {/* onClick={() => handleMoveOrder(order.id, "picked")} */}{" "}
                          Picked
                        </button>
                      </>
                    )}
                    <button>
                      {/* onClick={() => handleCancelOrder(order.id)} */} Cancel
                    </button>
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
