import { createStore, applyMiddleware, compose } from "redux";
import { persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunk from "redux-thunk";
import logger from "redux-logger";
import reducer from "./reducer";

const persistConfig = {
    key: 'root',
    storage: storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);


const store = createStore(persistedReducer, {}, applyMiddleware(thunk, logger));
export default store;
