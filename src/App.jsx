import AdminBuyers from "./components/AdminBuyers/AdminBuyers"
import AdminRequest from './components/AdminRequest/AdminRequest'
import { Routes,Route } from "react-router-dom"
import DealersModel from "./components/Dealers/DealersModel"

import SignIn from "./pages/SignIn"
import Register from "./pages/Register"

const App = () => {
  return (
    <>

    <Routes>
   
      <Route path="/" element={<SignIn/>} />
      <Route path="/signup" element={<Register/>} />
      <Route path='/adminbuyers' element={<AdminBuyers/>} />
      <Route path="/dealer" element={<DealersModel/>} />
      <Route path="/adminrequest" element={<AdminRequest/>} />
    </Routes>
    
    </>
  )
}

export default App

