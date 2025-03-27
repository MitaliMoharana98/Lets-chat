import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";
import SignUpPage from "./Pages/SignUpPage";
import LogInPage from "./Pages/LogInPage";
import SettingsPage from "./Pages/SettingsPage";
import ProfilePage from "./Pages/ProfilePage";
import { Route, Routes } from "react-router-dom";
import { useAuthStore } from "./store/useAuthStore";

const App = () => {
  const { authUser, checkAuth } = useAuthStore();

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);
  console.log({ authUser });
  
  return (
    <div>
      <Navbar />
      <Routes>
        <Route>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
