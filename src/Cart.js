import React from "react";
import "./styles/cart.css";
import Product from "./Product.js"
import ProductData from "./Data.js"

const apple = {
    name: "Apple",
    cost: 2,
    stock: 5,
}
class Cart extends React.Component {

  render() {
    return (
        <div className="page-content">
            <h3>{ProductData.products.map(product => <Product product={product}/>)}</h3>
        </div>
    );
  }

}

export default Cart;
