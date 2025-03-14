import React from "react";
import { Link } from "gatsby";
// import { CartContext } from "../providers/cart";
import ProductCard from "../components/product-card";


const HomePage = (props) => {

    const { products } = props.pageContext;

    return(
        <div>
          <h1>Welcome to My Shop</h1>
          <Link to="/cart">Go to Cart</Link>
          <h2>Products</h2>
          <div>
            {products.map((product) => (
                <ProductCard {...product} />
            ))}
          </div>
        </div>

    )
}

export default HomePage;