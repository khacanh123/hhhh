import { createStore } from "redux";
import rootLibrary from "../reducers";

const store = createStore(
    rootLibrary
)
export default store;