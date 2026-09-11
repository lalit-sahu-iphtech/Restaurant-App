import { FaMinus, FaPlus, FaTimes } from "react-icons/fa";
import { baseOptions, proteinOptions, toppingOptions, mixInOptions, flavorOptions } from "./bowlOptions";
import { useEffect, useState } from "react";

import "./CustomizeModal.css"

export default function CustomizeBowlModal({isOpen, item, onClose, onAddToCart}){

    const[selectedBase, setSelectedBase] = useState(baseOptions[0].id);
    
    const[selectedProteins, setSelectedProteins] = useState([]);
    const [selectedToppings, setSelectedToppings] = useState([]);
    const [selectedMixIns, setSelectedMixIns] = useState([]);
    const [selectedFlavor, setSelectedFlavor] = useState(flavorOptions[0].id);

    const[quantity, setQuantity] = useState(1);

    //reset state when modal open
    useEffect(()=>{
        if(isOpen){
            setSelectedBase(baseOptions[0].id);
            setSelectedProteins([]);
            setSelectedToppings([]);
            setSelectedMixIns([]);
            setSelectedFlavor(flavorOptions[0].id);
            setQuantity(1);
        }
    }, [isOpen]);

    //ESC to close
    useEffect(()=>{
        const handleEsc = (e)=>{
            if(e.key === "Escape")
            onClose();
        }
        if(isOpen){
            document.addEventListener("keydown", handleEsc);
            document.body.style.overflow = "hidden"
        }
        return () =>{
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "unset";
        }
    }, [isOpen, onClose]);

    // calculate total price

    const getItemPrice = () =>{
        let price = item?.price || 0;
        selectedProteins.forEach((id)=>{
            const p = proteinOptions.find((o) => o.id === id);

            if(p) price += p.price;

        })
        return price
    }
   const totalPrice = getItemPrice() * quantity;

   const toggleProtein = (id) =>{
    setSelectedProteins((prev) =>
    prev.includes(id)?prev.filter((p) => p !== id) : [...prev,id]
    )
   }
   const toggleTopping = (id)=>{
    setSelectedToppings((prev)=>
    prev.includes(id)?prev.filter((t)=> t !== id) : [...prev, id]
    )
   }
   const toggleMixIn = (id)=>{
    setSelectedMixIns((prev)=>
    prev.includes(id)?prev.filter((m)=> m !== id) : [...prev, id]
    )
   }
const incrementQty = () => setQuantity((q)=> q+1);
const decrementQty = () => setQuantity((q) => (q > 1 ? q-1 : 1));

const handleAddToCart = () =>{
    const base = baseOptions.find((b)=> b.id === selectedBase);
    const flavor = flavorOptions.find((f)=> f.id === selectedFlavor);
    const proteinLabels = selectedProteins.map((id)=> proteinOptions.find((p) => p.id === id)?.label).filter(Boolean);
    const toppingLabels = selectedToppings.map((id) => toppingOptions.find((t) => t.id === id)?.label).filter(Boolean);
    const mixInLabels = selectedMixIns.map((id) => mixInOptions.find((m) => m.id === id)?.label).filter(Boolean);

    const customItem = {
        id: `custom-${Date.now()}`,
        name: "Build Your Own Poke Bowl",
        img: item?.img,
        base: base?.label,
        proteins: proteinLabels,
        toppings: toppingLabels,
        mixIns: mixInLabels,
        flavor: flavor?.label,
        price: getItemPrice(),
        quantity,
      };
      onAddToCart(customItem);
      onClose();

}
if(!isOpen) return null;
    return(
        <div className="cb-overlay" onClick={onClose}>
        <div className="cb-modal" onClick={(e) => e.stopPropagation()}>
  
          {/* HEADER */}
          <div className="cb-header">
            <div className="cb-header-left">
              <img src={item?.img} alt={item?.name} className="cb-header-img" />
              <div>
                <h2 className="cb-title">{item?.name || "Build Your Own Poke Bowl"}</h2>
                <p className="cb-subtitle">Extra proteins for an additional charge.</p>
              </div>
            </div>
            <button className="cb-close" onClick={onClose}>
              <FaTimes />
            </button>
          </div>
  
          {/* BODY */}
          <div className="cb-body">
  
            {/* STEP 1 - BASE */}
            <div className="cb-step">
              <span className="cb-step-label">Step 1</span>
              <h3 className="cb-step-title">Choose a Base</h3>
              <div className="cb-options">
                {baseOptions.map((opt) => (
                  <label
                    key={opt.id}
                    className={`cb-option ${selectedBase === opt.id ? "active" : ""}`}
                  >
                    <input
                      type="radio"
                      name="base"
                      checked={selectedBase === opt.id}
                      onChange={() => setSelectedBase(opt.id)}
                    />
                    <span className="cb-radio"></span>
                    <span className="cb-option-label">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>
  
            {/* STEP 2 - PROTEIN */}
            <div className="cb-step">
              <span className="cb-step-label">Step 2</span>
              <h3 className="cb-step-title">Choose a Protein</h3>
              <div className="cb-options">
                {proteinOptions.map((opt) => (
                  <label
                    key={opt.id}
                    className={`cb-option ${selectedProteins.includes(opt.id) ? "active" : ""}`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedProteins.includes(opt.id)}
                      onChange={() => toggleProtein(opt.id)}
                    />
                    <span className="cb-checkbox"></span>
                    <span className="cb-option-label">
                      {opt.label}
                      {opt.price > 0 && (
                        <span className="cb-option-price">+${opt.price}</span>
                      )}
                    </span>
                  </label>
                ))}
              </div>
            </div>
  
            {/* STEP 3 - TOPPINGS */}
            <div className="cb-step">
              <span className="cb-step-label">Step 3</span>
              <h3 className="cb-step-title">Choose Toppings</h3>
              <div className="cb-options">
                {toppingOptions.map((opt) => (
                  <label
                    key={opt.id}
                    className={`cb-option ${selectedToppings.includes(opt.id) ? "active" : ""}`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedToppings.includes(opt.id)}
                      onChange={() => toggleTopping(opt.id)}
                    />
                    <span className="cb-checkbox"></span>
                    <span className="cb-option-label">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>
  
            {/* MIX-INS */}
            <div className="cb-step">
              <h3 className="cb-step-title">Choose Your Mix-ins</h3>
              <div className="cb-options">
                {mixInOptions.map((opt) => (
                  <label
                    key={opt.id}
                    className={`cb-option ${selectedMixIns.includes(opt.id) ? "active" : ""}`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedMixIns.includes(opt.id)}
                      onChange={() => toggleMixIn(opt.id)}
                    />
                    <span className="cb-checkbox"></span>
                    <span className="cb-option-label">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>
  
            {/* FLAVOR */}
            <div className="cb-step">
              <h3 className="cb-step-title">Choose a Flavor</h3>
              <div className="cb-options">
                {flavorOptions.map((opt) => (
                  <label
                    key={opt.id}
                    className={`cb-option ${selectedFlavor === opt.id ? "active" : ""}`}
                  >
                    <input
                      type="radio"
                      name="flavor"
                      checked={selectedFlavor === opt.id}
                      onChange={() => setSelectedFlavor(opt.id)}
                    />
                    <span className="cb-radio"></span>
                    <span className="cb-option-label">{opt.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </div>
  
          {/* FOOTER */}
          <div className="cb-footer">
            <div className="cb-footer-left">
              <div className="cb-qty">
                <button
                  className="cb-qty-btn"
                  onClick={decrementQty}
                  disabled={quantity <= 1}
                >
                  <FaMinus size={10} />
                </button>
                <span className="cb-qty-value">{quantity}</span>
                <button className="cb-qty-btn" onClick={incrementQty}>
                  <FaPlus size={10} />
                </button>
              </div>
              
            </div>
  
            <button className="cb-add-btn" onClick={handleAddToCart}>
              Add to cart ${totalPrice.toFixed(2)}
            </button>
          </div>
        </div>
      </div>
    )
}