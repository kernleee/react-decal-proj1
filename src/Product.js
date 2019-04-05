import React from "react";

const Product = props => {

    var limit = parseInt(props.product.stock)
    var cart = 0

    function onClick() {
        if (limit <= 0) {
            alert("This item is out of stock!")

        } 
        else if (cart < limit) {
            cart += 1
            alert("There are " + cart + " " + props.product.name + " in your cart!")
        }
        else if (cart >= limit) {
            alert("There are too many " + props.product.name + "s in your cart!")
        }
    }

    function renderCard() {
        return(
    <div class="ui cards">
        <div class="card">
            <div class="content">
                <div class="header">{props.product.name}</div>
                    <div class="description">
                        Price: ${props.product.cost}
                    </div>
                </div>
            <div class="ui bottom attached button" onClick={() => props.onAddToCart(props.product)}>
                <i class="add icon"></i>
                    Add to Cart
            </div>
        </div>
    </div>)
    }

    return renderCard();
}

export default Product;