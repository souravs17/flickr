import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import RootReducer from "./root-reducer";

const store = createStore(RootReducer, applyMiddleware(thunk));

export default store;
