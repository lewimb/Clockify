import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import TimerPage from "./pages/TimerPage.jsx";
import SignInPage from "./pages/auth/SignInPage.jsx";
import RegisterPage from "./pages/auth/RegisterPage.jsx";
import ActivityPage from "./pages/ActivityPage.jsx";
import "./index.css";
import MainLayout from "./layout/MainLayout.jsx";
import AuthLayout from "./layout/AuthLayout.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<TimerPage />} />
          <Route path="/activity" element={<ActivityPage />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="login" element={<SignInPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
