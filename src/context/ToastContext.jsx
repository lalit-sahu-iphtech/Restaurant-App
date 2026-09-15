import { useCallback, useContext, useState,createContext } from "react";

//Ek empty context banaya. Isse globally toast data access kar sakte hain bina props drilling ke
const ToastContext = createContext();

//children - jo bhi iske andar wrap krega
//toasts - Array jisme sare active toasts honge
// tost ka str - {id, msg, type, duration}
export function ToastProvider({children}){
    const[toasts, setToasts] = useState([]);

    //Add Toast
    //useCallback kyu? — Har render pe naya function na bane, sirf ek baar bane.
    const showToast = useCallback((message, type = "success", duration = 3000) =>{
        const id = Date.now() + Math.random(); // make unique ID
        const newToast = {id, message, type, duration}; // new toast obj
        setToasts((prev) => [...prev,  newToast]); // old toast me new toast add

        //Auto Dismiss
        setTimeout(()=>{
            setToasts((prev) => prev.filter((t) => t.id !== id));
        }, duration);
        return id;
    }, []);
      
    // remove Toast manually
    const removeToast = useCallback((id)=>{
        setToasts((prev) => prev.filter((t) => t.id !== id));
    },[]);

    const success = useCallback((msg, dur)=>showToast(msg, "success", dur, [showToast]));
    const error = useCallback((msg, dur)=> showToast(msg, "error", dur), [showToast]);
    const warning = useCallback((msg, dur) => showToast(msg, "warning", dur), [showToast]);
    const info = useCallback((msg, dur)=> showToast(msg, "info", dur), [showToast]);

    return(
        <ToastContext.Provider value = {{toasts, showToast, removeToast, success, error, warning, info}}>
            {children}
        </ToastContext.Provider>
    )
}

// sari value context me provide kar di, jo bhi children ke andar hai wo in sab ko access kar sakta hai

// useToast - custom hook
// useContext - context consume karne ke liye
//saftey check - agar koi tost provider ke bahar use kare to error thorw kare
export function useToast(){

    const context = useContext(ToastContext);

    if(!context){
        throw new Error("useToast must be used within a ToastProvider");
    }
    return context;
}