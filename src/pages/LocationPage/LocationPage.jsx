import { FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

import locationImg from "../../assets/img/locationImg.jpg"
import card1 from "../../assets/img/card1.jpg"
import card2 from "../../assets/img/card2.jpg"
import card3 from "../../assets/img/card3.jpg"
import card4 from "../../assets/img/card4.jpg"
import card5 from "../../assets/img/card5.jpg"
import card6 from "../../assets/img/card6.jpg"

import "./LocationPage.css"
import GalleryPage from "../HomePage/GalleryPage";

const locations = [
    {
        img: card1,
        address: "Boston Harbor Islands, 15 State Street, Suite 1100, Boston",
        phone: "(713) 814-7100",
        email: "pokebarharborislands@gmail.com",
    },
    {
        img: card2,
        address: "827 Boylston St, Boston",
        phone: "(715) 941-6647",
        email: "pokebarboylston@gmail.com",
    },
    {
        img: card3,
        address: "372 Congress St, Boston",
        phone: "(803) 832-8595",
        email: "pokebarcongress@gmail.com",
    },
    {
        img: card4,
        address: "1 Kendall Square, Boston",
        phone: "(719) 582-8228",
        email: "pokebarkendallsquare@gmail.com",
    },
    {
        img: card5,
        address: "487 Cambridge St, Allston Boston",
        phone: "(806) 472-1493",
        email: "pokebarcambridge@gmail.com",
    },
    {
        img: card6,
        address: "1 Haviland St, Boston, MA 02115",
        phone: "(610) 743-8021",
        email: "pokebarhaviland@gmail.com",
    },
]

export default function LocationPage() {
    return (
        <section className="location">
            <div className="location-container">
                <img src={locationImg} alt="poke bowl being prepared" />
            </div>

            <h1 className="location-heading">Locations & Hours</h1>

            {/* Location and Hour section */}
            <div className="location-grid">
                {locations.map((loc, index) => (
                    <div className="location-content" key={index}>
                        <div className="location-img-wrap">
                            <img src={loc.img} alt={loc.address} />
                        </div>

                        <h3>{loc.address}</h3>
                        <p className="hours">Monday - Saturday 10:30 AM - 9:00PM</p>
                        <p className="hours">Sunday - 12:00 PM - 9:00PM</p>

                        <div className="location-contact">
                            <FaPhoneAlt size={16} />
                            <p>{loc.phone}</p>
                        </div>
                        <div className="location-email">
                            <FaMapMarkerAlt size={16} />
                            <p>{loc.email}</p>
                        </div>

                        <div className="location-btns">
                            <button className="btn-outline-location">Delivery</button>
                            <button className="btn-outline-location2">Pickup</button>
                        </div>
                    </div>
                ))}
            </div>

            <GalleryPage/>
        </section>
    )
}