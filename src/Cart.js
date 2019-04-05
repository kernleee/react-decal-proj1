import React from "react";
import "./styles/cart.css";
import Product from "./Product.js"
import ProductData from "./Data.js"
import Receipt from "./Receipt.jsx"

class Cart extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          cartItems: []
        }
  }

  handleAddToCart(product) {
    let items = [...this.state.cartItems];
    for (var i = 0; i < items.length; i++) {
        if (items[i].productName === product.name) {
            items[i].count += 1
            this.setState({cartItems: items})
            return
        }
    }
    items.push({productName: product.name, price: product.cost, count: 1})
    this.setState({cartItems: items})
  }

  render() {
    return (
        <div className="page-content">
            <h3>{ProductData.products.map(product => <Product product={product} onAddToCart={this.handleAddToCart.bind(this)}/>)}</h3>
            <Receipt items={this.state.cartItems}/>
        </div>
    );
  }

}

export default Cart;
