import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { findIndex } from "lodash";

const Product = props => {

	const { cart } = useContext(CartContext);

	//  Check if item is in the cart
	const inCart = findIndex(cart, { id: props.product.id }) !== -1;

    return (
        <div className="product">
            <img
                src={props.product.image}
                alt={`${props.product.title} book`}
            />

            <h1 className="title">{props.product.title}</h1>

            <p className="price">${props.product.price}</p>

            <button onClick={() => props.addItem(props.product)}>
                {
					inCart ? "Added to cart" : "Add to cart"
				}
            </button>
        </div>
    );
};

export default Product;
