import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  FaCalendarAlt,
  FaUser,
  FaCreditCard,
  FaReceipt,
  FaDollarSign,
  FaCheck,
  FaStar,
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
} from "react-icons/fa";
import { useAuth } from "../Auth/AuthContext";
import bowlImg from "../../assets/img/thankYou.jpg";
import "./ThankYou.css";

export default function ThankYou() {
  const navigate = useNavigate();
  const location = useLocation();
  const { currentUser } = useAuth();

  // Order data from navigation state OR localStorage
  const [order, setOrder] = useState(null);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);

  useEffect(() => {
    // Priority 1: Navigation state
    if (location.state?.order) {
      setOrder(location.state.order);
      return;
    }

    // Priority 2: localStorage (latest order)
    const orders = JSON.parse(localStorage.getItem("orders") || "[]");
    if (orders.length > 0) {
      setOrder(orders[orders.length - 1]);
    }
  }, [location.state]);

  // Format date
  const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  // Get payment icon
  const getPaymentIcon = () => {
    if (!order) return null;
    switch (order.paymentMethod) {
      case "card":
        return (
          <>
            <FaCcMastercard />
            <FaCcVisa />
          </>
        );
      case "upi":
        return <span className="ty-upi-text">UPI</span>;
      case "paypal":
        return <span className="ty-paypal-text">PayPal</span>;
      case "cod":
        return <span className="ty-cod-text">COD</span>;
      default:
        return null;
    }
  };

  // Handle back to home
  const handleBackHome = () => {
    navigate("/");
  };

  if (!order) {
    return (
      <section className="thank-you">
        <div className="ty-container">
          <div className="ty-empty">
            <h2>No order found</h2>
            <p>Please place an order first.</p>
            <button onClick={handleBackHome} className="ty-back-btn">
              Back to Home
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="thank-you">
      <div className="ty-container">

        {/* ===== HERO IMAGE WITH CHECK ===== */}
        <div className="ty-hero">
          <div className="ty-hero-img-wrapper">
            <img src={bowlImg} alt="Order" className="ty-hero-img" />
            <div className="ty-check-badge">
              <FaCheck />
            </div>
          </div>
        </div>

        {/* ===== TITLES ===== */}
        <div className="ty-titles">
          <h1 className="ty-title">Thank you for your purchase!</h1>
          <p className="ty-subtitle">Food is on its way to you.</p>
        </div>

        {/* ===== DETAILS CARD ===== */}
        <div className="ty-card">

          {/* ROW 1: Date */}
          <div className="ty-row">
            <div className="ty-row-left">
              <span className="ty-icon ty-icon-red">
                <FaCalendarAlt />
              </span>
              <span className="ty-label">Date</span>
            </div>
            <span className="ty-value">{formatDate(order.createdAt)}</span>
          </div>

          {/* ROW 2: Customer */}
          <div className="ty-row">
            <div className="ty-row-left">
              <span className="ty-icon ty-icon-red">
                <FaUser />
              </span>
              <span className="ty-label">Customer</span>
            </div>
            <span className="ty-value">
              {currentUser?.name || "Guest User"}
            </span>
          </div>

          {/* ROW 3: Payment Method */}
          <div className="ty-row">
            <div className="ty-row-left">
              <span className="ty-icon ty-icon-red">
                <FaCreditCard />
              </span>
              <span className="ty-label">Payment Method</span>
            </div>
            <div className="ty-payment-icons">
              {getPaymentIcon()}
            </div>
          </div>

          {/* DIVIDER */}
          <div className="ty-divider"></div>

          {/* ROW 4: Order Number */}
          <div className="ty-row">
            <div className="ty-row-left">
              <span className="ty-icon ty-icon-red">
                <FaReceipt />
              </span>
              <span className="ty-label">Order Number</span>
            </div>
            <span className="ty-value">
              {order.id?.replace("ORD-", "") || "--------"}
            </span>
          </div>

          {/* ROW 5: Total */}
          <div className="ty-row">
            <div className="ty-row-left">
              <span className="ty-icon ty-icon-red">
                <FaDollarSign />
              </span>
              <span className="ty-label">Total</span>
            </div>
            <span className="ty-value ty-value-bold">
              ${order.total?.toFixed(0) || 0}
            </span>
          </div>

          {/* DIVIDER */}
          <div className="ty-divider"></div>

          {/* ORDER LINE */}
          <div className="ty-order-line">
            <h3 className="ty-order-line-title">Order Line</h3>

            {order.items?.map((item) => (
              <div key={item.id} className="ty-order-item">
                <img
                  src={item.img}
                  alt={item.name}
                  className="ty-order-item-img"
                />

                <div className="ty-order-item-info">
                  <p className="ty-order-item-name">{item.name}</p>
                  <p className="ty-order-item-desc">
                    {item.base
                      ? `${item.base}${
                          item.proteins?.length
                            ? ` • ${item.proteins.slice(0, 2).join(" • ")}...`
                            : ""
                        }`
                        : item.description
                        ? item.description.slice(0, 40) + "..."
                        : item.name} 
                  </p>
                  <p className="ty-order-item-qty">x{item.quantity}</p>
                </div>

                <span className="ty-order-item-price">
                  ${(item.price * item.quantity).toFixed(0)}
                </span>
              </div>
            ))}
          </div>

          {/* BACK TO HOME BUTTON */}
          <div className="ty-btn-wrapper">
            <button className="ty-back-home-btn" onClick={handleBackHome}>
              Back to home
            </button>
          </div>
        </div>

        {/* ===== RATING ===== */}
        <div className="ty-rating">
          <p className="ty-rating-label">How was your experience?</p>
          <div className="ty-stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                className="ty-star-btn"
                onMouseEnter={() => setHoverRating(star)}
                onMouseLeave={() => setHoverRating(0)}
                onClick={() => setRating(star)}
                aria-label={`Rate ${star} stars`}
              >
                <FaStar
                  className={`ty-star ${
                    star <= (hoverRating || rating) ? "active" : ""
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}