import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useAuth } from "../../pages/Auth/AuthContext";

export default function ProtectedRoute({ children }) {
    const location = useLocation();
    const navigate = useNavigate();

    const { isAuthenticated, openAuthModal, isLoading } = useAuth();

    useEffect(() => {
        if (!isLoading && !isAuthenticated()) {
            //  Sirf modal open karo + path save karo
    
            openAuthModal("signin", location.pathname);
            navigate("/", {replace : true});
            
        }
    }, [isAuthenticated, isLoading, location.pathname, openAuthModal]);

    if (isLoading || !isAuthenticated()) {
        return (
            <div className="protected-loading">
                <p>Loading...</p>
            </div>
        );
    }

    return children;
}