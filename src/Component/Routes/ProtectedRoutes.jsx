import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({children}) => {
    const isAuthenticated = localStorage.getItem("user"); // Check if user is logged in

    return isAuthenticated ? children : <Navigate to = "/"/>; //Redirect to login if not authenticated
};

export default ProtectedRoutes