import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducers/reducersIndex";
import mainMiddleware from "./middleware/mainMiddleware";
import authMiddleware from "./middleware/authMiddleware";

const getMiddleware = () => {
  return applyMiddleware(mainMiddleware, authMiddleware);
};

const store = createStore(rootReducer, getMiddleware());

export default store;