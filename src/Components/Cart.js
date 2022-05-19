import React, { useContext, useState } from "react";
import { Link } from "react-router-dom"
import { MyCart } from "../Constant/Provider";
import "../Styles/Cart.css"


const Cart = () => {
    const { cart, changeQuant, cartTotal, reset, cartRemove } = useContext(MyCart)
    const [showCart, setShow] = useState(false)

    const sideToggle = () => {
        setShow((showCart === true ? false : true))
    }

    const checkout = () => {
        setShow(false)
        reset()
    }

    const CartView = () => {
        let length = cart.length
        return (
            <div className={`sideBar ${showCart === true ? "active" : ""}`}>
                <div className="cart">
                    {
                        length > 0 ? <div>
                            {cart.map((item) => (
                                <div key={item.id} className="cartItem">
                                    <img src={item.pic} alt={item.name} className="cartImg"></img>
                                    <div className="cartDetail">
                                        <p className="cartText">{item.name}</p>
                                        <label htmlFor="quantity">Quantity </label>
                                        <input type="number" value={item.count} onChange={e => changeQuant(e, item.id)} step="1" className="quantInput"></input>
                                        <p className="cartText">Total ${item.total}</p>
                                        <button className="removeItem" onClick={() => cartRemove(item.id)}>Remove</button>
                                    </div>

                                </div>
                            )
                            )}
                        </div> :
                            <div>Cart is Empty</div>
                    }
                    <div className="sideBtm">
                    <p className="cartTotal">Subtotal = ${cartTotal()}</p>
                    <button onClick={checkout} className="checkOut"><Link to="/shopping-cart" className="checkOutLink">Proceed to Checkout</Link></button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <p className="headerCart" onClick={sideToggle}>Cart</p>
            {CartView()}
            <div onClick={sideToggle} className={`overlay ${showCart === true ? "active" : ""}`}></div>
        </div>
    )
}


export default Cart