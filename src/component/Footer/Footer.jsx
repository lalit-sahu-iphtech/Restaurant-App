import { Link } from "react-router-dom";
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import logo from "../../assets/img/logo.svg"; 
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-top">
                    <div className="footer-left">
                        <div className="footer-brand">
                            <img src={logo} alt="Poke Now logo" />
                            <span>POKE NOW.</span>
                        </div>

                        <nav className="footer-nav">
                            <Link to="/menu">Menu</Link>
                            <Link to="/our-story">Our story</Link>
                            <Link to="/location">Location</Link>
                            <Link to="/gift-card">Gift card</Link>
                        </nav>
                    </div>

                    <div className="footer-right">
                        <div className="footer-buttons">
                            <Link to="/order-online" className="btn-outline">Order Online</Link>
                            <Link to="/book-table" className="btn-filled">Book a Table</Link>
                        </div>

                        <p className="footer-address">
                            848 King Street, Mesa, AZ 85201, Boston, USA
                        </p>
                        <a href="mailto:info@pokebar.com" className="footer-email">
                            info@pokebar.com
                        </a>

                        <div className="footer-socials">
                            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
                            <a href="https://facebook.com" target="_blank" rel="noreferrer"><FaFacebookF /></a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
                            <a href="https://youtube.com" target="_blank" rel="noreferrer"><FaYoutube /></a>
                        </div>
                    </div>
                </div>

                {/* <hr className="footer-divider" /> */}

                <div className="footer-bottom">
                    <p>
                        © 2022 Brand, Inc. • <Link to="/privacy">Privacy</Link> • <Link to="/terms">Terms</Link> • <Link to="/sitemap">Sitemap</Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}