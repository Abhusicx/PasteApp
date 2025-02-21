import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
        <div className="min-h-screen w-screen overflow-hidden bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center">
          <div className="w-full max-w-7xl px-6 py-4 shadow-2xl rounded-xl border border-gray-700 bg-gray-950/90 backdrop-blur-lg">
            <App />
          </div>
          <Toaster position="top-right" toastOptions={{ 
          className: "bg-gray-800 text-white shadow-lg rounded-lg px-4 py-2"
        }}/>
        </div>
    </Provider>
  </StrictMode>
);
