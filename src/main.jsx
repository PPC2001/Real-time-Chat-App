import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter,  } from "react-router";
import AppRoutes from "./config/Routes.jsx";
import { ChatProvider } from "./context/ChatContext.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Toaster position="top-center" />
    <ChatProvider>
      <AppRoutes/>
    </ChatProvider>
    </BrowserRouter>
  </StrictMode>
);
