import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { indexOf } from "lodash";

const Product = props => {

	const { cart } = useContext(CartContext);

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
					(() => {
						if (indexOf(cart, props.product) === -1) {
							return "Add to cart";
						}
						else {
							return "Added to cart";
						}
					})()
				}
            </button>
        </div>
    );
};

export default Product;
