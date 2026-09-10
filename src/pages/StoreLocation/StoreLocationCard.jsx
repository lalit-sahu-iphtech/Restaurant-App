import { FaMapMarkerAlt } from "react-icons/fa";
import "./StoreLocationPage.css";

export default function StoreLocationCard({ location, isSelected, onSelect }) {
    return (
        <div
            className={`store-location-card ${isSelected ? "selected" : ""}`}
            onClick={() => onSelect(location.id)}
        >
            <div className="store-card-top">
                <FaMapMarkerAlt className="card-icon" />
                <div className="store-card-info">
                    <h3>{location.name}</h3>
                    <p>{location.address}</p>
                </div>
            </div>

            <div className="store-card-bottom">
                <button className="store-select-btn">Select</button>
                <span className="store-card-meta">
                    {location.distance} / {location.time}
                </span>
            </div>
        </div>
    );
}