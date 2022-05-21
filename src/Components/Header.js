import React from "react";
import { Link,  } from "react-router-dom";
import Cart from "./Cart";
import myStyles from "../Styles/Header.module.css"

const Header = () => {
    return (
        <nav className={myStyles.navBar}>
            <h3 className={myStyles.headers}><Link to="/" className={myStyles.headerLinks}>Home</Link></h3>
            <ul className={myStyles.links}>
                <li className={myStyles.headers}><Link to="/shop" className={myStyles.headerLinks}>Shop</Link ></li>
                <li className={myStyles.headers}><Cart/></li>
            </ul>
        </nav>
    )
}

export default Header