import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import UserManagement from "./components/UserManagement";
import RoleManagement from "./components/RoleManagement";
import PermissionManager from "./components/PermissionManager";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<UserManagement />} />
                <Route path="/roles" element={<RoleManagement />} />
                <Route path="/permissions" element={<PermissionManager />} />
            </Routes>
        </Router>
    );
}

export default App;
