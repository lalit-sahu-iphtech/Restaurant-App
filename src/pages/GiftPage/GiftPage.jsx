import gift1 from "../../assets/giftImg/gift1.jpg";
import gift2 from "../../assets/giftImg/gift2.jpg";
import gift3 from "../../assets/giftImg/gift3.jpg";
import gift4 from "../../assets/giftImg/gift4.jpg";
import gift5 from "../../assets/giftImg/gift5.jpg";
import gift6 from "../../assets/giftImg/gift6.jpg";
import gift7 from "../../assets/giftImg/gift7.jpg";
import gift8 from "../../assets/giftImg/gift8.jpg";
import gift9 from "../../assets/giftImg/gift9.jpg";
import gift10 from "../../assets/giftImg/gift10.jpg";
import gift11 from "../../assets/giftImg/gift11.jpg";
import gift12 from "../../assets/giftImg/gift12.jpg";

import { BsGift } from "react-icons/bs";
import { MdOutlineCurrencyExchange } from "react-icons/md";


import "./GiftPage.css";

export default function GiftPage() {
    return (
        <section className="gift-card">
            <div className="gift-card-container">
                {/* Left Column - Form */}
                <div className="gift-card-form">
                    <h2>Give the Perfect Gift</h2>
                    <p className="gift-subtitle">
                        Get a voucher for yourself or gift one to a friend
                    </p>

                    <div className="gift-type">
                        <h4>What kind of gift is it?</h4>
                        <div className="gift-type-options">
                            <div className="gift-option">
                                <div className="gift-option-icon">
                                <BsGift />
                                </div>
                                <div className="gift-option-text">
                                    <span>For one individual</span>
                                    <small>Send a gift card to one recipient</small>
                                </div>
                            </div>
                            <div className="gift-option">
                                <div className="gift-option-icon">
                                <MdOutlineCurrencyExchange />

                                </div>
                                <div className="gift-option-text">
                                    <span>Group gift card</span>
                                    <small>Pool money from multiple contributors for one recipient</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="gift-amount">
                        <h4>eGift card amount</h4>
                        <div className="amount-options">
                            <button className="amount-btn active">$25.00</button>
                            <button className="amount-btn">$35.00</button>
                            <button className="amount-btn">$50.00</button>
                            <button className="amount-btn">$100.00</button>
                            <button className="amount-btn custom">Custom</button>
                        </div>
                    </div>

                    <div className="promo-code">
                        <h4>Add Promo Code</h4>
                        {/* <input type="text" placeholder="Enter promo code" /> */}
                    </div>

                    <div className="your-details">
                        <h4>Your details</h4>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Your Email" />
                        <textarea placeholder="Your Message (optional)"></textarea>
                    </div>

                    <div className="delivery-details">
                        <h4>Delivery details</h4>
                        <label className="send-to-self">
                        <span>Send this card to myself</span>
                        <input type="checkbox" defaultChecked />
                           
                        </label>
                    </div>

                    <button className="checkout-btn">Checkout</button>
                </div>

                {/* Right Column - Gallery */}
                <div className="gift-card-gallery">
                    <div className="gallery-col">
                        <img src={gift1} alt="Gift card 1" />
                        <img src={gift2} alt="Gift card 2" />
                        <img src={gift3} alt="Gift card 3" />
                        <img src={gift4} alt="Gift card 4" />
                    </div>
                    <div className="gallery-col">
                        <img src={gift5} alt="Gift card 5" />
                        <img src={gift6} alt="Gift card 6" />
                        <img src={gift7} alt="Gift card 7" />
                        <img src={gift8} alt="Gift card 8" />
                    </div>
                    <div className="gallery-col">
                        <img src={gift9} alt="Gift card 9" />
                        <img src={gift10} alt="Gift card 10" />
                        <img src={gift11} alt="Gift card 11" />
                        <img src={gift12} alt="Gift card 12" />
                    </div>
                </div>
            </div>
        </section>
    );
}