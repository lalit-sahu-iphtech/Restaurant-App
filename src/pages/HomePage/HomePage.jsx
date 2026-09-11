
import heroImg from "../../assets/img/home.jpg"


import CrunchBowl from "../../assets/img/menu2.jpg"
import RainbowBowl from "../../assets/img/menu3.jpg"
import VolcanoBowl from "../../assets/img/menu4.jpg"
import TunaLoverBowl from "../../assets/img/menu5.jpg";

import avatar1 from "../../assets/img/A1.jpg";
import avatar2 from "../../assets/img/B1.jpg";
import avatar3 from "../../assets/img/E1.jpg";
import avatar4 from "../../assets/img/I1.jpg";

import bowlHandImg from "../../assets/img/bowl-hand.jpg";



import { FaChevronRight } from "react-icons/fa";



import "./HomePage.css"
import { useState } from "react";
import LocationAndGallery from "./LocationAndGallery";
import { useNavigate } from "react-router-dom";

const testimonials = [
    {
        name: "Lauren Martinez",
        avatar: avatar1,
        text: "I'm a big fan of poke bowls, and this place definitely delivers. The quality of the ingredients is top-notch, and the variety of toppings allows you to customize your bowl.",
    },
    {
        name: "John Miller",
        avatar: avatar2,
        text: "Absolutely loved the freshness of the ingredients. The Volcano Bowl was bursting with flavors and the spice level was just perfect. Will definitely order again!",
    },
    {
        name: "Sarah Chen",
        avatar: avatar3,
        text: "Best poke place in town! The customization options are endless, and the staff is super friendly. The Rainbow Bowl is my personal favorite. Highly recommended!",
    },
    {
        name: "David Park",
        avatar: avatar4,
        text: "Amazing quality and quick delivery. I've tried almost every bowl on their menu, and none of them disappointed. The Duke Bowl is a must-try for seafood lovers!",
    },
];

export default function HomePage(){
    const navigate = useNavigate();
    const[activeIdx, setActiveIdx] = useState(0);
    const current = testimonials[activeIdx];

    const nextTestimonial = () =>{
        setActiveIdx((prev) => (prev + 1) % testimonials.length);
    }
    const handleClick = () =>{
        navigate("/order");
    }
    const handleMenu = () =>{
        navigate("/menu");
    }

    return(
        <>
         <section className="hero">
            <div className="hero-container">
                <img src={heroImg} alt="Asian inspired poke bowl"loading="eager" />

                <div className="hero-content">
                    <h1>ASIAN INSPIRED BOWLS</h1>
                    <p>Fresh, healthy, delicious</p>
                    <button onClick={handleClick}>Order Now</button>
                </div>

            </div>
        </section>

        <section className="whats-poke">
          <div className="whats-poke-container">
            <h2>What's poke</h2>
            <p>
            Poke is a traditional Hawaiian dish that typically consists of diced raw
                        fish (such as tuna or salmon) marinated in soy sauce and other flavorful
                        ingredients. It is often served over a bed of rice and topped with various
                        toppings like seaweed, cucumber, avocado, and sesame seeds. Poke has
                        gained popularity worldwide and is now enjoyed in many different
                        variations and flavors.
            </p>
          </div>
        </section>

        <section className="hero-menu">
          <div className="our-menu">
                   <div className="our-menu-heading">
                   <h1>Signature Bowls</h1>
                   </div>
                    
                    <div className="menu-row">
                        <div className="hero-item">
                            <img src={CrunchBowl} alt="California Crunch Bowl" />
                            <h3>California Crunch Bowl</h3>
                            <p>Shrimp • Crab • Cucumber • Green Onion • Carrot • Edamame • Avocado • Soy Sauce • Tempura Flakes • Spicy Mayo Drizzle</p>
                            <button onClick={handleClick}>Order Now</button>
                        </div>
                        <div className="hero-item">
                            <img src={RainbowBowl} alt="Rainbow Bowl" />
                            <h3>Rainbow Bowl</h3>
                            <p>Crab • Salmon* • Avocado • Cucumber • Pineapple • Carrot • Sesame Seeds • House Sauce</p>
                            <button onClick={handleClick}>Order Now</button>

                        </div>
                        <div className="hero-item">
                            <img src={VolcanoBowl} alt="Volcano Bowl" />
                            <h3>Volcano Bowl</h3>
                            <p>Spicy Salmon* • Spicy Tuna* • Green Onion • Cabbage • Cucumber • Carrot • Jalapeno • Ginger</p>
                            <button onClick={handleClick}>Order Now</button>

                        </div>
                        <div className="hero-item">
                            <img src={TunaLoverBowl} alt="Tuna Lover's Bowl" />
                            <h3>Tuna Lover's Bowl</h3>
                            <p>Tuna* • Ground Spicy Tuna* • Avocado • Carrot • Cucumber • Edamame • Watermelon • Radish</p>
                            <button onClick={handleClick}>Order Now</button>

                        </div>
                    </div>

                    
                    <button className="explore-more" onClick={handleMenu}>Explore more</button>
                 

                 

                    
                </div>
        </section>
        
       <section className="testimonials">
        <div className="testimonials-container">
            <div className="testimonials-text">
                <h2>Our happy customers</h2>
                <p>{current.text}</p>
                <h4>{current.name}</h4>

                <div className="testimonial-avatars">
                    {[avatar1, avatar2, avatar3, avatar4]. map((av, i) =>(
                        <img src={av} 
                        key={i}
                        alt="customer-avatar" 
                        className={i === activeIdx ? "active-avatar" : ""}
                        onClick={() => setActiveIdx(i)}
                        
                        />
                    ))}

                    <button className="next-btn"onClick={nextTestimonial}><FaChevronRight/></button>
                </div>
            </div>

            <div className="testimonials-imag">
                <img src={bowlHandImg} alt="poke bowl in hand" />
            </div>

        </div>
       </section>

    

           <LocationAndGallery/>

        </>
       
    )
}