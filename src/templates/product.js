import React, { useState, useContext } from "react";
import { navigate } from "gatsby";
import { CartContext } from "../providers/cart";

const ProductPage = props => {
    const { product } = props.pageContext;
    const { addQtyToCart } = useContext(CartContext);

    // @todo create add to cart component
    const [qty, setQty] = useState(1);
    const incrementQty = () => { setQty(qty + 1); };
    const decrementQty = () => { setQty(qty - 1); };
    const updateQty = (event) => {
        const value = Math.max(0, parseInt(event.target.value) || 0);
        setQty(value);
      };

      const addToAndGoToCart = (product, qty) => {
        addQtyToCart(product, qty);
        navigate('/cart');
      };

    return(
        <div key={product.id}>
            <h3>{product.name}</h3>
            <div>{product.price}</div>
            <div>
                <button onClick={decrementQty}>-</button>
                <input 
                    type="number" 
                    value={qty} 
                    onChange={updateQty} 
                    min="1"
                />
                <button onClick={incrementQty}>+</button>
                <button onClick={() => addToAndGoToCart(product, qty)}>Add to Cart</button>
            </div>

            {/* <div>{JSON.stringify(product)}</div> */}
        </div>
    )
}

export default ProductPage;