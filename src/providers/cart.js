import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Load cart from localStorage on mount
    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(savedCart);
    }, []);

    // Save cart to localStorage whenever it updates
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);


    // Increment product by qty of 1
    const incrementQty = (id) => {
        setCart((prevCart) =>
          prevCart
            .map((item) =>
              item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
            .filter((item) => item.quantity > 0)
        );
    };

    // Decrement product by qty of 1
    const decrementQty = (id) => {
        setCart((prevCart) =>
          prevCart
            .map((item) =>
              item.id === id ? { ...item, quantity: item.quantity - 1 } : item
            )
            .filter((item) => item.quantity > 0)
        );
      };

    // Add qty of x of product
    const addQtyToCart = (product, qty) => {
        setCart((prevCart) => {
          const itemExists = prevCart.find((item) => item.id === product.id);
          if (itemExists) {
            return prevCart.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + qty } : item
            );
          }
          return [...prevCart, { ...product, quantity: qty }];
        });
      };

    // Overwrite qty of product
    const updateQty = (id, qty) => {
        setCart((prevCart) => 
            prevCart 
                .map((item) => 
                    item.id === id ? { ...item, quantity: qty} : item
                )
        );
    }

    // Remove product from cart
    const removeFromCart = (id) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };

    return (
        <CartContext.Provider value={{ cart, incrementQty, decrementQty,  addQtyToCart, updateQty, removeFromCart, }}>
            {children}
        </CartContext.Provider>
    );
};