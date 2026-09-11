import { FaTimes } from "react-icons/fa";
import tableImg from "../../assets/img/gallery2.jpg";
import { useEffect, useState } from "react";
import {useAuth} from "../Auth/AuthContext"
import "./TablePage.css";

export default function TablePage({ isOpen, onClose }) {

    const{isAuthenticated, currentUser, openAuthModal} = useAuth();
    const [formData, setFormData] = useState({
        name: "",
        guests: "",
        restaurant: "",
        date: "",
        time: ""
    });

    const [errors, setErrors] = useState({});

    const guestsOptions = ["1 Guest", "2 Guests", "3 Guests", "4 Guests", "5 Guests", "6+ Guests"];
    const restaurantOptions = [
        "PokeBar Harbor Islands",
        "PokeBar Boylston St",
        "PokeBar Congress St",
        "PokeBar Cambridge"
    ];
    const dateOptions = [
        "Fri 25, Sep", "Sat 26, Sep", "Sun 27, Sep",
        "Mon 28, Sep", "Tue 29, Sep", "Wed 30, Sep"
    ];
    const timeOptions = ["11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "5:00 PM", "6:00 PM", "7:00 PM", "8:00 PM"];

     useEffect(()=>{
        if(isAuthenticated() && currentUser?.name){
            setFormData((prev)=>({
                ...prev, 
                name:currentUser.name,
            }))
        }
     }, [isAuthenticated, currentUser])
    const validateForm = () => {
        const newErrors = {};

       
        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        } else if (formData.name.trim().length < 2) {
            newErrors.name = "Name must be at least 2 characters";
        }
        
        if (!formData.guests) {
            newErrors.guests = "Please select guests";
        }
        
        if (!formData.restaurant) {
            newErrors.restaurant = "Please select restaurant";
        }
        
        if (!formData.date) {
            newErrors.date = "Please select date";
        }
        
        if (!formData.time) {
            newErrors.time = "Please select time";
        }

        setErrors(newErrors);

       
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: "" }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!isAuthenticated()){
            openAuthModal("signin");
            return;
        }

        if (validateForm()) {
            const reservations = JSON.parse(localStorage.getItem("reservations") || "[]");

            const newReservation = {
                id: Date.now().toString(),  
                ...formData,
                createdAt: new Date().toISOString()
            };

            localStorage.setItem("reservations", JSON.stringify([...reservations, newReservation]));
            alert(" Table booked successfully!");

            setFormData({
                name: "",
                guests: "",
                restaurant: "",
                date: "",
                time: ""
            });

            onClose(); 
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-container" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>
                    <FaTimes />
                </button>

                <div className="modal-form-side">
                    <h2 className="modal-title">Reservation</h2>
                    <p className="modal-desc">
                        We provide a convenient online reservation system. Simply select
                        your desired date, time, and party size, and we will make sure that
                        your table is ready upon your arrival.
                    </p>

                    {!isAuthenticated () && (
                        <div className="login-required-banner">Please
                        <button
                        type="button"
                        className="banner-link"
                        onClick={() =>{
                            onClose();
                            openAuthModal("signin");
                        }}
                        >Sign In</button>
                        or
                        <button
                                type="button"
                                className="banner-link"
                                onClick={() => {
                                    onClose();
                                    openAuthModal("signup");
                                }}
                            >
                                Sign Up
                            </button>
                            to book a table.
                        </div>
                       
                    )}

                    <form onSubmit={handleSubmit} className="reservation-form">
                        {/* Name */}
                        <div className="form-group">
                            <label>Your Name</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Your name"
                                value={formData.name}
                                onChange={handleChange}
                                className={errors.name ? "error" : ""}
                                disabled={!isAuthenticated()}
                            />
                            {errors.name && <span className="error-text">{errors.name}</span>}
                        </div>

                        {/* Guests & Restaurant */}
                        <div className="form-row">
                            <div className="form-group">
                                <label>Guests</label>
                                <select
                                    name="guests"     
                                    value={formData.guests}
                                    onChange={handleChange}
                                    className={errors.guests ? "error" : ""}
                                     disabled={!isAuthenticated()}

                                >
                                    <option value="">Number of guests</option>
                                    {guestsOptions.map(g => (
                                        <option key={g} value={g}>{g}</option>
                                    ))}
                                </select>
                                {errors.guests && <span className="error-text">{errors.guests}</span>}
                            </div>

                            <div className="form-group">
                                <label>Restaurant</label>
                                <select
                                    name="restaurant"   
                                    value={formData.restaurant}
                                    onChange={handleChange}
                                    className={errors.restaurant ? "error" : ""}
                                   disabled={!isAuthenticated()}

                                >
                                    <option value="">Your favorite place?</option>
                                    {restaurantOptions.map(r => (
                                        <option key={r} value={r}>{r}</option>
                                    ))}
                                </select>
                                {errors.restaurant && <span className="error-text">{errors.restaurant}</span>}
                            </div>
                        </div>

                        {/* Date & Time */}
                        <div className="form-row">
                            <div className="form-group">
                                <label>Date</label>
                                <select
                                    name="date"
                                    value={formData.date}
                                    onChange={handleChange}
                                    className={errors.date ? "error" : ""}
                                    disabled={!isAuthenticated()}

                                >
                                    <option value="">Select date</option>
                                    {dateOptions.map(d => (
                                        <option key={d} value={d}>{d}</option>
                                    ))}
                                </select>
                                {errors.date && <span className="error-text">{errors.date}</span>}
                            </div>

                            <div className="form-group">
                                <label>Time</label>
                                <select
                                    name="time"
                                    value={formData.time}
                                    onChange={handleChange}
                                    className={errors.time ? "error" : ""}
                                     disabled={!isAuthenticated()}

                                >
                                    <option value="">Select time</option>
                                    {timeOptions.map(t => (
                                        <option key={t} value={t}>{t}</option>
                                    ))}
                                </select>
                                {errors.time && <span className="error-text">{errors.time}</span>}
                            </div>
                        </div>

                        <button type="submit" 
                        className="book-table-btn"
                        disabled={!isAuthenticated()}
                        
                        >
                            {isAuthenticated() ? "Book a table" : "Login to Book"}
                        </button>
                    </form>
                </div>

                <div className="modal-image-side">
                    <img src={tableImg} alt="reservation" />
                </div>
            </div>
        </div>
    );
}