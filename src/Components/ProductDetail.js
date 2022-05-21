import React, { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { MyCart } from "../Constant/Provider";
import myStyles from "../Styles/ProductDetail.module.css"

const ProductDetail = () => {
    const { addCart } = useContext(MyCart)
    let id = useParams()
    const [item, setItem] = useState({})

    useEffect(() => {
        const fetchProd = async () => {
            const response = await fetch(`https://eldenring.fanapis.com/api/spirits/${id.id}`)
            const data = await response.json()
            setItem(data.data)
        }
        fetchProd()
    }, [id])

    return (
        <div className={myStyles.product} key={item.id} >
            <h1 className={myStyles.itemName}>{item.name}</h1>
            <div className={myStyles.prodInfo}>
                <img src={item.image} alt={item.name} className={myStyles.prodImg}></img>
                <div className={myStyles.prodDescrip}>
                    <p className={myStyles.descrip}>{item.description}</p>
                    <p>Price: ${parseInt(item.fpCost) + 10}</p>
                    <button type="button" className={myStyles.addCart} onClick={() => addCart(item)}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail