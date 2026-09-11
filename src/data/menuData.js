// Bowls images
import CrunchBowl from "../assets/img/menu2.jpg";
import RainbowBowl from "../assets/img/menu3.jpg";
import VolcanoBowl from "../assets/img/menu4.jpg";
import TunaLoverBowl from "../assets/img/menu5.jpg";
import DynamiteBowl from "../assets/img/menu7.jpg";
import DukeBowl from "../assets/img/menu8.jpg";
import AlohaVeganBowl from "../assets/img/menu9.jpg";
import SalmonBowl from "../assets/img/menu10.jpg";

// Drinks images
import CocaCola from "../assets/checkoutMenu/menu9.jpg";
import Water from "../assets/checkoutMenu/menu10.jpg";
import SweetTea from "../assets/checkoutMenu/menu11.jpg";
import Lemonade from "../assets/checkoutMenu/menu12.jpg";

export const bowlItems = [
    {
        id: 1,
        name: "California Crunch Bowl",
        img: CrunchBowl,
        description: "Shrimp • Crab • Cucumber • Green Onion • Carrot • Edamame • Avocado • Soy Sauce • Tempura Flakes • Spicy Mayo Drizzle",
        price: 20,
        category: "bowls",
    },
    {
        id: 2,
        name: "Rainbow Bowl",
        img: RainbowBowl,
        description: "Crab • Salmon* • Avocado • Cucumber • Pineapple • Carrot • Sesame Seeds • House Sauce",
        price: 10,
        category: "bowls",
    },
    {
        id: 3,
        name: "Volcano Bowl",
        img: VolcanoBowl,
        description: "Spicy Salmon* • Spicy Tuna* • Green Onion • Cabbage • Cucumber • Carrot • Jalapeno • Ginger",
        price: 12,
        category: "bowls",
    },
    {
        id: 4,
        name: "Tuna Lover's Bowl",
        img: TunaLoverBowl,
        description: "Tuna* • Ground Spicy Tuna* • Avocado • Carrot • Cucumber • Edamame • Watermelon • Radish",
        price: 18,
        category: "bowls",
    },
    {
        id: 5,
        name: "Dynamite Bowl",
        img: DynamiteBowl,
        description: "Tuna* • Shrimp • Carrot • Mango • Jalapeno • Cucumber • Chili Flakes • Sesame Seeds",
        price: 20,
        category: "bowls",
    },
    {
        id: 6,
        name: "The Duke Bowl",
        img: DukeBowl,
        description: "Tuna* • Salmon • Shrimp • Seaweed • Salad • Jalapeno • Sweet Onion • Edamame • Cucumber",
        price: 16,
        category: "bowls",
    },
    {
        id: 7,
        name: "Aloha Vegan Bowl",
        img: AlohaVeganBowl,
        description: "Tofu • Avocado • Carrot • Cabbage • Edamame • Watermelon Radish • Red Onion • Ginger",
        price: 14,
        category: "bowls",
    },
    {
        id: 8,
        name: "Salmon Bowl",
        img: SalmonBowl,
        description: "Spicy Salmon* • Green Onion • Avocado • Cucumber • Ginger • House Sauce • Sriracha • Furikake • Lemon",
        price: 15,
        category: "bowls",
    },
];

export const drinkItems = [
    { id: 9, name: "Coca Cola", img: CocaCola, description: "Chilled Coca Cola", price: 2, category: "drinks" },
    { id: 10, name: "Water", img: Water, description: "Mineral water", price: 2, category: "drinks" },
    { id: 11, name: "Sweet Tea", img: SweetTea, description: "Refreshing sweet tea", price: 2, category: "drinks" },
    { id: 12, name: "Lemonade", img: Lemonade, description: "Fresh lemonade", price: 2, category: "drinks" },
];

export const allMenuItems = [...bowlItems, ...drinkItems];