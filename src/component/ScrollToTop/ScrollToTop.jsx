import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop(){
    
    const{pathname} = useLocation();

    useEffect(()=>{
        // her route change pe scroll to Top
        window.scrollTo({
            top:0,
            left:0,
            behavior:"instant",
        })
    }, [pathname]);
    return null; // ye component kuch render nhi karta
}