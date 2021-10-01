import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // local storage
import tasksReducer from "./task/tasks.reducer";
import libraryReducer from "./library/library.reducer";

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['tasksReducer']
}

const rootReducer = combineReducers({
  tasksReducer,
  libraryReducer
});

export default persistReducer(persistConfig, rootReducer);