import { Navigate } from "react-router-dom";
import { useAuth } from "../../Services/Context/Context";

const ProtectedRoute = ({ children }) => {
  const { isAdmin, loading } = useAuth();
  if (loading) return <div>Loading...</div>;
  if (!isAdmin) return <Navigate to="/login" />;
  return children;
};
export default ProtectedRoute;
