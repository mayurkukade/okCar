import AdminBuyers from "./components/AdminBuyers/AdminBuyers";
import AdminRequest from "./components/AdminRequest/AdminRequest";
import { Routes, Route } from "react-router-dom";
import DealersModel from "./components/Dealers/DealersModel";

import SignIn from "./components/SignIn/SignIn.jsx";
import Register from "./components/SignUp/SignUp.jsx";

import NotFound from "./components/NotFound/NotFound.jsx";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import AddCar from "./components/AddCar/AddCar";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import CarCard from "./components/CarDetailsCard/CarDetails";

import RequireAuth from "./features/RequireAuth";
import AppLayout from "./components/appLayout/AppLayout";
import { OnlyAdmin } from "./config/role";

import CantAccess from "./components/cantAccess/CantAccess";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Register />} />
        <Route element={<AppLayout />}>
          <Route
            element={
              <RequireAuth allowedRoles={[...Object.values(OnlyAdmin)]} />
            }
          >
            <Route path="/adminbuyers" element={<AdminBuyers />} />
          </Route>
        </Route>

        <Route path="/" element={<Home />} />

        <Route path="/dealer" element={<DealersModel />} />
        <Route path="/adminrequest" element={<AdminRequest />} />
        <Route path="/addcar" element={<AddCar />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/cardetails" element={<CarCard />} />
        <Route path="/access" element={<CantAccess />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
