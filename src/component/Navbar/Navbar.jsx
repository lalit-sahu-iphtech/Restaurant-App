import { useState } from "react";
import logo from "../../assets/img/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar({ onBookTable }) {
    const navigate = useNavigate();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleOrderOnline = () => {
        navigate("/order");
        setIsMenuOpen(false);
    };

    // 👇 Sirf modal open karo, navigate NAHI karo
    const handleBookTable = () => {
        onBookTable();     
        setIsMenuOpen(false);
       
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <section className={`navbar ${isMenuOpen ? "menu-open" : ""}`}>
            <div className="nav-container">
                {/* Left - Logo */}
                <div className="nav-left">
                    <Link to="/" className="nav-logo-link" onClick={closeMenu}>
                        <img src={logo} alt="Poke Now Logo" />
                        <h1>POKE NOW</h1>
                    </Link>
                </div>

                {/* Center - Desktop Menu */}
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

                {/* Right - Desktop Buttons */}
                <div className="nav-right">
                    <button onClick={handleOrderOnline}>Order Online</button>
                    <button onClick={handleBookTable}>Book a Table</button>
                </div>

                <div className="hamburger" onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                </div>
            </div>
        </section>
    );
}