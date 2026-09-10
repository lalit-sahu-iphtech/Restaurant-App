
import locationBowl1 from "../../assets/img/location-bowl1.jpg";
import locationBowl2 from "../../assets/img/location-bowl2.jpg";

import "./HomePage.css"
import GalleryPage from "./GalleryPage";
import { useNavigate } from "react-router-dom";


export default function LocationAndGallery(){

    const navigate = useNavigate();


    const handleClick = ()=>{
         navigate("/store-location");
    }

    return(

        <>
          <section className="find-locations">
                <div className="find-locations-container">
                    <div className="locations-text">
                        <h2>Find our locations</h2>
                        <p>
                            Serving fresh fish daily at Boston Harbor Islands, Boylston St,
                            Congress St, Kendall Square, Cambridge St, Haviland St.
                        </p>
                        <button onClick={handleClick}>Locations &amp; Hours</button>
                    </div>

                    <div className="locations-images">
                        <img src={locationBowl1} alt="poke bowl" className="bowl-large" />
                        <img src={locationBowl2} alt="poke bowl" className="bowl-small" />
                    </div>
                </div>
            </section>

             <GalleryPage/>
        
        </>

       
    )
}