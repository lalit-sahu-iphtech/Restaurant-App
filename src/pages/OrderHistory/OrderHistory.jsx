import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
    FaBox,
    FaChevronDown,
    FaChevronUp,
    FaRedo,
    FaShoppingBag,
    FaCheckCircle,
    FaClock,
} from "react-icons/fa";
import { useAuth } from "../Auth/AuthContext";
import { useCart } from "../Cart/CartContext";
import { useToast } from "../../context/ToastContext";
import "./OrderHistory.css";

export default function OrderHistory() {
    const navigate = useNavigate();
    const { currentUser, isAuthenticated, openAuthModal } = useAuth();
    const { addToCart, clearCart } = useCart();
    const { success, info, warning } = useToast();

    const [orders, setOrders] = useState([]);
    const [activeTab, setActiveTab] = useState("all");
    const [expandedOrder, setExpandedOrder] = useState(null);

    // Load orders on mount
    useEffect(() => {
        if (!isAuthenticated()) {
            openAuthModal("signin", "/orders");
            navigate("/");
            return;
        }

        const allOrders = JSON.parse(localStorage.getItem("orders") || "[]");

        // Filter by current user
        const myOrders = allOrders.filter(
            (o) => o.userEmail === currentUser?.email
        );

        // Sort newest first
        const sorted = myOrders.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );

        setOrders(sorted);
    }, [isAuthenticated, currentUser, navigate, openAuthModal]);

    // Filter by tab
    const getFilteredOrders = () => {
        if (activeTab === "delivered") {
            return orders.filter((o) => o.status === "Delivered");
        }
        if (activeTab === "pending") {
            return orders.filter((o) => o.status === "Confirmed");
        }
        return orders;
    };

    const filteredOrders = getFilteredOrders();

    // Format date
    const formatDate = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleDateString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
        });
    };

    // Format time
    const formatTime = (isoString) => {
        const date = new Date(isoString);
        return date.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
        });
    };

    // Toggle expand
    const toggleExpand = (orderId) => {
        setExpandedOrder((prev) => (prev === orderId ? null : orderId));
    };

    // Reorder
    const handleReorder = (order) => {
        if (!isAuthenticated()) {
            openAuthModal("signin", "/orders");
            return;
        }

        // Clear existing cart (optional - better UX)
        if (window.confirm("This will replace your current cart. Continue?")) {
            clearCart();

            order.items.forEach((item) => {
                addToCart({
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    img: item.img,
                    description: item.description,
                    quantity: item.quantity,
                });
            });

            success("Items added to cart! ");
            navigate("/order-review");
        }
    };

    // Get status badge
    const getStatusBadge = (status) => {
        if (status === "Delivered") {
            return (
                <span className="oh-status oh-status-delivered">
                    <FaCheckCircle size={11} />
                    Delivered
                </span>
            );
        }
        return (
            <span className="oh-status oh-status-pending">
                <FaClock size={11} />
                {status || "Confirmed"}
            </span>
        );
    };

    return (
        <section className="order-history-page">
            <div className="oh-container">

                {/* ===== HEADER ===== */}
                <div className="oh-header">
                    <h1>My Orders</h1>
                    <p>View and manage your past orders</p>
                </div>

                {/* ===== FILTER TABS ===== */}
                {orders.length > 0 && (
                    <div className="oh-tabs">
                        <button
                            className={`oh-tab ${
                                activeTab === "all" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("all")}
                        >
                            All ({orders.length})
                        </button>
                        <button
                            className={`oh-tab ${
                                activeTab === "delivered" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("delivered")}
                        >
                            Delivered (
                            {orders.filter((o) => o.status === "Delivered").length})
                        </button>
                        <button
                            className={`oh-tab ${
                                activeTab === "pending" ? "active" : ""
                            }`}
                            onClick={() => setActiveTab("pending")}
                        >
                            Pending (
                            {orders.filter((o) => o.status === "Confirmed").length})
                        </button>
                    </div>
                )}

                {/* ===== ORDERS LIST ===== */}
                {filteredOrders.length === 0 ? (
                    <div className="oh-empty">
                        <div className="oh-empty-icon">
                            <FaShoppingBag />
                        </div>
                        <h2>No orders yet</h2>
                        <p>
                            {orders.length === 0
                                ? "You haven't placed any orders yet."
                                : "No orders in this category."}
                        </p>
                        <button
                            className="oh-empty-btn"
                            onClick={() => navigate("/menu")}
                        >
                            Browse Menu
                        </button>
                    </div>
                ) : (
                    <div className="oh-orders-list">
                        {filteredOrders.map((order) => {
                            const isExpanded = expandedOrder === order.id;

                            return (
                                <div
                                    key={order.id}
                                    className={`oh-card ${
                                        isExpanded ? "expanded" : ""
                                    }`}
                                >
                                    {/* ===== CARD HEADER ===== */}
                                    <div className="oh-card-header">
                                        <div className="oh-card-header-left">
                                            <div className="oh-order-icon">
                                                <FaBox size={16} />
                                            </div>
                                            <div className="oh-order-info">
                                                <h3>
                                                    #
                                                    {order.id
                                                        ?.replace("ORD-", "")
                                                        .slice(-8) || "00000000"}
                                                </h3>
                                                <p>
                                                    {formatDate(order.createdAt)} ·{" "}
                                                    {formatTime(order.createdAt)}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="oh-card-header-right">
                                            {getStatusBadge(order.status)}
                                            <span className="oh-order-total">
                                                ${order.total?.toFixed(2)}
                                            </span>
                                        </div>
                                    </div>

                                    {/* ===== ITEMS PREVIEW ===== */}
                                    <div className="oh-items-preview">
                                        {order.items?.slice(0, 3).map((item, idx) => (
                                            <div key={idx} className="oh-preview-item">
                                                <img src={item.img} alt={item.name} />
                                                <div>
                                                    <p>{item.name}</p>
                                                    <span>x{item.quantity}</span>
                                                </div>
                                            </div>
                                        ))}
                                        {order.items?.length > 3 && (
                                            <div className="oh-preview-more">
                                                +{order.items.length - 3} more
                                            </div>
                                        )}
                                    </div>

                                    {/* ===== EXPANDED DETAILS ===== */}
                                    {isExpanded && (
                                        <div className="oh-expanded">
                                            <div className="oh-details-section">
                                                <h4>Order Details</h4>
                                                {order.items?.map((item, idx) => (
                                                    <div
                                                        key={idx}
                                                        className="oh-detail-item"
                                                    >
                                                        <img
                                                            src={item.img}
                                                            alt={item.name}
                                                        />
                                                        <div className="oh-detail-info">
                                                            <p className="oh-detail-name">
                                                                {item.name}
                                                            </p>
                                                            <p className="oh-detail-qty">
                                                                Qty: {item.quantity}
                                                            </p>
                                                        </div>
                                                        <span className="oh-detail-price">
                                                            $
                                                            {(
                                                                item.price *
                                                                item.quantity
                                                            ).toFixed(2)}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>

                                            <div className="oh-summary">
                                                <div className="oh-summary-row">
                                                    <span>Subtotal</span>
                                                    <span>
                                                        $
                                                        {order.subtotal?.toFixed(2) ||
                                                            order.total?.toFixed(
                                                                2
                                                            )}
                                                    </span>
                                                </div>
                                                <div className="oh-summary-row">
                                                    <span>Shipping</span>
                                                    <span>
                                                        $
                                                        {order.shipping?.toFixed(2) ||
                                                            "0.00"}
                                                    </span>
                                                </div>
                                                <div className="oh-summary-row oh-summary-total">
                                                    <span>Total</span>
                                                    <span>
                                                        ${order.total?.toFixed(2)}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="oh-details-row">
                                                <span>Payment Method</span>
                                                <span className="oh-details-value">
                                                    {order.paymentMethod === "card"
                                                        ? "Card"
                                                        : order.paymentMethod ===
                                                          "upi"
                                                        ? "UPI"
                                                        : order.paymentMethod ===
                                                          "cod"
                                                        ? "Cash on Delivery"
                                                        : "PayPal"}
                                                </span>
                                            </div>

                                            {order.orderMode && (
                                                <div className="oh-details-row">
                                                    <span>Order Type</span>
                                                    <span className="oh-details-value">
                                                        {order.orderMode ===
                                                        "delivery"
                                                            ? " Delivery"
                                                            : " Pickup"}
                                                    </span>
                                                </div>
                                            )}
                                        </div>
                                    )}

                                    {/* ===== ACTIONS ===== */}
                                    <div className="oh-card-actions">
                                        <button
                                            className="oh-toggle-btn"
                                            onClick={() => toggleExpand(order.id)}
                                        >
                                            {isExpanded ? (
                                                <>
                                                    <FaChevronUp size={12} />
                                                    Hide Details
                                                </>
                                            ) : (
                                                <>
                                                    <FaChevronDown size={12} />
                                                    View Details
                                                </>
                                            )}
                                        </button>
                                        <button
                                            className="oh-reorder-btn"
                                            onClick={() => handleReorder(order)}
                                        >
                                            <FaRedo size={12} />
                                            Reorder
                                        </button>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}