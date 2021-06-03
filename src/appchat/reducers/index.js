import { combineReducers } from "redux";
import { LibraryReducer } from "./reducer";

const rootLibrary = combineReducers({
    library: LibraryReducer
})
export default rootLibrary;