// import galleryImg1 from "../../assets/img/gallery1.jpg";
// import galleryImg2 from "../../assets/img/gallery4.jpg";
// import galleryImg3 from "../../assets/img/gallery7.jpg";
// import galleryImg4 from "../../assets/img/gallery2.jpg";
// import galleryImg5 from "../../assets/img/gallery5.jpg";
// import galleryImg6 from "../../assets/img/gallery8.jpg";
// import galleryImg7 from "../../assets/img/gallery3.jpg";
// import galleryImg8 from "../../assets/img/gallery6.jpg";
// import galleryImg9 from "../../assets/img/gallery9.jpg";

import locationBowl1 from "../../assets/img/location-bowl1.jpg";
import locationBowl2 from "../../assets/img/location-bowl2.jpg";

// import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

import "./HomePage.css"
import GalleryPage from "./GalleryPage";

export default function LocationAndGallery(){

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
                        <button>Locations &amp; Hours</button>
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