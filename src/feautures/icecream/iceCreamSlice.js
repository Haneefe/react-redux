import { createSlice } from "@reduxjs/toolkit";
import { ordered as cakeOrdered } from "../cake/cakeSlice";
/*  Initial State */

const initialState = {
  numOfIceCream: 20,
};

const iceCreamSlice = createSlice({
  name: "iceCream",
  initialState: initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfIceCream -= action.payload;
    },
    restocked: (state, action) => {
      state.numOfIceCream += action.payload;
    },
  },
  //   extraReducers: {
  //     ["cake/ordered"]: (state, action) => {
  //       state.numOfIceCream--;
  //     },
  //   },
  extraReducers: (builder) => {
    builder.addCase(cakeOrdered, (state) => {
      state.numOfIceCream--;
    });
  },
});

export default iceCreamSlice.reducer;
export const { ordered, restocked } = iceCreamSlice.actions;
