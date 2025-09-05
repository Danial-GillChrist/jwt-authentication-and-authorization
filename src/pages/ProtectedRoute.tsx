import { Navigate, Outlet } from "react-router";


const ProtectedRoute = () => {
  const token = localStorage.getItem("token");

  // if no token, redirect to login
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // otherwise render the child routes
  return <Outlet />;
};

export default ProtectedRoute;
