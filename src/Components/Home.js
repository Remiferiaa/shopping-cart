import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Home.css"

const Home = () => {
    return (
        <div className="homePage">        
            <h1 className="homeTitle">A Place to get some spiritual companions for your Elden Ring Journey</h1>
            <button className="homeButton"><Link to="/shop" className="homeShopLink">More Info</Link></button>
        </div>

    )
}

export default Home