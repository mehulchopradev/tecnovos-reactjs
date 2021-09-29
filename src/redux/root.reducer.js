import { combineReducers } from "redux";
import tasksReducer from "./task/tasks.reducer";

const rootReducer = combineReducers({
  tasksReducer
});

export default rootReducer;