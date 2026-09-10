import { useEffect, useState } from "react";
import { useAuth } from "../Auth/AuthContext";
import signInImg from "../../assets/img/logInImg.jpg";
import "./signIn.css";

export default function SignIn() {
    const { login, isAuthenticated, redirectAfterAuth, closeAuthModal, switchAuthMode } = useAuth();

    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [users, setUsers] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [loginError, setLoginError] = useState("");

    useEffect(() => {
        const storedUsers = localStorage.getItem("users");
        if (storedUsers) setUsers(JSON.parse(storedUsers));
    }, []);

    const validateForm = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (loginError) setLoginError("");
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoginError("");

        if (validateForm()) {
            const existingUser = users.find(
                (user) =>
                    user.email.toLowerCase() === formData.email.toLowerCase() &&
                    user.password === formData.password
            );

            if (existingUser) {
                login(existingUser);
                setIsSubmitted(true);

                // 👇 Close modal after success
                setTimeout(() => {
                    closeAuthModal();
                    setFormData({ email: "", password: "" });
                    setIsSubmitted(false);
                }, 800);
            } else {
                const emailExists = users.find(
                    (user) => user.email.toLowerCase() === formData.email.toLowerCase()
                );

                if (emailExists) {
                    setLoginError("Incorrect password. Please try again.");
                } else {
                    setLoginError("No account found. Please sign up first.");
                }
            }
        }
    };

    return (
        <div className="auth-form-content">
            <h2>Login</h2>
            <p className="auth-subtitle">Enter your email to log in.</p>

            {isSubmitted && (
                <div className="success-message">
                    ✅ Login successful! Welcome back!
                </div>
            )}

            {loginError && (
                <div className="error-message">❌ {loginError}</div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={handleChange}
                        className={errors.email ? "error" : ""}
                    />
                    {errors.email && <span className="error-text">{errors.email}</span>}
                </div>

                <div className="form-group">
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}
                        className={errors.password ? "error" : ""}
                    />
                    {errors.password && <span className="error-text">{errors.password}</span>}
                </div>

                <button type="submit" className="sign-in-btn">
                    Sign In
                </button>
            </form>

            <p className="signup-link">
                Don't have an account?{" "}
                <button
                    type="button"
                    className="link-btn"
                    onClick={() => switchAuthMode("signup")}
                >
                    Sign Up
                </button>
            </p>
        </div>
    );
}