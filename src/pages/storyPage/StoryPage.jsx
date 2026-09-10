import { useNavigate } from "react-router-dom"
import storyImg from "../../assets/img/ourStory.jpg"
import res1 from "../../assets/img/res1.jpg"
import res2 from "../../assets/img/res2.jpg"
import res3 from "../../assets/img/res3.jpg"
import LocationAndGallery from "../HomePage/LocationAndGallery"

import "./storyPage.css"

export default function StoryPage() {

    const navigate = useNavigate();

    const handleClick = () =>{
        navigate("/order");
    }
    return (
        <>
            <section className="story">
                <div className="story-container">
                    <img src={storyImg} alt="our story" />
                    <div className="story-content">
                        <h1>Our story begins</h1>
                        <p className="main-text">
                            At Poke Now, we believe fast food should be fresh food. From our premium
                            ingredients to our exceptional service, eating healthy has never been easier—or
                            more enjoyable!
                        </p>
                        <h3>What's poke</h3>
                        <p className="sub-text">
                            Poke is a traditional Hawaiian dish that typically consists of
                            diced raw fish (such as tuna or salmon) marinated in soy sauce and other flavorful
                            ingredients. It is often served over a bed of rice and topped with various toppings like seaweed,
                            cucumber, avocado, and sesame seeds.
                        </p>
                        <button className="order-btn"onClick={handleClick}>Order Now</button>
                    </div>
                </div>
            </section>

            <section className="res">
                <div className="res-container">
                    <div className="res-content">
                        <h1>Traditional Heritage, <br />Modern Result</h1>
                        <p>
                            One of the reasons for pocke's popularity is its veratility. While the traditional <br />version
                            remains a favorite, there are now numerous variations available,
                            <br />allowing people to customize their poke bowls according to their preferences.
                        </p>
                    </div>

                    <div className="res-img">
                        <div className="res-img-arc"></div>
                        <img className="res-img-main" src={res1} alt="poke bowl" />
                        <img className="res-img-small res-img-top" src={res2} alt="poke bowl" />
                        <img className="res-img-small res-img-bottom" src={res3} alt="poke bowl" />
                    </div>
                </div>
            </section>

            <LocationAndGallery/>
        </>
    )
}