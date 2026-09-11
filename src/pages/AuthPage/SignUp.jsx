import { useEffect, useState } from "react";
import { useAuth } from "../Auth/AuthContext";
import signInImg from "../../assets/img/logInImg.jpg";
import "./signUp.css";

export default function SignUp() {
    const { login, redirectAfterAuth, closeAuthModal, switchAuthMode } = useAuth();

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const [users, setUsers] = useState([]);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const storedUsers = localStorage.getItem("users");
        if (storedUsers) setUsers(JSON.parse(storedUsers));
    }, []);

    const validateForm = () => {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        } else if (formData.name.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email address";
        }

        const existingUser = users.find(
            (user) => user.email.toLowerCase() === formData.email.toLowerCase()
        );
        if (existingUser) {
            newErrors.email = "This email is already registered";
        }

        if (!formData.password) {
            newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        } else if (!/[A-Z]/.test(formData.password)) {
            newErrors.password = "Must contain uppercase letter";
        } else if (!/[a-z]/.test(formData.password)) {
            newErrors.password = "Must contain lowercase letter";
        } else if (!/[0-9]/.test(formData.password)) {
            newErrors.password = "Must contain a number";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            const newUser = {
                id: Date.now().toString(),
                name: formData.name.trim(),
                email: formData.email.toLowerCase(),
                password: formData.password,
                createdAt: new Date().toISOString(),
            };

            const updatedUsers = [...users, newUser];
            setUsers(updatedUsers);
            localStorage.setItem("users", JSON.stringify(updatedUsers));

            login(newUser);
            setIsSubmitted(true);

            //  Close modal after success
            setTimeout(() => {
                closeAuthModal();
                setFormData({ name: "", email: "", password: "" });
                setIsSubmitted(false);
            }, 800);
        }
    };

    return (
        <div className="auth-form-content">
            <h2>Sign Up</h2>
            <p className="auth-subtitle">Create your Account</p>

            {isSubmitted && (
                <div className="success-message">
                     Account created! Welcome!
                </div>
            )}

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}
                        className={errors.name ? "error" : ""}
                    />
                    {errors.name && <span className="error-text">{errors.name}</span>}
                </div>

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

                <button type="submit" className="sign-up-btn">
                    Sign Up
                </button>
            </form>

            <p className="login-link">
                Already have an account?{" "}
                <button
                    type="button"
                    className="link-btn"
                    onClick={() => switchAuthMode("signin")}
                >
                    Sign In
                </button>
            </p>
        </div>
    );
}