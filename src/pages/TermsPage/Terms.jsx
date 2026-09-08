import "./Terms.css";

export default function Terms() {
    return (
        <section className="terms-page">
            <div className="terms-container">
                {/* Header Section */}
                <div className="terms-header">
                    <h1>Terms of Service</h1>
                    <p className="terms-subtitle">
                        Welcome to Poke Now. By using our services, you agree to these terms.
                    </p>
                    <p className="terms-date">Last Updated: January 1, 2026</p>
                </div>

                <div className="terms-content">
                    {/* Section 1 */}
                    <div className="terms-section">
                        <div className="section-number">01</div>
                        <div className="section-content">
                            <h2>Agreement to Terms</h2>
                            <p>
                                By accessing or using the Poke Now website, mobile application, or any 
                                of our services, you agree to be bound by these Terms of Service. 
                                If you do not agree to these terms, please do not use our services.
                            </p>
                            <p>
                                These terms constitute a legally binding agreement between you and 
                                Poke Now. We reserve the right to update or modify these terms at any 
                                time without prior notice. Your continued use of our services after 
                                any changes constitutes your acceptance of the new terms.
                            </p>
                        </div>
                    </div>

                    {/* Section 2 */}
                    <div className="terms-section">
                        <div className="section-number">02</div>
                        <div className="section-content">
                            <h2>Use of Our Services</h2>
                            <p>
                                You agree to use our services only for lawful purposes and in accordance 
                                with these terms. You are responsible for:
                            </p>
                            <ul>
                                <li>Providing accurate and complete information when placing orders</li>
                                <li>Maintaining the security of your account credentials</li>
                                <li>All activities that occur under your account</li>
                                <li>Complying with all applicable laws and regulations</li>
                            </ul>
                            <div className="warning-box">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F96540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 8V12" stroke="#F96540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 16H12.01" stroke="#F96540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p>
                                    <strong>Important:</strong> You must be at least 18 years old to use 
                                    our services. By using our services, you confirm that you meet this 
                                    age requirement.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section 3 */}
                    <div className="terms-section">
                        <div className="section-number">03</div>
                        <div className="section-content">
                            <h2>Orders and Payments</h2>
                            <p>
                                When you place an order with Poke Now, you agree to the following terms:
                            </p>
                            <ul>
                                <li>
                                    <strong>Order Confirmation:</strong> You will receive an order 
                                    confirmation via email or SMS once your order is placed.
                                </li>
                                <li>
                                    <strong>Pricing:</strong> All prices are listed in USD and are 
                                    subject to change without notice. Tax and delivery fees may apply.
                                </li>
                                <li>
                                    <strong>Payment:</strong> You authorize us to charge your selected 
                                    payment method for the total amount of your order.
                                </li>
                                <li>
                                    <strong>Cancellation:</strong> You may cancel your order within 5 
                                    minutes of placing it. After that, cancellation may not be possible.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Section 4 */}
                    <div className="terms-section">
                        <div className="section-number">04</div>
                        <div className="section-content">
                            <h2>Delivery and Pickup</h2>
                            <div className="delivery-grid">
                                <div className="delivery-item">
                                    <div className="delivery-icon">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F96540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M12 6V12L16 14" stroke="#F96540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <h4>Delivery Times</h4>
                                    <p>Estimated delivery times are provided at checkout. We strive to deliver within the estimated timeframe, but delays may occur due to unforeseen circumstances.</p>
                                </div>
                                <div className="delivery-item">
                                    <div className="delivery-icon">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F96540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                            <path d="M12 6V12L16 14" stroke="#F96540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                    </div>
                                    <h4>Pickup Orders</h4>
                                    <p>Please arrive at the designated pickup location at your selected time. If you are late, your order may be given to another customer.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Section 5 */}
                    <div className="terms-section">
                        <div className="section-number">05</div>
                        <div className="section-content">
                            <h2>Food Safety and Allergies</h2>
                            <p>
                                Your health and safety are our top priorities. Please be aware of the following:
                            </p>
                            <ul>
                                <li>
                                    <strong>Food Handling:</strong> We follow strict food safety guidelines 
                                    and maintain high standards of hygiene.
                                </li>
                                <li>
                                    <strong>Allergens:</strong> While we take precautions, our kitchen handles 
                                    common allergens including fish, soy, nuts, and gluten. Cross-contamination 
                                    may occur.
                                </li>
                                <li>
                                    <strong>Dietary Requirements:</strong> We offer options for various dietary 
                                    preferences, but please inform us of any specific requirements when placing 
                                    your order.
                                </li>
                            </ul>
                            <div className="allergy-note">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#F96540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 8V12" stroke="#F96540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M12 16H12.01" stroke="#F96540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <p>
                                    <strong>Allergy Warning:</strong> If you have a severe food allergy, 
                                    please contact us directly before placing your order. We cannot guarantee 
                                    that our food is free from allergens.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section 6 */}
                    <div className="terms-section">
                        <div className="section-number">06</div>
                        <div className="section-content">
                            <h2>Returns and Refunds</h2>
                            <p>
                                We strive to provide the highest quality food and service. If you are not 
                                satisfied with your order, please review our refund policy:
                            </p>
                            <ul>
                                <li>
                                    <strong>Quality Issues:</strong> If there is an issue with the quality 
                                    of your food, contact us within 2 hours of delivery for a full refund.
                                </li>
                                <li>
                                    <strong>Incorrect Orders:</strong> If you receive an incorrect order, 
                                    we will resend the correct items or issue a refund.
                                </li>
                                <li>
                                    <strong>Refund Processing:</strong> Refunds are processed within 5-7 
                                    business days and will be credited to your original payment method.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Section 7 */}
                    <div className="terms-section">
                        <div className="section-number">07</div>
                        <div className="section-content">
                            <h2>Intellectual Property</h2>
                            <p>
                                All content on the Poke Now website, including text, graphics, logos, 
                                images, and software, is the property of Poke Now and is protected by 
                                copyright and intellectual property laws.
                            </p>
                            <ul>
                                <li>
                                    <strong>Usage Rights:</strong> You may use our content for personal, 
                                    non-commercial purposes only.
                                </li>
                                <li>
                                    <strong>Prohibited Actions:</strong> You may not copy, reproduce, 
                                    distribute, or create derivative works from our content without 
                                    explicit permission.
                                </li>
                                <li>
                                    <strong>Trademarks:</strong> The Poke Now name and logo are registered 
                                    trademarks and may not be used without prior written consent.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Section 8 */}
                    <div className="terms-section">
                        <div className="section-number">08</div>
                        <div className="section-content">
                            <h2>Limitation of Liability</h2>
                            <p>
                                To the maximum extent permitted by law, Poke Now shall not be liable for:
                            </p>
                            <ul>
                                <li>Any indirect, incidental, or consequential damages</li>
                                <li>Loss of profits, data, or business opportunities</li>
                                <li>Damages arising from the use or inability to use our services</li>
                                <li>Any unauthorized access to or use of your personal information</li>
                                <li>Any errors, mistakes, or inaccuracies in our content</li>
                            </ul>
                            <p>
                                Our total liability to you shall not exceed the amount you paid for 
                                the specific order giving rise to the claim.
                            </p>
                        </div>
                    </div>

                    {/* Section 9 */}
                    <div className="terms-section">
                        <div className="section-number">09</div>
                        <div className="section-content">
                            <h2>Account Termination</h2>
                            <p>
                                We reserve the right to suspend or terminate your account and access 
                                to our services at our sole discretion, without notice, for conduct 
                                that we believe violates these terms or is harmful to other users, 
                                us, or third parties.
                            </p>
                            <ul>
                                <li>Violation of these terms of service</li>
                                <li>Fraudulent or illegal activities</li>
                                <li>Abuse of our services or staff</li>
                                <li>Non-payment for orders</li>
                            </ul>
                        </div>
                    </div>

                    {/* Section 10 */}
                    <div className="terms-section">
                        <div className="section-number">10</div>
                        <div className="section-content">
                            <h2>Governing Law</h2>
                            <p>
                                These terms shall be governed by and construed in accordance with the 
                                laws of the State of Massachusetts, without regard to its conflict of 
                                law provisions.
                            </p>
                            <p>
                                Any legal action or proceeding arising out of or related to these terms 
                                shall be brought exclusively in the federal or state courts located in 
                                Boston, Massachusetts.
                            </p>
                        </div>
                    </div>

                    {/* Section 11 */}
                    <div className="terms-section">
                        <div className="section-number">11</div>
                        <div className="section-content">
                            <h2>Contact Information</h2>
                            <p>
                                If you have any questions about these Terms of Service, please contact us:
                            </p>
                            <div className="contact-grid">
                                <div className="contact-item">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 6.5L12 13L2 6.5M2 6.5L2 18L22 18L22 6.5" stroke="#F96540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span>legal@pokenow.com</span>
                                </div>
                                <div className="contact-item">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 16.92V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V16.92" stroke="#F96540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M7 7L12 11L17 7" stroke="#F96540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span>support@pokenow.com</span>
                                </div>
                                <div className="contact-item">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M22 16.92V20C22 20.5304 21.7893 21.0391 21.4142 21.4142C21.0391 21.7893 20.5304 22 20 22H4C3.46957 22 2.96086 21.7893 2.58579 21.4142C2.21071 21.0391 2 20.5304 2 20V16.92" stroke="#F96540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M7 7L12 11L17 7" stroke="#F96540" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    <span>info@pokenow.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}