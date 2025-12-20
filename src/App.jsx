import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import HostelDetails from "./pages/HostelDetails";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hostel-details" element={<HostelDetails />} />
    </Routes>
  );
}