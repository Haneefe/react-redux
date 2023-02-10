import { configureStore } from "@reduxjs/toolkit";
import cakeReducer from "../feautures/cake/cakeSlice";
import iceReducer from "../feautures/icecream/iceCreamSlice";
import userReducer from "../feautures/user/userSlice";
// import { createLogger } from "redux-logger";
// const reduxLogger = require("redux-logger");
// const logger = reduxLogger.createLogger();
const store = configureStore({
  reducer: {
    cake: cakeReducer,
    ice: iceReducer,
    user: userReducer,
  },
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
