import galleryImg1 from "../../assets/img/gallery1.jpg";
import galleryImg2 from "../../assets/img/gallery4.jpg";
import galleryImg3 from "../../assets/img/gallery7.jpg";
import galleryImg4 from "../../assets/img/gallery2.jpg";
import galleryImg5 from "../../assets/img/gallery5.jpg";
import galleryImg6 from "../../assets/img/gallery8.jpg";
import galleryImg7 from "../../assets/img/gallery3.jpg";
import galleryImg8 from "../../assets/img/gallery6.jpg";
import galleryImg9 from "../../assets/img/gallery9.jpg";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

import "./GalleryPage.css";
export default function GalleryPage(){

    return(

        <section className="follow-us">
        <div className="follow-us-container">
         <div className="follow-us-text">
             <h2>Follow us</h2>
             <p className="handle">@pokebarboston</p>
             <p className="desc">
                 To stay updated with the latest news, promotions, and offerings from
                 the poke restaurant, make sure to follow us social media accounts.
                 Don't miss out on any updates
             </p>
 
             <div className="follow-socials">
                 <a href="https://facebook.com" target="_blank" rel="noreferrer" className="social facebook">
                     <FaFacebookF />
                 </a>
                 <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social twitter">
                     <FaTwitter />
                 </a>
                 <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social instagram">
                     <FaInstagram />
                 </a>
                 <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social youtube">
                     <FaYoutube />
                 </a>
             </div>
         </div>
 
         <div className="follow-us-gallery">
             <div className="gallery-col">
                 <img src={galleryImg1} alt="poke bowl" />
                 <img src={galleryImg2} alt="poke bowl" />
                 <img src={galleryImg3} alt="poke bowl" />
             </div>
             <div className="gallery-col offset">
                 <img src={galleryImg4} alt="poke bowl" />
                 <img src={galleryImg5} alt="poke bowl" />
                 <img src={galleryImg6} alt="poke bowl" />
             </div>
             <div className="gallery-col offset-2">
                 <img src={galleryImg7} alt="poke bowl" />
                 <img src={galleryImg8} alt="poke bowl" />
                 <img src={galleryImg9} alt="poke bowl" />
 
             </div>
         </div>
     </div>
            </section>
    )
}