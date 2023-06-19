import AdminBuyers from "./components/AdminBuyers/AdminBuyers";
import AdminRequest from "./components/AdminRequest/AdminRequest";
import { Routes, Route } from "react-router-dom";
import DealersModel from "./components/Dealers/DealersModel";

import SignIn from "./components/SignIn/SignIn.jsx";
import Register from "./components/SignUp/SignUp.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import AddCar from "./components/AddCar/AddCar";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import CarList from "./components/CarDetailsCard/CarList";
import CarDetails from "./components/CarDetailsCard/CarDetails";
import Contact from "./components/Contact/Contact";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/adminbuyers" element={<AdminBuyers />} />
        <Route path="/dealer" element={<DealersModel />} />
        <Route path="/adminrequest" element={<AdminRequest />} />
        <Route path="/addcar" element={<AddCar />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/carlist" element={<CarList />} />
        <Route path="/cardetails" element={<CarDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
