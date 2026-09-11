import React, { createContext, useContext, useState, useEffect } from 'react';

// Create Cart Context
const CartContext = createContext();

// Cart Provider Component
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cartItems');
    if (savedCart) {
      const parsedCart = JSON.parse(savedCart);
      setCartItems(parsedCart);
      updateCartCount(parsedCart);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    updateCartCount(cartItems);
  }, [cartItems]);

  // Update total cart count
  const updateCartCount = (items) => {
    const total = items.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(total);
  };
  const updateCartItem = (itemId, updatedData) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, ...updatedData } : item
      )
    );
  };
  // Add item to cart
  const addToCart = (item) => {
    const qty = item.quantity || 1;

    setCartItems(prevItems => {
        const existingItem = prevItems.find(i => i.id === item.id);

        if (existingItem) {
            return prevItems.map(i =>
                i.id === item.id
                    ? { ...i, quantity: i.quantity + qty }
                    : i
            );
        } else {
            return [...prevItems, { ...item, quantity: qty }];
        }
    });
};

  // Remove item from cart
  const removeFromCart = (itemId) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(i => i.id === itemId);
      
      if (existingItem && existingItem.quantity > 1) {
        // If quantity > 1, decrease quantity
        return prevItems.map(i =>
          i.id === itemId
            ? { ...i, quantity: i.quantity - 1 }
            : i
        );
      } else {
        // If quantity is 1, remove item completely
        return prevItems.filter(i => i.id !== itemId);
      }
    });
  };

  // Delete item completely from cart
  const deleteFromCart = (itemId) => {
    setCartItems(prevItems => prevItems.filter(i => i.id !== itemId));
  };
  

  // Clear entire cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Get total price
  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };
//  Check if item is in cart
const isInCart = (itemId) => {
  return cartItems.some((item) => item.id === itemId);
};

//  Get cart item by id
const getCartItem = (itemId) => {
  return cartItems.find((item) => item.id === itemId);
};

return (
  <CartContext.Provider value={{
    cartItems,
    cartCount,
    addToCart,
    removeFromCart,
    deleteFromCart,
    updateCartItem,
    clearCart,
    getTotalPrice,
    isInCart,        
    getCartItem,     
  }}>
    {children}
  </CartContext.Provider>
);
}

// Custom hook to use cart context
export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}