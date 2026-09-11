import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaPen,
  FaTrash,
  FaCcMastercard,
} from "react-icons/fa";
import { useCart } from "../Cart/CartContext";
import { useAuth } from "../Auth/AuthContext";
import EditItemModal from "../../component/EditItemModal/EditItemModal";
import CustomizeBowlModal from "../BowlModalPage/CustomizeBowlModal";

// Recommended items images
import menuImg5 from "../../assets/checkoutMenu/menu5.jpg";
import menuImg6 from "../../assets/checkoutMenu/menu6.jpg";
import menuImg3 from "../../assets/checkoutMenu/menu3.jpg";
import menuImg8 from "../../assets/checkoutMenu/menu8.jpg";

import "./OrderReview.css";

export default function OrderReview() {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, deleteFromCart,updateCartItem, addToCart } = useCart();
  const { isAuthenticated, currentUser, openAuthModal } = useAuth();

  // Voucher state
  const [voucherInput, setVoucherInput] = useState("");
  const [appliedVoucher, setAppliedVoucher] = useState(null);
  const [voucherError, setVoucherError] = useState("");

  const[isEditOpen, setIsEditOpen] = useState(false);
  const[editingItem, setEditingItem] = useState(null);

  // Recommended items (hardcoded)
  const recommendedItems = [
    {
      id: 5,
      name: "Dynamite Bowl",
      img: menuImg5,
      description:
        "Tuna* • Shrimp • Carrot • Mango • Jalapeno • Cucumber • Chili Flakes • Sesame Seeds",
      price: 20,
    },
    {
      id: 6,
      name: "The Duke Bowl",
      img: menuImg6,
      description:
        "Tuna* • Salmon • Shrimp • Seaweed • Salad • Jalapeno • Sweet Onion • Edamame • Cucumber",
      price: 16,
    },
    {
      id: 3,
      name: "Volcano Bowl",
      img: menuImg3,
      description:
        "Spicy Salmon* • Spicy Tuna* • Green Onion • Cabbage • Cucumber • Carrot • Jalapeno • Ginger",
      price: 12,
    },
    {
      id: 8,
      name: "Salmon Bowl",
      img: menuImg8,
      description:
        "Spicy Salmon* • Green Onion • Avocado • Cucumber • Ginger • House Sauce • Sriracha • Furikake • Lemon",
      price: 15,
    },
  ];

  // Redirect if cart is empty
  useEffect(() => {
    if (cartItems.length === 0) {
      // Optional: redirect to menu
      // navigate("/menu");
    }
  }, [cartItems, navigate]);

  // Calculate subtotal
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleEditClick = (item) => {
    const isCustomBowl = item.id === 1 || String(item.id).startsWith("custom-");
  
    if (isCustomBowl) {
      // Custom bowl → customize modal open
      // (agar aap customize modal me pre-fill kar sakte ho)
      setEditingItem(item);
      setIsEditOpen(true);
      // Ya agar aap customize modal use karna chahte ho:
      // setCustomizeItem(item);
      // setIsCustomizeOpen(true);
    } else {
      // Regular item → edit quantity modal
      setEditingItem(item);
      setIsEditOpen(true);
    }
  };
  const handleUpdateItem = (itemId, updatedData) => {
    updateCartItem(itemId, updatedData);
  };

  const handleDelte = (itemId) =>{
    if(window.confirm("Remove this itme from cart?")){
      deleteFromCart(itemId);
    }
  }

  // Apply voucher
  const handleApplyVoucher = () => {
    setVoucherError("");
    const code = voucherInput.trim().toLowerCase();

    if (!code) {
      setVoucherError("Please enter a voucher code");
      return;
    }

    if (code === "freeship") {
      setAppliedVoucher("freeship");
      setVoucherInput("");
    } else {
      setVoucherError("Invalid voucher code");
    }
  };

  // Remove voucher
  const handleRemoveVoucher = () => {
    setAppliedVoucher(null);
  };

  // Delete item from cart
  const handleDelete = (itemId) => {
    if (window.confirm("Remove this item from cart?")) {
      // removeFromCart removes one quantity - for full delete use deleteFromCart
      // Assuming deleteFromCart exists
      // deleteFromCart(itemId);
      
      // If only removeFromCart exists, call it multiple times or add deleteFromCart
      for (let i = 0; i < 100; i++) {
        // Just to be safe, keep removing until gone (not ideal)
        // Better: add deleteFromCart to CartContext
        break;
      }
      // Placeholder:
      removeFromCart(itemId);
    }
  };

  // Handle recommended add to cart
  const handleAddRecommended = (item) => {
    if (!isAuthenticated()) {
      openAuthModal("signin", "/order-review");
      return;
    }
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      img: item.img,
      description: item.description,
    });
  };

  // Check if item in cart
  const isInCart = (id) => cartItems.some((item) => item.id === id);

  // Proceed to payment
  const handleProceed = () => {
    if (!isAuthenticated()) {
      openAuthModal("signin", "/payment");
      return;
    }
    navigate("/payment");
  };

  // Shipping cost
  const shipping = appliedVoucher === "freeship" ? 0 : 5;
  const fee = 0;
  const total = subtotal + shipping + fee;

  return (
    <section className="order-review">
      <div className="or-container">

        {/* ===== MAIN: 2 columns ===== */}
        <div className="or-main">

          {/* LEFT: Order Summary */}
          <div className="or-left">
            <div className="or-card">
              <h2 className="or-card-title">Order summary</h2>

              {cartItems.length === 0 ? (
                <div className="or-empty">
                  <p>Your cart is empty</p>
                  <button
                    className="or-browse-btn"
                    onClick={() => navigate("/menu")}
                  >
                    Browse Menu
                  </button>
                </div>
              ) : (
                <div className="or-items">
                  {cartItems.map((item) => (
                    <div key={item.id} className="or-item">
                      <img
                        src={item.img}
                        alt={item.name}
                        className="or-item-img"
                      />

                      <div className="or-item-info">
                        <h3 className="or-item-name">{item.name}</h3>
                        <p className="or-item-desc">
                          {item.base
                            ? `${item.base}${
                                item.proteins?.length
                                  ? ` • ${item.proteins.join(" • ")}`
                                  : ""
                              }${item.toppings?.length ? ` • ${item.toppings.slice(0, 2).join(" • ")}` : ""}`
                            : item.description}
                        </p>
                      </div>

                      <span className="or-item-price">
                        ${(item.price * item.quantity).toFixed(0)}
                      </span>

                      <div className="or-item-actions">
                      <button
                            className="or-icon-btn"
                            onClick={() => handleEditClick(item)}
                            title="Edit"
                          >
                            <FaPen size={13} />
                          </button>

                        <button
                          className="or-icon-btn or-delete-btn"
                          onClick={() => handleDelete(item.id)}
                          title="Remove"
                        >
                          <FaTrash size={13} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* RIGHT: Payment + Summary */}
          <div className="or-right">
            <div className="or-card or-payment-card">

              {/* Payment Method */}
              <div className="or-section">
                <h3 className="or-section-title">Payment method</h3>
                <a href="#" className="or-change-link">
                  Change payment methods
                </a>

                <div className="or-card-box">
                  <FaCcMastercard className="or-card-icon" />
                  <span className="or-card-name">Mastercard</span>
                  <span className="or-card-number">**** 5987</span>
                </div>
              </div>

              {/* Voucher */}
              <div className="or-section">
                <h3 className="or-section-title">Voucher</h3>

                <div className="or-voucher-row">
                  <input
                    type="text"
                    className="or-voucher-input"
                    placeholder="Enter voucher code"
                    value={voucherInput}
                    onChange={(e) => {
                      setVoucherInput(e.target.value);
                      if (voucherError) setVoucherError("");
                    }}
                  />
                  <button
                    className="or-apply-btn"
                    onClick={handleApplyVoucher}
                  >
                    Apply
                  </button>
                </div>

                {voucherError && (
                  <p className="or-voucher-error">{voucherError}</p>
                )}

                {appliedVoucher && (
                  <div className="or-voucher-chip">
                    <span>{appliedVoucher}</span>
                    <button
                      className="or-chip-remove"
                      onClick={handleRemoveVoucher}
                    >
                      ×
                    </button>
                  </div>
                )}
              </div>

              {/* Summary */}
              <div className="or-section">
                <h3 className="or-section-title">Summary</h3>

                <div className="or-summary-row">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(0)}</span>
                </div>

                <div className="or-summary-row">
                  <span>Ship</span>
                  <span>${shipping.toFixed(0)}</span>
                </div>

                <div className="or-summary-row">
                  <span>Fee</span>
                  <span>${fee.toFixed(0)}</span>
                </div>

                <div className="or-summary-divider"></div>

                <div className="or-summary-row or-total">
                  <span>Total</span>
                  <span>${total.toFixed(0)}</span>
                </div>
              </div>

              {/* Proceed Button */}
              <button
                className="or-proceed-btn"
                onClick={handleProceed}
              >
                Proceed to payment
              </button>
            </div>
          </div>
        </div>

        {/* ===== BOTTOM: You might also like ===== */}
        <div className="or-recommended">
          <h2 className="or-rec-title">You might also like</h2>

          <div className="or-rec-grid">
            {recommendedItems.map((item) => (
              <div key={item.id} className="or-rec-card">
                <div className="or-rec-img-wrap">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="or-rec-img"
                  />
                </div>

                <h3 className="or-rec-name">{item.name}</h3>
                <p className="or-rec-desc">{item.description}</p>

                <div className="or-rec-footer">
                  <span className="or-rec-price">${item.price}</span>
                  <button
                    className={`or-rec-btn ${
                      isInCart(item.id) ? "in-cart" : ""
                    }`}
                    onClick={() => handleAddRecommended(item)}
                  >
                    {isInCart(item.id) ? "✓ Added" : "Add to cart"}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
     
    <EditItemModal
      isOpen={isEditOpen}
      item={editingItem}
      onClose={() => {
        setIsEditOpen(false);
        setEditingItem(null);
      }}
      onUpdate={handleUpdateItem}
      onDelete={deleteFromCart}
    />
    </section>
  );
}