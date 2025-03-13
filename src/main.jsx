import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import TimerPage from "./pages/TimerPage.jsx";
import SignInPage from "./pages/auth/SignInPage.jsx";
import RegisterPage from "./pages/auth/RegisterPage.jsx";
import ActivityPage from "./pages/ActivityPage.jsx";
import MainLayout from "./layout/MainLayout.jsx";
import AuthLayout from "./layout/AuthLayout.jsx";
import EmailPage from "./pages/auth/EmailPage.jsx";
import EditPage from "./pages/EditPage.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import "./index.css";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<MainLayout />}>
              <Route index element={<TimerPage />} />
              <Route path="/activity" element={<ActivityPage />} />
              <Route path="/activity/:id" element={<EditPage />} />
            </Route>
            <Route element={<AuthLayout />}>
              <Route path="login" element={<SignInPage />} />
              <Route path="register" element={<RegisterPage />} />
              <Route path="verify-email" element={<EmailPage />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
