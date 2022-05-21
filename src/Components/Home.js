import React from "react";
import { Link } from "react-router-dom";
import myStyles from "../Styles/Home.module.css"

const Home = () => {
    return (
        <div className={myStyles.homePage}>        
            <h1 className={myStyles.homeTitle}>A Place to get some spiritual companions for your Elden Ring Journey</h1>
            <button className={myStyles.homeButton}><Link to="/shop" className={myStyles.homeShopLink}>More Info</Link></button>
        </div>
    )
}

export default Home