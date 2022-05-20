import React from "react";
import { Link,  } from "react-router-dom";
import Cart from "./Cart";
import "../Styles/Header.css"

const Header = () => {
    return (
        <nav className="navBar">
            <h3 className="headers"><Link to="/" className="headerLinks">Home</Link></h3>
            <ul className="links">
                <li className="headers"><Link to="/shop" className="headerLinks">Shop</Link ></li>
                <li className="headers"><Cart/></li>
            </ul>
        </nav>
    )
}

export default Header