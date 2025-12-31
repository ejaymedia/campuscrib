import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Login from "./pages/Login";
// import Register from "./pages/Register";
import HostelDetails from "./pages/HostelDetails";
import StudentDashboard from "./pages/StudentDashboard";
import LandlordDashboard from "./pages/LandlordDashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      {/* <Route path="/register" element={<Register />} /> */}
      <Route path="/hostel-details" element={<HostelDetails />} />
      <Route path="/dashboard" element={<StudentDashboard />}/>
      <Route path="/landlord-dashboard" element={<LandlordDashboard />}/>
    </Routes>
  );
}