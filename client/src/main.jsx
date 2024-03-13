import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./Redux/store.jsx";
import { Provider } from "react-redux";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <GoogleOAuthProvider clientId="450635134786-nhgbglq4gq3o3m5lmdqdgbkr24ferm9v.apps.googleusercontent.com">
                    <App />
                </GoogleOAuthProvider>
            </PersistGate>
        </Provider>
    </React.StrictMode>
);
