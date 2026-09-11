import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Cart/CartContext";
import { useAuth } from "../Auth/AuthContext";
import { bowlItems, drinkItems } from "../../data/menuData";
import Testimonial from "../menuPage/Testimonial";
import "./SeeAll.css";

export default function SeeAll() {
    const navigate = useNavigate();
    const { addToCart, removeFromCart, isInCart } = useCart();
    const { isAuthenticated, openAuthModal } = useAuth();

    const [activeTab, setActiveTab] = useState("all");

    // Filter items based on tab
    const getFilteredItems = () => {
        if (activeTab === "bowls") return bowlItems;
        if (activeTab === "drinks") return drinkItems;
        return [...bowlItems, ...drinkItems]; // all
    };

    const filteredItems = getFilteredItems();

    // Handle add to cart
    const handleAddToCart = (item) => {
        if (!isAuthenticated()) {
            openAuthModal("signin", "/menu/see-all");
            return;
        }

        if (isInCart(item.id)) {
            removeFromCart(item.id);
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

    // Handle order click
    const handleOrder = () => {
        if (!isAuthenticated()) {
            openAuthModal("signin", "/order");
            return;
        }
        navigate("/order");
    };

    return (
        <section className="see-all">
            <div className="see-all-container">

                {/* ===== HEADER ===== */}
                <div className="see-all-header">
                    <h1 className="see-all-title">Our Full Menu</h1>
                    <p className="see-all-subtitle">
                        Explore all our delicious poke bowls and refreshing drinks
                    </p>
                </div>

                {/* ===== TABS ===== */}
                <div className="see-all-tabs">
                    <button
                        className={`see-all-tab ${activeTab === "all" ? "active" : ""}`}
                        onClick={() => setActiveTab("all")}
                    >
                        All ({bowlItems.length + drinkItems.length})
                    </button>
                    <button
                        className={`see-all-tab ${activeTab === "bowls" ? "active" : ""}`}
                        onClick={() => setActiveTab("bowls")}
                    >
                        Bowls ({bowlItems.length})
                    </button>
                    <button
                        className={`see-all-tab ${activeTab === "drinks" ? "active" : ""}`}
                        onClick={() => setActiveTab("drinks")}
                    >
                        Drinks ({drinkItems.length})
                    </button>
                </div>

                {/* ===== GRID ===== */}
                <div className="see-all-grid">
                    {filteredItems.map((item) => (
                        <div key={item.id} className="see-all-card">
                            <div className="see-all-img-wrap">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="see-all-img"
                                />
                            </div>

                            <h3 className="see-all-card-name">{item.name}</h3>
                            <p className="see-all-card-desc">{item.description}</p>

                            <div className="see-all-card-footer">
                                <span className="see-all-card-price">${item.price}</span>
                                <button
                                    className={`see-all-btn ${
                                        isInCart(item.id) ? "in-cart" : ""
                                    }`}
                                    onClick={() => handleAddToCart(item)}
                                >
                                    {isInCart(item.id) ? "Remove" : "Add to cart"}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* ===== ORDER CTA ===== */}
                <div className="see-all-cta">
                    <button className="see-all-order-btn" onClick={handleOrder}>
                        Go to Checkout
                    </button>
                </div>
            </div>

            {/* ===== TESTIMONIAL ===== */}
            <Testimonial />
        </section>
    );
}