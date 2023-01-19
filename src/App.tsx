import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ChatRoomPage from "./components/ChatRoom";
import LoginPage from "./components/Login";
import AuthProvider from "./context/AuthProvider";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<ChatRoomPage />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
