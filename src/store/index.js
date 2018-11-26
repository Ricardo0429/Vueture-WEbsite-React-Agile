import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import eventsReducer from "../reducers/eventsReducer";

export default createStore(eventsReducer, applyMiddleware(thunk));