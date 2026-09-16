import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    FaUser,
    FaEnvelope,
    FaPhone,
    FaSave,
    FaTimes,
    FaCamera,
    FaPen,
    FaSignOutAlt,
    FaArrowLeft,
} from "react-icons/fa";
import { useAuth } from "../Auth/AuthContext";
import { useToast } from "../../context/ToastContext";
import "./Profile.css";

export default function Profile() {
    const navigate = useNavigate();
    const { currentUser, login, isAuthenticated, logout } = useAuth();
    const { success, error } = useToast();

    const [isEditing, setIsEditing] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
       
    });

    const [errors, setErrors] = useState({});

    // Load user data
    useEffect(() => {
        if (!isAuthenticated()) {
            navigate("/");
            return;
        }

        if (currentUser) {
            setFormData({
                name: currentUser.name || "",
                email: currentUser.email || "",
                phone: currentUser.phone || "",
            });
        }
    }, [currentUser, isAuthenticated, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        } else if (formData.name.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = "Please enter a valid email";
        }

       

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSave = (e) => {
        e.preventDefault();

        if (!validateForm()) return;

        const users = JSON.parse(localStorage.getItem("users") || "[]");
        const emailExists = users.find(
            (u) =>
                u.email.toLowerCase() === formData.email.toLowerCase() &&
                u.id !== currentUser.id
        );

        if (emailExists) {
            error("This email is already registered");
            return;
        }

        const updatedUsers = users.map((u) =>
            u.id === currentUser.id
                ? {
                      ...u,
                      name: formData.name.trim(),
                      email: formData.email.toLowerCase(),
                      phone: formData.phone.trim(),
                  }
                : u
        );

        localStorage.setItem("users", JSON.stringify(updatedUsers));

        const updatedUser = {
            ...currentUser,
            name: formData.name.trim(),
            email: formData.email.toLowerCase(),
            phone: formData.phone.trim(),
        };

        login(updatedUser);
        success("Profile updated successfully! ✅");
        setIsEditing(false);
    };

    const handleCancel = () => {
        setFormData({
            name: currentUser.name || "",
            email: currentUser.email || "",
            
        });
        setErrors({});
        setIsEditing(false);
    };

    const handleLogout = () => {
        logout();
        success("Logged out successfully");
        navigate("/");
    };

    const getInitials = () => {
        const name = currentUser?.name || "U";
        return name.charAt(0).toUpperCase();
    };

    if (!currentUser) return null;

    return (
        <section className="profile-page">
            <div className="profile-container">

                {/* <button className="profile-back-btn" onClick={() => navigate(-1)}><FaArrowLeft size={14}/> <span>Back</span></button> */}

                {/* ===== HERO HEADER ===== */}
                <div className="profile-hero">
                    <div className="profile-hero-bg"></div>
                    <div className="profile-hero-content">
                        <div className="profile-avatar-wrapper">
                            <div className="profile-avatar-ring">
                                <div className="profile-avatar">
                                    {getInitials()}
                                </div>
                            </div>
                            {isEditing && (
                                <button
                                    type="button"
                                    className="profile-avatar-edit"
                                    title="Change photo"
                                >
                                    <FaCamera size={12} />
                                </button>
                            )}
                        </div>

                        <h1 className="profile-hero-name">{currentUser.name}</h1>
                        <p className="profile-hero-email">{currentUser.email}</p>

                        <div className="profile-hero-badges">
                            <span className="profile-badge"> Poke Lover</span>
                            <span className="profile-badge"> Member</span>
                        </div>
                    </div>
                </div>

                {/* ===== INFO CARD ===== */}
                <div className="profile-card">
                    <div className="profile-card-header">
                        <div>
                            <h2>Account Information</h2>
                            <p>Manage your personal details</p>
                        </div>
                        {!isEditing && (
                            <button
                                className="profile-edit-icon-btn"
                                onClick={() => setIsEditing(true)}
                            >
                                <FaPen size={14} />
                                Edit
                            </button>
                        )}
                    </div>

                    <div className="profile-divider"></div>

                    <form onSubmit={handleSave} className="profile-form">
                        {/* Full Name */}
                        <div className="profile-field">
                            <label>
                                <FaUser size={12} />
                                Full Name
                            </label>
                            {isEditing ? (
                                <>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={errors.name ? "error" : ""}
                                        placeholder="Enter your full name"
                                    />
                                    {errors.name && (
                                        <span className="profile-error">
                                            {errors.name}
                                        </span>
                                    )}
                                </>
                            ) : (
                                <p className="profile-value">{currentUser.name}</p>
                            )}
                        </div>

                        {/* Email */}
                        <div className="profile-field">
                            <label>
                                <FaEnvelope size={12} />
                                Email Address
                            </label>
                            {isEditing ? (
                                <>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={errors.email ? "error" : ""}
                                        placeholder="Enter your email"
                                    />
                                    {errors.email && (
                                        <span className="profile-error">
                                            {errors.email}
                                        </span>
                                    )}
                                </>
                            ) : (
                                <p className="profile-value">{currentUser.email}</p>
                            )}
                        </div>

                     
                        {/* Actions */}
                        {isEditing && (
                            <div className="profile-actions">
                                <button
                                    type="button"
                                    className="profile-cancel-btn"
                                    onClick={handleCancel}
                                >
                                    <FaTimes size={12} />
                                    Cancel
                                </button>
                                <button type="submit" className="profile-save-btn">
                                    <FaSave size={12} />
                                    Save Changes
                                </button>
                            </div>
                        )}
                    </form>

                    <div className="profile-divider"></div>

                    {/* Logout Section */}
                    <div className="profile-logout-section">
                        <div>
                            <h3>Logout</h3>
                            <p>Sign out from your account</p>
                        </div>
                        <button
                            className="profile-logout-btn"
                            onClick={handleLogout}
                        >
                            <FaSignOutAlt size={14} />
                            Logout
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}