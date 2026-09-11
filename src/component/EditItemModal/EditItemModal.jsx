import { useState, useEffect } from "react";
import { FaTimes, FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import "./EditItemModal.css";

export default function EditItemModal({ isOpen, item, onClose, onUpdate, onDelete }) {
  const [quantity, setQuantity] = useState(1);

  // Load current quantity when modal opens
  useEffect(() => {
    if (isOpen && item) {
      setQuantity(item.quantity || 1);
    }
  }, [isOpen, item]);

  // ESC to close
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  const handleSave = () => {
    onUpdate(item.id, { quantity });
    onClose();
  };

  const handleDelete = () => {
    if (window.confirm("Remove this item from cart?")) {
      onDelete(item.id);
      onClose();
    }
  };

  return (
    <div className="ei-overlay" onClick={onClose}>
      <div className="ei-modal" onClick={(e) => e.stopPropagation()}>

        {/* HEADER */}
        <div className="ei-header">
          <div className="ei-header-left">
            <img src={item.img} alt={item.name} className="ei-header-img" />
            <div>
              <h2 className="ei-title">{item.name}</h2>
              <p className="ei-subtitle">
                {item.base
                  ? `${item.base}${item.proteins?.length ? ` • ${item.proteins.join(" • ")}` : ""}`
                  : item.description?.slice(0, 60) + "..."}
              </p>
            </div>
          </div>
          <button className="ei-close" onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        {/* BODY */}
        <div className="ei-body">
          <h3 className="ei-step-title">Change Quantity</h3>

          <div className="ei-qty-section">
            <div className="ei-qty">
              <button
                className="ei-qty-btn"
                onClick={() => setQuantity((q) => (q > 1 ? q - 1 : 1))}
                disabled={quantity <= 1}
              >
                <FaMinus size={12} />
              </button>
              <span className="ei-qty-value">{quantity}</span>
              <button
                className="ei-qty-btn"
                onClick={() => setQuantity((q) => q + 1)}
              >
                <FaPlus size={12} />
              </button>
            </div>

            <div className="ei-price-info">
              <span className="ei-price-label">Price per item:</span>
              <span className="ei-price-value">${item.price}</span>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="ei-footer">
          <button className="ei-delete-btn" onClick={handleDelete}>
            <FaTrash size={13} /> Remove
          </button>

          <div className="ei-footer-right">
            <button className="ei-cancel-btn" onClick={onClose}>
              Cancel
            </button>
            <button className="ei-save-btn" onClick={handleSave}>
              Update · ${(item.price * quantity).toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}