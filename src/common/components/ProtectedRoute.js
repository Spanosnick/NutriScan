// components/ProtectedRoute.js
import {Navigate} from "react-router-dom";
import {useAuth} from "../../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
    const { currentUser } = useAuth(); // Assuming `currentUser` exists in the context when authenticated

    if (!currentUser) {
        return <Navigate to="/login" replace />;
    }
    // Render the protected content if authenticated
    return children;
};

export default ProtectedRoute;
