import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import thunk from "redux-thunk";
import events from "../reducers/eventsReducer";
import projects from "../reducers/projectsReducer";

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;
const rootReducer = combineReducers({
  events,
  projects
});
export default createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk)),
);
