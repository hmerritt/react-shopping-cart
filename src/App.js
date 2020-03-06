import React, { useState } from "react";
import { Route } from "react-router-dom";
import { useLocalStorage } from "./hooks/useLocalStorage";
import data from "./data";
import { findIndex } from "lodash";

//  Contexts
import { ProductContext } from "./contexts/ProductContext";
import { CartContext } from "./contexts/CartContext";

//  Components
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
    const [products] = useState(data);
	//const [cart, setCart] = useState([]);
    const [cart, setCart] = useLocalStorage("shoppingCart", []);

    const addItem = item => {
		if (findIndex(cart, { id: item.id }) === -1) {
        	setCart([...cart, item]);
		}
    };

	const removeItem = itemId => {
		setCart(cart.filter((arrItem, key) => arrItem.id !== itemId));
	}

    return (
        <div className="App">
            <ProductContext.Provider value={{ products, addItem, removeItem }}>
                <CartContext.Provider value={{ cart }}>
                    <Navigation />

                    {/* Routes */}
                    <Route exact path="/">
                        <Products />
                    </Route>

                    <Route path="/cart">
                        <ShoppingCart />
                    </Route>
                </CartContext.Provider>
            </ProductContext.Provider>
        </div>
    );
}

export default App;
