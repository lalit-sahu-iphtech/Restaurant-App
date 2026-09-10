
import menuImg1 from "../../assets/img/menu1.png"
import CrunchBowl from "../../assets/img/menu2.jpg"
import RainbowBowl from "../../assets/img/menu3.jpg"
import VolcanoBowl from "../../assets/img/menu4.jpg"
import TunaLoverBowl from "../../assets/img/menu5.jpg";
import DynamiteBowl from "../../assets/img/menu7.jpg";
import DukeBowl from "../../assets/img/menu8.jpg";
import AlohaVeganBowl from "../../assets/img/menu9.jpg";
import SalmonBowl from "../../assets/img/menu10.jpg";

// Build your own bowl

import WhiteRice from "../../assets/img/menu11.jpg";
import BrownRice from "../../assets/img/menu12.jpg";
import Salad from "../../assets/img/menu13.jpg";
import Noodles from "../../assets/img/menu14.jpg";

import Salmon from "../../assets/img/menuProtein1.png";
import Tuna from "../../assets/img/menuProtein2.png";
import SpicySalmon from "../../assets/img/menuProtein3.png";
import Shrimp from "../../assets/img/menuProtein4.png";
import Chicken from "../../assets/img/menuProtein5.png";
import Tofu from "../../assets/img/menuProtein6.png";
import Crab from "../../assets/img/menuProtein7.png";
import Octopus from "../../assets/img/menuProtein8.png";

import Corn from "../../assets/img/menuChooseMixIns1.png";
import Edamame from "../../assets/img/menuChooseMixIns2.png";
import Cucumber from "../../assets/img/menuChooseMixIns3.png";
import SweetOnion from "../../assets/img/menuChooseMixIns4.png";
import Avocado from "../../assets/img/menuChooseMixIns5.png";
import Ginger from "../../assets/img/menuChooseMixIns6.png";
import Carrot from "../../assets/img/menuChooseMixIns7.png";
import Jalapeno from "../../assets/img/menuChooseMixIns8.png";

import PonzuSauce from "../../assets/img/menuFlavor1.jpg";
import Gochujan from "../../assets/img/menuFlavor2.jpg";
import SweetSoy from "../../assets/img/menuFlavor3.jpg";
import SrirachaAioli from "../../assets/img/menuFlavor4.jpg";



import "./MenuPage.css";

import Testimonial from "./Testimonial";

