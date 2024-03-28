import React, { useState } from "react";

const PizzaOrderForm = () => {
  const [order, setOrder] = useState({
    type: "",
    size: "",
    base: "",
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
    setOrder({
      type: "",
      size: "",
      base: "",
    });
  };

  return (
    <div className="flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="space-y-2 bg-white w-4/12 p-5 rounded-md"
      >
        <h2 className="text-xl font-bold">Place Your Pizza Order</h2>
        <div className="flex justify-around">
          <div>
            <div className="flex flex-col">
              <label className="mb-1">
                Type:
                <select
                  name="type"
                  value={order.type}
                  onChange={handleChange}
                  className="rounded-md ml-4 border"
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
                  className="rounded-md ml-4 border"
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
                  className="rounded-md ml-4 border"
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
            >
              Place Order
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PizzaOrderForm;