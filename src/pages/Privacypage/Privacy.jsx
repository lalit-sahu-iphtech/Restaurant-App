import "./Privacy.css";

export default function Privacy() {
    return (
        <section className="privacy-page">
            <div className="privacy-container">
                <h1>Privacy Policy</h1>
                <p className="privacy-date">Last Updated: January 1, 2026</p>

                <div className="privacy-content">
                    <div className="privacy-section">
                        <h2>1. Information We Collect</h2>
                        <p>
                            At Poke Now, we collect information to provide better services to our customers. 
                            We collect the following types of information:
                        </p>
                        <ul>
                            <li>
                                <strong>Personal Information:</strong> Name, email address, phone number, 
                                delivery address, and payment information when you place an order.
                            </li>
                            <li>
                                <strong>Order Information:</strong> Details about your orders, including 
                                items purchased, order date, and delivery preferences.
                            </li>
                            <li>
                                <strong>Account Information:</strong> Username, password, and account 
                                preferences when you create an account.
                            </li>
                            <li>
                                <strong>Usage Data:</strong> Information about how you interact with our 
                                website, including pages visited, time spent, and features used.
                            </li>
                            <li>
                                <strong>Device Information:</strong> IP address, browser type, operating 
                                system, and device identifiers.
                            </li>
                        </ul>
                    </div>

                    <div className="privacy-section">
                        <h2>2. How We Use Your Information</h2>
                        <p>We use the information we collect for the following purposes:</p>
                        <ul>
                            <li>Process and fulfill your orders</li>
                            <li>Send order confirmations and delivery updates</li>
                            <li>Provide customer support and respond to inquiries</li>
                            <li>Improve our products and services</li>
                            <li>Send promotional offers and newsletters (with your consent)</li>
                            <li>Personalize your experience on our website</li>
                            <li>Prevent fraud and ensure security</li>
                            <li>Comply with legal obligations</li>
                        </ul>
                    </div>

                    <div className="privacy-section">
                        <h2>3. Information Sharing</h2>
                        <p>
                            We do not sell or rent your personal information to third parties. 
                            We may share your information in the following circumstances:
                        </p>
                        <ul>
                            <li>
                                <strong>Service Providers:</strong> We share information with trusted 
                                third-party service providers who assist us in operating our business, 
                                such as payment processors, delivery partners, and IT service providers.
                            </li>
                            <li>
                                <strong>Legal Requirements:</strong> We may disclose information if 
                                required by law, court order, or government regulation.
                            </li>
                            <li>
                                <strong>Business Transfers:</strong> In the event of a merger, acquisition, 
                                or sale of assets, your information may be transferred as part of the transaction.
                            </li>
                        </ul>
                    </div>

                    <div className="privacy-section">
                        <h2>4. Data Security</h2>
                        <p>
                            We implement appropriate security measures to protect your personal information 
                            from unauthorized access, alteration, disclosure, or destruction. These measures include:
                        </p>
                        <ul>
                            <li>Encryption of sensitive data during transmission</li>
                            <li>Secure servers and firewalls</li>
                            <li>Regular security assessments and updates</li>
                            <li>Access controls and authentication protocols</li>
                            <li>Staff training on data protection practices</li>
                        </ul>
                    </div>

                    <div className="privacy-section">
                        <h2>5. Cookies and Tracking Technologies</h2>
                        <p>
                            We use cookies and similar tracking technologies to enhance your experience 
                            on our website. Cookies help us:
                        </p>
                        <ul>
                            <li>Remember your preferences and settings</li>
                            <li>Analyze website traffic and usage patterns</li>
                            <li>Personalize content and advertisements</li>
                            <li>Provide social media features</li>
                        </ul>
                        <p>
                            You can control cookie preferences through your browser settings. 
                            However, disabling cookies may affect certain features of our website.
                        </p>
                    </div>

                    <div className="privacy-section">
                        <h2>6. Your Rights</h2>
                        <p>You have the following rights regarding your personal information:</p>
                        <ul>
                            <li>
                                <strong>Access:</strong> Request a copy of the personal information we hold about you.
                            </li>
                            <li>
                                <strong>Correction:</strong> Request corrections to inaccurate or incomplete information.
                            </li>
                            <li>
                                <strong>Deletion:</strong> Request deletion of your personal information, subject to legal requirements.
                            </li>
                            <li>
                                <strong>Opt-Out:</strong> Unsubscribe from marketing communications at any time.
                            </li>
                            <li>
                                <strong>Data Portability:</strong> Request transfer of your data to another service provider.
                            </li>
                        </ul>
                        <p>
                            To exercise any of these rights, please contact us using the information 
                            provided in the "Contact Us" section below.
                        </p>
                    </div>

                    <div className="privacy-section">
                        <h2>7. Children's Privacy</h2>
                        <p>
                            Our services are not directed to individuals under the age of 13. 
                            We do not knowingly collect personal information from children under 13. 
                            If we become aware that we have collected personal information from a child 
                            under 13, we will take steps to delete that information promptly.
                        </p>
                    </div>

                    <div className="privacy-section">
                        <h2>8. Third-Party Links</h2>
                        <p>
                            Our website may contain links to third-party websites or services. 
                            We are not responsible for the privacy practices or content of these 
                            third-party sites. We encourage you to review the privacy policies of 
                            any third-party websites you visit.
                        </p>
                    </div>

                    <div className="privacy-section">
                        <h2>9. Changes to This Privacy Policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time to reflect changes 
                            in our practices or legal requirements. We will notify you of any material 
                            changes by posting the updated policy on this page with a revised date.
                        </p>
                        <p>
                            We encourage you to review this Privacy Policy periodically to stay 
                            informed about how we protect your information.
                        </p>
                    </div>

                    <div className="privacy-section">
                        <h2>10. Contact Us</h2>
                        <p>
                            If you have any questions, concerns, or requests regarding this Privacy Policy 
                            or our data practices, please contact us:
                        </p>
                        <div className="contact-info">
                            <p><strong>Email:</strong> privacy@pokenow.com</p>
                            <p><strong>Phone:</strong> (555) 123-4567</p>
                            <p><strong>Address:</strong> 123 Poke Street, Boston, MA 02101</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}