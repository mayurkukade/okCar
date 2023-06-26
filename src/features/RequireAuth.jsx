import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequireAuth = ({ allowedRoles }) => {
  console.log(allowedRoles);
  const location = useLocation();
  const username = localStorage.getItem("userInfo");
  console.log(username == null, true);
  const roles = JSON.parse(username)?.results;

  const userTrue = username == null;

  const content =  userTrue ? (
    <Navigate to="/access" state={{ from: location }} replace />
  ) :allowedRoles.includes(roles?.user[0].role) ? (
    <Outlet />
  ) : (
    <Navigate to="/access" state={{ from: location }} replace />
  );

  return content;
};
export default RequireAuth;
