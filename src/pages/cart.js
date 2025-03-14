import React, { useContext } from "react";
import { Link } from "gatsby";
import { CartContext } from "../providers/cart";
import Checkout from "../components/checkout";

const CartPage = props => {

    const { cart, removeFromCart, incrementQty, decrementQty } = useContext(CartContext);

    // const handleInput = (event) => {
    //     const value = Math.max(0, parseInt(event.target.value) || 0); // Ensure quantity is never negative
    //     updateQty(value);
    // };

    return (
      <div>
        <h2>Shopping Cart</h2>
        <Link to="/">Continue shopping</Link>
        {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cart.map((item) => (
              <div key={item.id} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
                <h3><Link to={item.slug}>{item.name}</Link></h3>
                <p>Price: ${item.price}</p>
                <button onClick={() => decrementQty(item.id)}>-</button>
                <p>Quantity: {item.quantity}</p>
                {/* <input 
                        type="number" 
                        // value={item.quantity} 
                        onChange={handleInput}
                        // min="1"
                    /> */}
                <button onClick={() => incrementQty(item.id)}>+</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </div>
            ))
          )}
          <Checkout {...cart} />
      </div>
    );

};

export default CartPage;