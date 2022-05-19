import React from "react";
import { Link,  } from "react-router-dom";
import Cart from "./Cart";
import "../Styles/Header.css"

const Header = () => {
    return (
        <nav className="navBar">
            <h3><Link to="/shopping-cart" className="headerLinks">Home</Link></h3>
            <ul className="links">
                <li><Link to="/shopping-cart/shop" className="headerLinks">Shop</Link ></li>
                <li><Cart/></li>
            </ul>
        </nav>
    )
}

export default Header