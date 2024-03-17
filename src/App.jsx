import React from "react";
import NavBar from "../src/components/NavBar";
import LoginForm from "../src/components/Forms/LoginForm";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import VendorsDashboard from "./components/Vendors/VendorsDashboard";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminSideBar from "./components/Admin/AdminSideBar";
import './App.css';

function App() {
  return (
    <Router>
        <Routes>
        <Route path="/login" element={<LoginForm />} />
          <Route path="/dashboard" element={<div><NavBar /> <VendorsDashboard />  </div>} />
          <Route path="/adminpanel" element={<AdminDashboard />} />    
          {/* Other routes go here */}
        </Routes>
    </Router>
  );
}
export default App;