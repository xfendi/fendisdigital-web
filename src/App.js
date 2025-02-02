import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UserProvider } from "./Context/UserContext";

import Landing from "./Pages/Landing";
import Success from "./Pages/Success";
import Cancel from "./Pages/Cancel";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Panel from "./Pages/Panel";
import ProtectedRoute from "./Components/ProtectedRoute";

const App = () => {
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
