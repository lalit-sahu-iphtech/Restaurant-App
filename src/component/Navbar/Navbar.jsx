import logo from "../../assets/img/logo.svg"
import "./Navbar.css"
import { Link, useNavigate } from "react-router-dom"

export default function Navbar() {
    const navigate = useNavigate()

    const handleOrderOnline = () => {
        navigate("/order")
    }

    const handleBookTable = () => {
        navigate("/book-table")
    }

    return(
        <>
        <section className="navbar">
            <div className="nav-container">
                <div className="nav-left">
                    <Link to="/" className="nav-logo-link">
                        <img src={logo} alt="Poke Now Logo" />
                        <h1>POKE NOW</h1>
                    </Link>
                </div>
                <div className="nav-center">
                    <ul>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/our-story">Our story</Link></li>
                        <li><Link to="/location">Location</Link></li>
                        <li><Link to="/gift-card">Gift card</Link></li>
                    </ul>
                </div>

                <div className="nav-right">
                    <button onClick={handleOrderOnline}>Order Online</button>
                    <button onClick={handleBookTable}>Book a Table</button>
                </div>
            </div>
        </section>
        </>
    )
}