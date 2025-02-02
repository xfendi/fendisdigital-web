import { Navigate } from "react-router-dom";
import { useUser } from "../Context/UserContext";

const ProtectedRoute = ({ children }) => {
  const user = useUser();
  return user.user ? children : <Navigate to="/" />;
};

export default ProtectedRoute;