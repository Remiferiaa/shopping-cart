import React, { useState, useEffect, useContext } from "react"
import { useParams } from "react-router-dom"
import { MyCart } from "../Constant/Provider";
import "../Styles/ProductDetail.css"

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
        <div className="product" key={item.id} >
            <h1 className="itemName">{item.name}</h1>
            <div className="prodInfo">
                <img src={item.image} alt={item.name} className="prodImg"></img>
                <div className="prodDescrip">
                    <p className="descrip">{item.description}</p>
                    <p>Price: ${parseInt(item.fpCost) + 10}</p>
                    <button type="button" className="addCart" onClick={() => addCart(item)}>Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetail