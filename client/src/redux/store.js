import { createStore } from "redux";
import likeReducer from "./subscribers/reducer";
const store = createStore(likeReducer);

export default store;
