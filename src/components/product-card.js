import React, { useState, useContext } from "react";
import { navigate, Link } from "gatsby";
import { CartContext } from "../providers/cart";

const ProductCard = (product) => {

    const { addQtyToCart } = useContext(CartContext);

    const [qty, setQty] = useState(1);

    const incrementQty = () => {
        setQty(prevQuantity => prevQuantity + 1);
      };
    
    
      const decrementQty = () => {
        setQty(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
      }

      const updateQty = (event) => {
        const value = Math.max(0, parseInt(event.target.value) || 0); // Ensure quantity is never negative
        setQty(value);
      };

      const addToAndGoToCart = (product, qty) => {
              addQtyToCart(product, qty);
              navigate('/cart');
            };

    const slug = 'product/' + product.slug;

    return (
        <div key={product.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
            <h3><Link to={slug}>{product.name}</Link></h3>
            <p>{product.price}</p>
            <button onClick={decrementQty}>-</button>
            <input 
                type="number" 
                value={qty} 
                onChange={updateQty} 
                min="0"
            />
            <button onClick={incrementQty}>+</button>
            <button onClick={() => addToAndGoToCart(product, qty)}>Add to Cart</button>
        </div>
    )
};

export default ProductCard;