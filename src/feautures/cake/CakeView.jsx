import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  ordered as cakeOrderd,
  restocked as cakeRestocked,
  restocked,
} from "./cakeSlice";
const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  const handleOrder = (e) => {
    return dispatch(cakeOrderd(3));
  };
  const handleRestock = (e) => {
    return dispatch(cakeRestocked(3));
  };
  return (
    <div>
      <h2>no of cakes:{numOfCakes}</h2>
      <button onClick={handleOrder}>Order Cake</button>
      <button onClick={handleRestock}>RestockCake</button>
    </div>
  );
};

export default CakeView;
