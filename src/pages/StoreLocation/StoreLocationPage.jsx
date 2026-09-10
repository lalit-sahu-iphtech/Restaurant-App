import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import StoreLocationCard from "./StoreLocationCard";
import { locations } from "./location";
import { useState } from "react";
import { useNavigate } from "react-router-dom";   
import "./StoreLocationPage.css";

export default function StoreLocation() {
    const navigate = useNavigate();   
    const [activeTab, setActiveTab] = useState("delivery");
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedId, setSelectedId] = useState(1);

    const filteredLocations = locations.filter((loc) => {
        const matchesSearch =
            loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            loc.address.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesSearch;
    });

    const handleSelectLocation = (locationId) => {
        const selected = locations.find((loc) => loc.id === locationId);
        
        if (selected) {
            
            localStorage.setItem("selectedLocation", JSON.stringify(selected));
            
           
            navigate("/order", { state: { location: selected } });
        }
    };

    return (
        <section className="store-location-page">
            <div className="store-location-container">
                <div className="store-location-left">
                    <div className="store-location-tabs">
                        <button
                            className={`tab ${activeTab === "delivery" ? "active" : ""}`}
                            onClick={() => setActiveTab("delivery")}
                        >
                            Delivery
                        </button>
                        <button
                            className={`tab ${activeTab === "pickup" ? "active" : ""}`}
                            onClick={() => setActiveTab("pickup")}
                        >
                            Pickup
                        </button>
                    </div>

                    <h2 className="store-location-heading">
                        Find nearby locations to order from
                    </h2>

                    <div className="store-location-search">
                        <FaSearch className="store-location-search-icon" />
                        <input
                            type="text"
                            placeholder="Find a store near you"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                    </div>

                    <div className="store-location-list">
                        {filteredLocations.length === 0 ? (
                            <p className="no-result">No location found</p>
                        ) : (
                            filteredLocations.map((loc) => (
                                <StoreLocationCard
                                    key={loc.id}
                                    location={loc}
                                    isSelected={selectedId === loc.id}
                                    onSelect={(id) => {
                                        setSelectedId(id);
                                        handleSelectLocation(id);   
                                    }}
                                />
                            ))
                        )}
                    </div>
                </div>

             
                <div className="store-location-right">
                    <div className="store-map-container">
                        <iframe
                            title="Store Map"
                            src="https://www.google.com/maps?q=42.3601,-71.0589&z=13&output=embed"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
}