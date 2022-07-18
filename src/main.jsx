import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Appointments from "./pages/Appointments";
import Appointment from "./pages/Appointment";
import Home from "./pages/Home";
import Login from "./pages/Login";
import AddApp from "./pages/AddApp";
import  { AuthProvider } from "./context/AuthContext";
import Nav from "./components/Navbar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
      <AuthProvider>
<Nav></Nav>        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/appointments" element={<Appointments />} />
          <Route path="/appointment" >
            <Route path=":appointmentId" element={<Appointment />} />
            <Route path="add" element={<AddApp />} />
          </Route>
          {/* <App /> */}
        </Routes>
      </AuthProvider>

      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
