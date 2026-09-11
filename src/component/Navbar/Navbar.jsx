import { useState, useRef, useEffect } from "react";
import logo from "../../assets/img/logo.svg";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart, FaUser, FaSignOutAlt } from "react-icons/fa";
import { useAuth } from "../../pages/Auth/AuthContext";
import { useCart } from "../../pages/Cart/CartContext";
import "./Navbar.css";

const MINIMAL_NAVBAR_ROUTES = [
    
    "/store-location",
    "/order",
    "/cart",
    "/order-review",
    "/payment",
    "/thank-you",
    "/menu/see-all",
];

export default function Navbar({ onBookTable }) {
    const navigate = useNavigate();
    const location = useLocation();
    const { currentUser, isAuthenticated, logout, openAuthModal } = useAuth();
    const { cartCount } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

    const userMenuRef = useRef(null);

    const isMinimalNavbar = MINIMAL_NAVBAR_ROUTES.includes(location.pathname);

    // Close user dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (userMenuRef.current && !userMenuRef.current.contains(e.target)) {
                setIsUserMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleOrderOnline = () => {
        if (isAuthenticated()) {
            navigate("/order");
        } else {
            openAuthModal("signin", "/order");
        }
        setIsMenuOpen(false);
    };

    const handleBookTable = () => {
        onBookTable();
        setIsMenuOpen(false);
    };

    const handleCartClick = () => {
        navigate("/order-review");
        setIsMenuOpen(false);
    };

    const handleLogout = () => {
        logout();
        setIsUserMenuOpen(false);
        navigate("/");
    };

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);
    const toggleUserMenu = () => setIsUserMenuOpen(!isUserMenuOpen);

    const UserDropdown = () => {
        if (!isAuthenticated()) return null;

        return (
            <div className="user-dropdown-wrapper" ref={userMenuRef}>
                <button className="user-icon-btn" onClick={toggleUserMenu}>
                    <FaUser size={16} />
                </button>

                {isUserMenuOpen && (
                    <div className="user-dropdown">
                        <div className="dropdown-user-info">
                            <div className="dropdown-avatar">
                                {currentUser?.name?.charAt(0).toUpperCase() || "U"}
                            </div>
                            <div className="dropdown-user-details">
                                <p className="dropdown-name">
                                    {currentUser.name}
                                </p>
                                <p className="dropdown-email">
                                    {currentUser.email }
                                </p>
                            </div>
                        </div>

                        <div className="dropdown-divider"></div>

                        <button className="dropdown-logout" onClick={handleLogout}>
                            <FaSignOutAlt size={14} />
                            <span>Logout</span>
                        </button>
                    </div>
                )}
            </div>
        );
    };

    // ============================================
    // MINIMAL NAVBAR
    // ============================================
    if (isMinimalNavbar) {
        return (
            <section className="navbar minimal-navbar">
                <div className="nav-container">
                    <div className="nav-left">
                        <Link to="/" className="nav-logo-link">
                            <img src={logo} alt="Poke Now Logo" />
                            <h1>POKE NOW</h1>
                        </Link>
                    </div>

                    <div className="nav-right minimal-right">
                        {isAuthenticated() ? (
                            <UserDropdown />
                        ) : (
                            <div className="auth-links">
                                <button
                                    className="auth-link"
                                    onClick={() => openAuthModal("signin", "/")}
                                >
                                    Sign in
                                </button>
                                <span className="auth-divider">/</span>
                                <button
                                    className="auth-link"
                                    onClick={() => openAuthModal("signup", "/")}
                                >
                                    Sign up
                                </button>
                            </div>
                        )}

                        <div className="cart-pill" onClick={handleCartClick}>
                            <FaShoppingCart size={16} />
                            <span className="cart-count">{cartCount}</span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    // ============================================
    // FULL NAVBAR
    // ============================================
    return (
        <section className={`navbar ${isMenuOpen ? "menu-open" : ""}`}>
            <div className="nav-container">
                <div className="nav-left">
                    <Link to="/" className="nav-logo-link" onClick={closeMenu}>
                        <img src={logo} alt="Poke Now Logo" />
                        <h1>POKE NOW</h1>
                    </Link>
                </div>

                <div className={`nav-center ${isMenuOpen ? "active" : ""}`}>
                    <ul>
                        <li><Link to="/menu" onClick={closeMenu}>Menu</Link></li>
                        <li><Link to="/our-story" onClick={closeMenu}>Our story</Link></li>
                        <li><Link to="/location" onClick={closeMenu}>Location</Link></li>
                        <li><Link to="/gift-card" onClick={closeMenu}>Gift card</Link></li>
                    </ul>

                    <div className="nav-right-mobile">
                        <button onClick={handleOrderOnline}>Order Online</button>
                        <button onClick={handleBookTable}>Book a Table</button>
                    </div>
                </div>

                <div className="nav-right">
                    <button className="order-btn" onClick={handleOrderOnline}>
                        Order Online
                    </button>
                    <button className="book-btn" onClick={handleBookTable}>
                        Book a Table
                    </button>

                    {isAuthenticated() && <UserDropdown />}
                </div>

                <div className="hamburger" onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </div>
            </div>
        </section>
    );
}