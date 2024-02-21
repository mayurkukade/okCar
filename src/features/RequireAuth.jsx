import { useLocation, Navigate, Outlet } from "react-router-dom";
import jwtDecode from "jwt-decode";
import Cookies from "js-cookie";
const RequireAuth = ({ allowedRoles }) => {
  console.log(allowedRoles,'alloweroles');
  const location = useLocation();
  const cookiesJwt = Cookies.get("cookie");

let userAuthRoles = [];

  try {
  
    const decodejwt = jwtDecode(cookiesJwt);
    userAuthRoles = decodejwt.authorities[0];
    console.log(allowedRoles.includes(userAuthRoles))
    console.log(cookiesJwt);
  } catch (error) {
   
  
    // toast.error('please login first')
  }
  // const userTrue = username == null;

  // const content =  userTrue ? (
  //   <Navigate to="/access" state={{ from: location }} replace />
  // ) :allowedRoles.includes(role[0]) ? (
  //   <Outlet />
  // ) : (
  //   <Navigate to="/access" state={{ from: location }} replace />
  // );

  const content = allowedRoles.includes(userAuthRoles) ? (
    <Navigate to="/access" state={{ from: location }} replace />
  ) : (
    <Outlet/>
  )
  return content;
};
export default RequireAuth;
