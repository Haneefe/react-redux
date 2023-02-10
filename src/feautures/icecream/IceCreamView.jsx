import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, restocked } from "./iceCreamSlice";
const IceCreamView = () => {
  const [value, setValue] = useState();
  const numOfIceCream = useSelector((state) => state.ice.numOfIceCream);
  const dispatch = useDispatch();

  const handleOrder = (e) => {
    dispatch(ordered(3));
  };
  const handleRestock = (e) => {
    dispatch(restocked(value));
  };
  const handleInput = (e) => {
    setValue(parseInt(e.target.value));
  };
  return (
    <div>
      <h2>No of ice creams:{numOfIceCream}</h2>
      <button onClick={handleOrder}>Order Ice Cream</button>
      <input type="number" value={value} onChange={handleInput} />
      <button onClick={handleRestock}>Restock IceCream</button>
    </div>
  );
};

export default IceCreamView;
