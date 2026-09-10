import { useCart } from "../Cart/CartContext";
import menuHero from "../../assets/checkoutMenu/menuHero.jpg";

// Build your own bowl
import menuImg1 from "../../assets/checkoutMenu/menu1.jpg";
import menuImg2 from "../../assets/checkoutMenu/menu2.jpg";
import menuImg3 from "../../assets/checkoutMenu/menu3.jpg";
import menuImg4 from "../../assets/checkoutMenu/menu4.jpg";
import menuImg5 from "../../assets/checkoutMenu/menu5.jpg";
import menuImg6 from "../../assets/checkoutMenu/menu6.jpg";
import menuImg7 from "../../assets/checkoutMenu/menu7.jpg";
import menuImg8 from "../../assets/checkoutMenu/menu8.jpg";

import cocaCola from "../../assets/checkoutMenu/menu9.jpg";
import Water from "../../assets/checkoutMenu/menu10.jpg";
import sweatTea from "../../assets/checkoutMenu/menu11.jpg";
import Lemonade from "../../assets/checkoutMenu/menu12.jpg";

import "./checkoutMenu.css";

import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";

import { useState, useEffect } from "react"; 
import { useLocation } from "react-router-dom";


export default function CheckoutMenu() {
  const { addToCart } = useCart();
  const [addedItems, setAddedItems] = useState({});
  const [orderMode, setOrderMode] = useState("delivery");

  const routerLocation = useLocation();
  const [selectedLocation, setSelectedLocation] = useState(null);


  useEffect(() => {
      // Priority 1: Router state (fresh navigation)
      if (routerLocation.state?.location) {
          setSelectedLocation(routerLocation.state.location);
          return;
      }

      // Priority 2: localStorage (page refresh ke baad)
      const stored = localStorage.getItem("selectedLocation");
      if (stored) {
          try {
              setSelectedLocation(JSON.parse(stored));
          } catch (err) {
              console.error("Error parsing stored location:", err);
          }
      }
  }, [routerLocation.state]);


  // Menu items data
  const menuItems = [
    {
      id: 1,
      name: "Build Your Own Poke Bowl",
      img: menuImg1,
      description: "Extra proteins for an additional charge",
      price: 20,
      category: "bowls",
    },
    {
      id: 2,
      name: "Rainbow Bowl",
      img: menuImg2,
      description: "Crab • Salmon* • Avocado • Cucumber • Pineapple • Carrot • Sesame Seeds • House Sauce",
      price: 10,
      category: "bowls",
    },
    {
      id: 3,
      name: "Volcano Bowl",
      img: menuImg3,
      description: "Spicy Salmon* • Spicy Tuna* • Green Onion • Cabbage • Cucumber • Carrot • Jalapeno • Ginger",
      price: 12,
      category: "bowls",
    },
    {
      id: 4,
      name: "Tuna Lover's Bowl",
      img: menuImg4,
      description: "Tuna* • Ground Spicy Tuna* • Avocado • Carrot • Cucumber • Edamame • Watermelon • Radish",
      price: 18,
      category: "bowls",
    },
    {
      id: 5,
      name: "Dynamite Bowl",
      img: menuImg5,
      description: "Tuna* • Shrimp • Carrot • Mango • Jalapeno • Cucumber • Chili Flakes • Sesame Seeds",
      price: 20,
      category: "bowls",
    },
    {
      id: 6,
      name: "The Duke Bowl",
      img: menuImg6,
      description: "Tuna* • Salmon • Shrimp • Seaweed • Salad • Jalapeno • Sweet Onion • Edamame • Cucumber",
      price: 16,
      category: "bowls",
    },
    {
      id: 7,
      name: "California Crunch Bowl",
      img: menuImg7,
      description: "Shrimp • Crab • Cucumber • Green Onion • Carrot • Edamame • Avocado • Soy Sauce • Tempura Flakes • Spicy Mayo Drizzle",
      price: 20,
      category: "bowls",
    },
    {
      id: 8,
      name: "Salmon Bowl",
      img: menuImg8,
      description: "Spicy Salmon* • Green Onion • Avocado • Cucumber • Ginger • House Sauce mixed with light sriracha • Furikake • Lemon",
      price: 15,
      category: "bowls",
    },
  ];

  const drinkItems = [
    { id: 9, name: "Coca Cola", img: cocaCola, price: 2, category: "drinks" },
    { id: 10, name: "Water", img: Water, price: 2, category: "drinks" },
    { id: 11, name: "Sweet Tea", img: sweatTea, price: 2, category: "drinks" },
    { id: 12, name: "Lemonade", img: Lemonade, price: 2, category: "drinks" },
  ];

  const handleAddToCart = (item) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      img: item.img,
    });

    // Show feedback animation
    setAddedItems((prev) => ({
      ...prev,
      [item.id]: true,
    }));

    setTimeout(() => {
      setAddedItems((prev) => ({
        ...prev,
        [item.id]: false,
      }));
    }, 1500);
  };

  // Split menu items into rows of 4
  const firstRow = menuItems.slice(0, 4);
  const secondRow = menuItems.slice(4, 8);

  return (
    <section className="checkout-menu">
      <div className="checkout-menu-container">
        {/* Hero Image */}
        <img src={menuHero} alt="Menu Hero" className="menu-hero" />
        <div className="location-bar">
            <div className="location-info">
                <div className="location-name">
                    <h2>{selectedLocation?.name || "Select a location"}</h2>
                    <div className="location-row">
                        <CiLocationOn/>
                        <span>{selectedLocation?.address || "Not location selected"}</span>
                        <a href="/store-location" className="change-location">Change Location</a>
                    </div>

                    <div className="location-row">
                        <CiClock2/>
                        <span>
                                    {selectedLocation
                                        ? "Monday - Saturday 10:30 AM - 9:00 PM / Sunday 12:00 PM - 9:00 PM"
                                        : "Select a store to see hours"}
                                </span>
                        
                    </div>
                </div>

                <div className="order-toggle">
                    <button
                    className={`toggle-btn ${orderMode === "delivery" ? "active" : ""}`}
                    onClick = {() => setOrderMode("delivery")}
                    >
                        Delivery
                        </button>
                    <button
                    className={`toggle-btn ${orderMode === "pickup" ? "active" : ""}`}
                    onClick={() => setOrderMode("pickup")}
                    >
                    Pickup
                    </button>
                </div>
            </div>
        </div>

        {/* Menu Section */}
        <div className="menu-section">
          <h1 className="menu-title">Menu</h1>

          {/* First Row */}
          <div className="menu-grid">
            {firstRow.map((item) => (
              <div key={item.id} className="menu-card">
                <img src={item.img} alt={item.name} className="menu-card-img" />
                <h3 className="menu-card-title">{item.name}</h3>
                <p className="menu-card-desc">{item.description}</p>
                {/* Menu card ke andar */}
                <div className="menu-card-footer">
                <p className="menu-card-price">${item.price}</p>
                <button
                    className={`menu-card-btn ${addedItems[item.id] ? "added" : ""}`}
                    onClick={() => handleAddToCart(item)}
                >
                    {addedItems[item.id] ? "✓ Added" : "Add to cart"}
                </button>
                </div>
              </div>
            ))}
          </div>

          {/* Second Row */}
          <div className="menu-grid">
            {secondRow.map((item) => (
              <div key={item.id} className="menu-card">
                <img src={item.img} alt={item.name} className="menu-card-img" />
                <h3 className="menu-card-title">{item.name}</h3>
                <p className="menu-card-desc">{item.description}</p>
                <div className="menu-card-footer">
                <p className="menu-card-price">${item.price}</p>
                <button
                    className={`menu-card-btn ${addedItems[item.id] ? "added" : ""}`}
                    onClick={() => handleAddToCart(item)}
                >
                    {addedItems[item.id] ? "✓ Added" : "Add to cart"}
                </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Drinks Section */}
        <section className="drinks-section">
          <div className="drinks-container">
            <h2 className="drinks-title">Drink</h2>

            <div className="drinks-grid">
              {drinkItems.map((item) => (
                <div key={item.id} className="drink-card">
                  <img src={item.img} alt={item.name} className="drink-card-img" />
                  <p className="drink-card-name">{item.name}</p>
                 {/* Drink card ke andar */}
                    <div className="drink-card-footer">
                    <p className="drink-card-price">${item.price}</p>
                    <button
                        className={`drink-card-btn ${addedItems[item.id] ? "added" : ""}`}
                        onClick={() => handleAddToCart(item)}
                    >
                        {addedItems[item.id] ? "✓ Added" : "Add to cart"}
                    </button>
                    </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}