import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import { UserProvider } from "./Context/UserContext";

import Landing from "./Pages/Landing";
import Success from "./Pages/Success";
import Cancel from "./Pages/Cancel";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Panel from "./Pages/Panel";
import ProtectedRoute from "./Components/ProtectedRoute";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Czas trwania animacji
      easing: "ease-in-out", // Easing
      once: true, // Animacja raz
    });
  }, []);

  return (
    <UserProvider>
      <BrowserRouter>
        <div className="flex flex-col bg-neutral-950 !text-white">
          <Routes>
            <Route index element={<Landing />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />

            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

            <Route
              path="/panel"
              element={
                <ProtectedRoute>
                  <Panel />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
