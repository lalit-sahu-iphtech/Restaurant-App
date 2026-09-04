import avatar1 from "../../assets/img/A1.jpg";
import avatar2 from "../../assets/img/B1.jpg";
import avatar3 from "../../assets/img/E1.jpg";
import avatar4 from "../../assets/img/I1.jpg";

import bowlHandImg from "../../assets/img/bowl-hand.jpg";

import locationBowl1 from "../../assets/img/location-bowl1.jpg";
import locationBowl2 from "../../assets/img/location-bowl2.jpg";

import { FaChevronRight } from "react-icons/fa";

import { useState } from "react";

const testimonials = [
    {
        name : "Lauren Martinez",
        avatar : avatar1,
        text: "I'm a big fan of poke bowls, and this place definitely delivers. The quality of the ingredients is top-notch, and the variety of toppings allows you to customize your bowl.",

    },

]

export default function Tesimonial(){
    const[activeIdx, setActiveIdx] = useState(0);
    const current = testimonials[activeIdx];

    const nextTestimonial = () =>{
        setActiveIdx((prev) => (prev + 1) % testimonials.length);
    }

    return(
        <>
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
                        className={i === activeIdx ? "active-avtar" : ""}
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

       <section className="find-locations">
                <div className="find-locations-container">
                    <div className="locations-text">
                        <h2>Find our locations</h2>
                        <p>
                            Serving fresh fish daily at Boston Harbor Islands, Boylston St,
                            Congress St, Kendall Square, Cambridge St, Haviland St.
                        </p>
                        <button>Locations &amp; Hours</button>
                    </div>

                    <div className="locations-images">
                        <img src={locationBowl1} alt="poke bowl" className="bowl-large" />
                        <img src={locationBowl2} alt="poke bowl" className="bowl-small" />
                    </div>
                </div>
            </section>
        </>
    )
}