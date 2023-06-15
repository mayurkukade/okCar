import AdminBuyers from "./components/AdminBuyers/AdminBuyers";
import AdminRequest from "./components/AdminRequest/AdminRequest";
import { Routes, Route } from "react-router-dom";
import DealersModel from "./components/Dealers/DealersModel";

import SignIn from "./components/SignIn/SignIn.jsx";
import Register from "./components/SignUp/SignUp.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import NotFound from "./components/NotFound/NotFound.jsx";
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/adminbuyers" element={<AdminBuyers />} />
        <Route path="/dealer" element={<DealersModel />} />
        <Route path="/adminrequest" element={<AdminRequest />} />
        <Route path="*" element={<NotFound />} />
        
      </Routes>
    </>
  );
};
 
export default App;
