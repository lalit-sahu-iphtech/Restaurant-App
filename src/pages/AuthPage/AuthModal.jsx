import { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { useAuth } from "../Auth/AuthContext";
import SignIn from "../../pages/AuthPage/SignIn";
import SignUp from "../../pages/AuthPage/SignUp";
import signInImg from "../../assets/img/logInImg.jpg";
import "./AuthModal.css";

export default function AuthModal() {
    const { isAuthModalOpen, authMode, closeAuthModal } = useAuth();

    // ESC key to close
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") closeAuthModal();
        };
        if (isAuthModalOpen) {
            document.addEventListener("keydown", handleEsc);
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "unset";
        };
    }, [isAuthModalOpen, closeAuthModal]);

    if (!isAuthModalOpen) return null;

    return (
        <div className="auth-modal-overlay" onClick={closeAuthModal}>
            <div className="auth-modal" onClick={(e) => e.stopPropagation()}>
                <button className="auth-modal-close" onClick={closeAuthModal}>
                    <FaTimes />
                </button>

                {/* Left - Image */}
                <div className="auth-modal-image">
                    <img src={signInImg} alt="auth" />
                </div>

                {/* Right - SignIn OR SignUp Component */}
                <div className="auth-modal-form">
                    {authMode === "signup" ? <SignUp /> : <SignIn />}
                </div>
            </div>
        </div>
    );
}