export default function MenuPage() {
    const bowlSteps = [
        {
            step: 1,
            title: "Choose a Base",
            items: [
                { name: "White Rice", img: WhiteRice },
                { name: "Brown Rice", img: BrownRice },
                { name: "Salad", img: Salad },
                { name: "Noodles", img: Noodles },
            ],
        },
        {
            step: 2,
            title: "Pick Your Protein",
            items: [
                { name: "Salmon", img: Salmon },
                { name: "Tuna", img: Tuna },
                { name: "Spicy Salmon", img: SpicySalmon },
                { name: "Shrimp", img: Shrimp },
                { name: "Chicken", img: Chicken },
                { name: "Tofu", img: Tofu },
                { name: "Crab", img: Crab },
                { name: "Octopus", img: Octopus },
            ],
        },
        {
            step: 3,
            title: "Choose Your Mix-ins",
            items: [
                { name: "Corn", img: Corn },
                { name: "Edamame", img: Edamame },
                { name: "Cucumber", img: Cucumber },
                { name: "Sweet Onion", img: SweetOnion },
                { name: "Avocado", img: Avocado },
                { name: "Ginger", img: Ginger },
                { name: "Carrot", img: Carrot },
                { name: "Jalapeno", img: Jalapeno },
            ],
        },
        {
            step: 4,
            title: "Choose a Flavor",
            items: [
                { name: "Ponzu Sauce", img: PonzuSauce },
                { name: "Gochujan", img: Gochujan },
                { name: "Sweet Soy", img: SweetSoy },
                { name: "Sriracha Aioli", img: SrirachaAioli },
            ],
        },
    ];
    
    return (
    <>
        <section className="menu">
            <div className="menu-container">
                <img src={menuImg1} alt="menu img" />
                <div className="our-menu">
                    <h1>Our menu</h1>
                    
                    <div className="menu-row">
                        <div className="menu-item">
                            <img src={CrunchBowl} alt="California Crunch Bowl" />
                            <h3>California Crunch Bowl</h3>
                            <p>Shrimp • Crab • Cucumber • Green Onion • Carrot • Edamame • Avocado • Soy Sauce • Tempura Flakes • Spicy Mayo Drizzle</p>
                            <button>Order Now</button>
                        </div>
                        <div className="menu-item">
                            <img src={RainbowBowl} alt="Rainbow Bowl" />
                            <h3>Rainbow Bowl</h3>
                            <p>Crab • Salmon* • Avocado • Cucumber • Pineapple • Carrot • Sesame Seeds • House Sauce</p>
                            <button>Order Now</button>
                        </div>
                        <div className="menu-item">
                            <img src={VolcanoBowl} alt="Volcano Bowl" />
                            <h3>Volcano Bowl</h3>
                            <p>Spicy Salmon* • Spicy Tuna* • Green Onion • Cabbage • Cucumber • Carrot • Jalapeno • Ginger</p>
                            <button>Order Now</button>
                        </div>
                        <div className="menu-item">
                            <img src={TunaLoverBowl} alt="Tuna Lover's Bowl" />
                            <h3>Tuna Lover's Bowl</h3>
                            <p>Tuna* • Ground Spicy Tuna* • Avocado • Carrot • Cucumber • Edamame • Watermelon • Radish</p>
                            <button>Order Now</button>
                        </div>
                    </div>

                    <div className="menu-row">
                        <div className="menu-item">
                            <img src={DynamiteBowl} alt="Dynamite Bowl" />
                            <h3>Dynamite Bowl</h3>
                            <p>Tuna* • Shrimp • Carrot • Mango • Jalapeno • Cucumber • Chili Flakes • Sesame Seeds</p>
                            <button>Order Now</button>
                        </div>
                        <div className="menu-item">
                            <img src={DukeBowl} alt="The Duke Bowl" />
                            <h3>The Duke Bowl</h3>
                            <p>Tuna* • Salmon • Shrimp • Seaweed • Salad • Jalapeno • Sweet Onion • Edamame • Cucumber</p>
                            <button>Order Now</button>
                        </div>
                        <div className="menu-item">
                            <img src={AlohaVeganBowl} alt="Aloha Vegan Bowl" />
                            <h3>Aloha Vegan Bowl</h3>
                            <p>Tofu • Avocado • Carrot • Cabbage • Edamame • Watermelon Radish • Red Onion • Ginger</p>
                            <button>Order Now</button>
                        </div>
                        <div className="menu-item">
                            <img src={SalmonBowl} alt="Salmon Bowl" />
                            <h3>Salmon Bowl</h3>
                            <p>Spicy Salmon* • Green Onion • Avocado • Cucumber • Ginger • House Sauce mixed with light sriracha • Furikake • Lemon</p>
                            <button>Order Now</button>
                        </div>
                    </div>

                    <button className="see-all">See All</button>
                </div>
                
                <section className="build-bowl">
                    <div className="build-bowl-container">
                        <h1>Build your own bowl</h1>

                        {bowlSteps.map((s) => (
                            <div className="bowl-step" key={s.step}>
                                <div className="step-heading">
                                    <span className="step-number">{s.step}</span>
                                    <div>
                                        <p className="step-label">Step {s.step}</p>
                                        <h3>{s.title}</h3>
                                    </div>
                                </div>

                                <div className="bowl-items-row">
                                    {s.items.map((item, i) => (
                                        <div className="bowl-item" key={i}>
                                            <img src={item.img} alt={item.name} />
                                            <p>{item.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                      <div className="menu-order-btn">
                      <button className="order-now-btn">Order Now</button>
                      </div>
                    </div>
                </section>

            </div>

            
        </section>
        <Testimonial/>
    </>
    );
}

