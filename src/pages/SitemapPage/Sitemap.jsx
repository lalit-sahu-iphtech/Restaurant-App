import "./Sitemap.css";

export default function Sitemap() {
    return (
        <section className="sitemap-page">
            <div className="sitemap-container">
                {/* Header Section */}
                <div className="sitemap-header">
                    <h1>Sitemap</h1>
                    <p className="sitemap-subtitle">
                        Navigate through all pages of Poke Now. Find what you're looking for quickly and easily.
                    </p>
                </div>

                <div className="sitemap-content">
                    {/* Main Navigation */}
                    <div className="sitemap-section">
                        <div className="sitemap-section-header">
                            <div className="section-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M3 9L12 3L21 9L12 15L3 9Z" stroke="#F96540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M9 21V15" stroke="#F96540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M15 21V15" stroke="#F96540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M3 9V21" stroke="#F96540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M21 9V21" stroke="#F96540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M3 15H21" stroke="#F96540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h2>Main Pages</h2>
                        </div>
                        <div className="sitemap-grid">
                            <div className="sitemap-item">
                                <div className="sitemap-item-icon"></div>
                                <div className="sitemap-item-content">
                                    <h3>Home</h3>
                                    <p>Welcome to Poke Now - Fresh poke bowls delivered to you</p>
                                    <a href="/">/</a>
                                </div>
                            </div>
                            <div className="sitemap-item">
                                <div className="sitemap-item-icon"></div>
                                <div className="sitemap-item-content">
                                    <h3>Menu</h3>
                                    <p>Explore our delicious poke bowl options</p>
                                    <a href="/menu">/menu</a>
                                </div>
                            </div>
                            <div className="sitemap-item">
                                <div className="sitemap-item-icon"></div>
                                <div className="sitemap-item-content">
                                    <h3>Locations</h3>
                                    <p>Find our locations and hours of operation</p>
                                    <a href="/locations">/locations</a>
                                </div>
                            </div>
                            <div className="sitemap-item">
                                <div className="sitemap-item-icon"></div>
                                <div className="sitemap-item-content">
                                    <h3>Gift Cards</h3>
                                    <p>Give the perfect gift with our gift cards</p>
                                    <a href="/gift-cards">/gift-cards</a>
                                </div>
                            </div>
                            <div className="sitemap-item">
                                <div className="sitemap-item-icon"></div>
                                <div className="sitemap-item-content">
                                    <h3>Contact</h3>
                                    <p>Get in touch with our team</p>
                                    <a href="/contact">/contact</a>
                                </div>
                            </div>
                            <div className="sitemap-item">
                                <div className="sitemap-item-icon"></div>
                                <div className="sitemap-item-content">
                                    <h3>Account</h3>
                                    <p>Manage your account and orders</p>
                                    <a href="/account">/account</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Legal Pages */}
                    <div className="sitemap-section">
                        <div className="sitemap-section-header">
                            <div className="section-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F96540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 8V12" stroke="#F96540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 16H12.01" stroke="#F96540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h2>Legal Pages</h2>
                        </div>
                        <div className="sitemap-grid legal-grid">
                            <div className="sitemap-item legal-item">
                                <div className="sitemap-item-icon"></div>
                                <div className="sitemap-item-content">
                                    <h3>Privacy Policy</h3>
                                    <p>How we protect and handle your data</p>
                                    <a href="/privacy">/privacy</a>
                                </div>
                            </div>
                            <div className="sitemap-item legal-item">
                                <div className="sitemap-item-icon"></div>
                                <div className="sitemap-item-content">
                                    <h3>Terms of Service</h3>
                                    <p>Terms and conditions for using our services</p>
                                    <a href="/terms">/terms</a>
                                </div>
                            </div>
                            <div className="sitemap-item legal-item">
                                <div className="sitemap-item-icon"></div>
                                <div className="sitemap-item-content">
                                    <h3>Cookie Policy</h3>
                                    <p>How we use cookies on our website</p>
                                    <a href="/cookies">/cookies</a>
                                </div>
                            </div>
                            <div className="sitemap-item legal-item">
                                <div className="sitemap-item-icon"></div>
                                <div className="sitemap-item-content">
                                    <h3>Sitemap</h3>
                                    <p>Complete site navigation guide</p>
                                    <a href="/sitemap">/sitemap</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="sitemap-section">
                        <div className="sitemap-section-header">
                            <div className="section-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z" stroke="#F96540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21" stroke="#F96540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            <h2>Quick Links</h2>
                        </div>
                        <div className="quick-links-grid">
                            <div className="quick-link-item">
                                <a href="/order">
                                    <span className="quick-link-icon"></span>
                                    <span>Order Now</span>
                                </a>
                            </div>
                            <div className="quick-link-item">
                                <a href="/catering">
                                    <span className="quick-link-icon"></span>
                                    <span>Catering</span>
                                </a>
                            </div>
                            <div className="quick-link-item">
                                <a href="/rewards">
                                    <span className="quick-link-icon"></span>
                                    <span>Rewards</span>
                                </a>
                            </div>
                            <div className="quick-link-item">
                                <a href="/careers">
                                    <span className="quick-link-icon"></span>
                                    <span>Careers</span>
                                </a>
                            </div>
                            <div className="quick-link-item">
                                <a href="/faq">
                                    <span className="quick-link-icon"></span>
                                    <span>FAQ</span>
                                </a>
                            </div>
                            <div className="quick-link-item">
                                <a href="/blog">
                                    <span className="quick-link-icon"></span>
                                    <span>Blog</span>
                                </a>
                            </div>
                            <div className="quick-link-item">
                                <a href="/about">
                                    <span className="quick-link-icon"></span>
                                    <span>About Us</span>
                                </a>
                            </div>
                            <div className="quick-link-item">
                                <a href="/press">
                                    <span className="quick-link-icon"></span>
                                    <span>Press</span>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Site Statistics */}
                    <div className="sitemap-stats">
                        <div className="stat-item">
                            <div className="stat-number">12+</div>
                            <div className="stat-label">Pages</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">8</div>
                            <div className="stat-label">Quick Links</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">4</div>
                            <div className="stat-label">Legal Pages</div>
                        </div>
                        <div className="stat-item">
                            <div className="stat-number">24/7</div>
                            <div className="stat-label">Support</div>
                        </div>
                    </div>

                    {/* Footer Note */}
                    <div className="sitemap-footer">
                        <p>
                            Can't find what you're looking for? 
                            <a href="/contact"> Contact us</a> and we'll help you out!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}