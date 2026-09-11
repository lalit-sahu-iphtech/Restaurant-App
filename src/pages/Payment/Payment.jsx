import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaLock,
  FaCheckCircle,
} from "react-icons/fa";
import { SiPaypal, SiGooglepay } from "react-icons/si";
import { MdOutlinePayments } from "react-icons/md";
import { useCart } from "../Cart/CartContext";
import { useAuth } from "../Auth/AuthContext";
import "./Payment.css";

export default function Payment() {
  const navigate = useNavigate();
  const { cartItems, getTotalPrice, clearCart } = useCart();
  const { isAuthenticated, openAuthModal } = useAuth();

  // Payment method state
  const [paymentMethod, setPaymentMethod] = useState("card");

  // Card form state
  const [cardData, setCardData] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    nameOnCard: "",
  });

  // UPI state
  const [upiId, setUpiId] = useState("");

  // Errors
  const [errors, setErrors] = useState({});

  // Success state
  const [isSuccess, setIsSuccess] = useState(false);

  // Totals
  const subtotal = getTotalPrice();
  const shipping = 0;
  const fee = 0;
  const total = subtotal + shipping + fee;

  // ====================
  // HANDLERS
  // ====================

  // Format card number (add space every 4 digits)
  const formatCardNumber = (value) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 16);
    return cleaned.replace(/(.{4})/g, "$1 ").trim();
  };

  // Format expiry (MM/YY)
  const formatExpiry = (value) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 4);
    if (cleaned.length >= 3) {
      return `${cleaned.slice(0, 2)}/${cleaned.slice(2)}`;
    }
    return cleaned;
  };

  // Handle card input
  const handleCardChange = (e) => {
    const { name, value } = e.target;

    let formattedValue = value;

    if (name === "cardNumber") {
      formattedValue = formatCardNumber(value);
    } else if (name === "expiry") {
      formattedValue = formatExpiry(value);
    } else if (name === "cvv") {
      formattedValue = value.replace(/\D/g, "").slice(0, 4);
    }

    setCardData((prev) => ({ ...prev, [name]: formattedValue }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Validate payment
  const validatePayment = () => {
    const newErrors = {};

    if (paymentMethod === "card") {
      if (!cardData.cardNumber.trim()) {
        newErrors.cardNumber = "Card number is required";
      } else if (cardData.cardNumber.replace(/\s/g, "").length !== 16) {
        newErrors.cardNumber = "Card number must be 16 digits";
      }

      if (!cardData.expiry.trim()) {
        newErrors.expiry = "Expiry is required";
      } else if (!/^\d{2}\/\d{2}$/.test(cardData.expiry)) {
        newErrors.expiry = "Invalid format (MM/YY)";
      }

      if (!cardData.cvv.trim()) {
        newErrors.cvv = "CVV is required";
      } else if (cardData.cvv.length < 3) {
        newErrors.cvv = "CVV must be 3-4 digits";
      }

      if (!cardData.nameOnCard.trim()) {
        newErrors.nameOnCard = "Name is required";
      }
    } else if (paymentMethod === "upi") {
      if (!upiId.trim()) {
        newErrors.upiId = "UPI ID is required";
      } else if (!upiId.includes("@")) {
        newErrors.upiId = "Invalid UPI ID (example: name@upi)";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle payment
  const handlePayNow = () => {
    // Auth check
    if (!isAuthenticated()) {
      openAuthModal("signin", "/payment");
      return;
    }

    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    if (!validatePayment()) return;

    // ✅ Success — Save order to localStorage
    const order = {
      id: `ORD-${Date.now()}`,
      items: cartItems,
      total,
      paymentMethod,
      status: "Confirmed",
      userEmail: JSON.parse(localStorage.getItem("currentUser"))?.email,
      createdAt: new Date().toISOString(),
    };

    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    localStorage.setItem("orders", JSON.stringify([...orders, order]));

    // Show success
    setIsSuccess(true);

    // Clear cart after 2.5 seconds
    clearCart();

    navigate("/thank-you", {state : {order}});
  }
  // ====================
  // SUCCESS SCREEN
  // ====================
  if (isSuccess) {
    return (
      <section className="payment-page">
        <div className="payment-success">
          <div className="payment-success-icon">
            <FaCheckCircle />
          </div>
          <h1>Payment Successful!</h1>
          <p>Your order has been placed successfully.</p>
          <p className="payment-success-order">
            Order ID: <strong>#ORD-{Date.now().toString().slice(-6)}</strong>
          </p>
          <p className="payment-success-redirect">
            Redirecting to home...
          </p>
        </div>
      </section>
    );
  }

  // ====================
  // MAIN RENDER
  // ====================
  return (
    <section className="payment-page">
      <div className="payment-container">
        
        {/* PAGE TITLE */}
        <div className="payment-header">
          <h1 className="payment-title">Payment</h1>
          <p className="payment-subtitle">
            Complete your order by providing payment details
          </p>
        </div>

        {/* MAIN GRID */}
        <div className="payment-grid">

          {/* ===== LEFT: PAYMENT METHODS ===== */}
          <div className="payment-left">
            <div className="payment-card">
              <h2 className="payment-section-title">Payment Method</h2>

              {/* ==== CARD OPTION ==== */}
              <div
                className={`payment-option ${
                  paymentMethod === "card" ? "active" : ""
                }`}
              >
                <label className="payment-option-header">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                  />
                  <span className="payment-radio"></span>
                  <span className="payment-option-label">
                    Credit / Debit Card
                  </span>
                  <div className="payment-card-icons">
                    <FaCcVisa />
                    <FaCcMastercard />
                    <FaCcAmex />
                  </div>
                </label>

                {paymentMethod === "card" && (
                  <div className="payment-form">
                    {/* Card Number */}
                    <div className="payment-form-group">
                      <label>Card Number</label>
                      <input
                        type="text"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={cardData.cardNumber}
                        onChange={handleCardChange}
                        className={errors.cardNumber ? "error" : ""}
                        maxLength={19}
                      />
                      {errors.cardNumber && (
                        <span className="payment-error">
                          {errors.cardNumber}
                        </span>
                      )}
                    </div>

                    {/* Expiry + CVV */}
                    <div className="payment-form-row">
                      <div className="payment-form-group">
                        <label>Expiry Date</label>
                        <input
                          type="text"
                          name="expiry"
                          placeholder="MM/YY"
                          value={cardData.expiry}
                          onChange={handleCardChange}
                          className={errors.expiry ? "error" : ""}
                          maxLength={5}
                        />
                        {errors.expiry && (
                          <span className="payment-error">
                            {errors.expiry}
                          </span>
                        )}
                      </div>

                      <div className="payment-form-group">
                        <label>CVV</label>
                        <input
                          type="password"
                          name="cvv"
                          placeholder="123"
                          value={cardData.cvv}
                          onChange={handleCardChange}
                          className={errors.cvv ? "error" : ""}
                          maxLength={4}
                        />
                        {errors.cvv && (
                          <span className="payment-error">
                            {errors.cvv}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Name on Card */}
                    <div className="payment-form-group">
                      <label>Name on Card</label>
                      <input
                        type="text"
                        name="nameOnCard"
                        placeholder="name on card"
                        value={cardData.nameOnCard}
                        onChange={handleCardChange}
                        className={errors.nameOnCard ? "error" : ""}
                      />
                      {errors.nameOnCard && (
                        <span className="payment-error">
                          {errors.nameOnCard}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* ==== UPI OPTION ==== */}
              <div
                className={`payment-option ${
                  paymentMethod === "upi" ? "active" : ""
                }`}
              >
                <label className="payment-option-header">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="upi"
                    checked={paymentMethod === "upi"}
                    onChange={() => setPaymentMethod("upi")}
                  />
                  <span className="payment-radio"></span>
                  <span className="payment-option-label">UPI</span>
                  <div className="payment-card-icons">
                    <SiGooglepay />
                  </div>
                </label>

                {paymentMethod === "upi" && (
                  <div className="payment-form">
                    <div className="payment-form-group">
                      <label>UPI ID</label>
                      <input
                        type="text"
                        placeholder="yourname@upi"
                        value={upiId}
                        onChange={(e) => {
                          setUpiId(e.target.value);
                          if (errors.upiId)
                            setErrors((prev) => ({ ...prev, upiId: "" }));
                        }}
                        className={errors.upiId ? "error" : ""}
                      />
                      {errors.upiId && (
                        <span className="payment-error">{errors.upiId}</span>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* ==== PAYPAL OPTION ==== */}
              <div
                className={`payment-option ${
                  paymentMethod === "paypal" ? "active" : ""
                }`}
              >
                <label className="payment-option-header">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={paymentMethod === "paypal"}
                    onChange={() => setPaymentMethod("paypal")}
                  />
                  <span className="payment-radio"></span>
                  <span className="payment-option-label">PayPal</span>
                  <div className="payment-card-icons paypal-icon">
                    <SiPaypal />
                  </div>
                </label>
              </div>

              {/* ==== COD OPTION ==== */}
              <div
                className={`payment-option ${
                  paymentMethod === "cod" ? "active" : ""
                }`}
              >
                <label className="payment-option-header">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                  />
                  <span className="payment-radio"></span>
                  <span className="payment-option-label">
                    Cash on Delivery
                  </span>
                  <div className="payment-card-icons cod-icon">
                    <MdOutlinePayments />
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* ===== RIGHT: ORDER SUMMARY ===== */}
          <div className="payment-right">
            <div className="payment-card payment-summary-card">
              <h2 className="payment-section-title">Order Summary</h2>

              {/* Cart Items */}
              <div className="payment-summary-items">
                {cartItems.map((item) => (
                  <div key={item.id} className="payment-summary-item">
                    <img src={item.img} alt={item.name} />
                    <div className="payment-summary-info">
                      <span className="payment-summary-name">
                        {item.name}
                      </span>
                      <span className="payment-summary-qty">
                        Qty: {item.quantity}
                      </span>
                    </div>
                    <span className="payment-summary-price">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>

              <div className="payment-summary-divider"></div>

              {/* Totals */}
              <div className="payment-summary-row">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="payment-summary-row">
                <span>Shipping</span>
                <span>${shipping.toFixed(2)}</span>
              </div>
              <div className="payment-summary-row">
                <span>Fee</span>
                <span>${fee.toFixed(2)}</span>
              </div>

              <div className="payment-summary-divider"></div>

              <div className="payment-summary-row payment-summary-total">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              {/* Pay Button */}
              <button
                className="payment-pay-btn"
                onClick={handlePayNow}
                disabled={cartItems.length === 0}
              >
                <FaLock size={12} />
                Pay Now · ${total.toFixed(2)}
              </button>

              {/* Security Note */}
              <div className="payment-secure-note">
                <FaLock size={10} />
                <span>Your payment is secure & encrypted</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}