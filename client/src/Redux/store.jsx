import { configureStore } from "@reduxjs/toolkit";
import authenticationSliceReducer from "./Authentication/UserSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
    key: "user",
    storage,
};

const persistedReducer = persistReducer(
    persistConfig,
    authenticationSliceReducer
);

let store = configureStore({
    reducer: {
        auth: persistedReducer,
    },
});

let persistor = persistStore(store);

export { store, persistor };
