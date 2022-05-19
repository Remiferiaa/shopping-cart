import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/Shop.css"


const Shop = () => {
    const [productList, setProduct] = useState([])

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch("https://eldenring.fanapis.com/api/spirits?limit=10")
            const data = await response.json();
            setProduct(data.data)
        }
        fetchProduct()
    }, [])

    return (
        <div className="shop">
            <h1 className="shopHeader">Item List</h1>
            <div className="shopList">
                {productList.map(item => (
                    <div key={item.id} className="shopItem">
                        <Link to={`/shopping-cart/shop/${item.id}`} className="shopLinks">
                            <img src={item.image} alt={item.name} className="shopImg"></img>
                            <p className="shopItemName">{item.name}</p>
                            <p className="shopItemPrice">Price: ${parseInt(item.fpCost) + 10}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shop
