import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import myStyles from "../Styles/Shop.module.css"


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
        <div className={myStyles.shop}>
            <h1 className={myStyles.shopHeader}>Item List</h1>
            <div className={myStyles.shopList}>
                {productList.map(item => (
                    <div key={item.id} className={myStyles.shopItem}>
                        <Link to={`/shop/${item.id}`} className={myStyles.shopLinks}>
                            <img src={item.image} alt={item.name} className={myStyles.shopImg}></img>
                            <p className={myStyles.shopItemName}>{item.name}</p>
                            <p className={myStyles.shopItemPrice}>Price: ${parseInt(item.fpCost) + 10}</p>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Shop
