import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Modal state
    const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
    const [authMode, setAuthMode] = useState("signin"); // "signin" | "signup"
    const [redirectAfterAuth, setRedirectAfterAuth] = useState("/");

    useEffect(() => {
        try {
            const storedUser = localStorage.getItem("CurrentUser");
            if (storedUser) setCurrentUser(JSON.parse(storedUser));
        } catch (error) {
            localStorage.removeItem("CurrentUser");
        }
        setIsLoading(false);
    }, []);

    const login = (userData) => {
        setCurrentUser(userData);
        localStorage.setItem("CurrentUser", JSON.stringify(userData));
    };

    const logout = () => {
        setCurrentUser(null);
        localStorage.removeItem("CurrentUser");
    };

    const isAuthenticated = () => currentUser !== null;

    // Modal controls
    const openAuthModal = (mode = "signin", redirect = "/") => {
        setAuthMode(mode);
        setRedirectAfterAuth(redirect);
        setIsAuthModalOpen(true);
    };

    const closeAuthModal = () => {
        setIsAuthModalOpen(false);
    };

    const switchAuthMode = (mode) => {
        setAuthMode(mode);
    };

    return (
        <AuthContext.Provider
            value={{
                currentUser,
                isLoading,
                login,
                logout,
                isAuthenticated,
                isAuthModalOpen,
                authMode,
                redirectAfterAuth,
                openAuthModal,
                closeAuthModal,
                switchAuthMode,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be used within an AuthProvider");
    return context;
}