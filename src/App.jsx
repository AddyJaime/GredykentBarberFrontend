/* eslint-disable no-unused-vars */
import "./App.css";
import BookingPage from "./Pages/Booking/BookingPage";
import "antd/dist/reset.css";
import HomePage from "./Pages/Home/HomePage";
import ServicesPage from "./Pages/Services/ServicesPage";
("./Components/ServiceCard/ServiceCard");
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminPage from "./Pages/Admin/AdminPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/admin" element={<AdminPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
