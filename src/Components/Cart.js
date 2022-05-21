import React, { useContext, useState } from "react";
import { Link } from "react-router-dom"
import { MyCart } from "../Constant/Provider";
import myStyle from "../Styles/Cart.module.css"


const Cart = () => {
    const { cart, changeQuant, cartTotal, reset, cartRemove } = useContext(MyCart)
    const [showCart, setShow] = useState(false)

    const sideToggle = () => {
        setShow((showCart === true ? false : true))
        console.log(showCart)
    }

    const checkout = () => {
        setShow(false)
        reset()
    }

    const CartView = () => {
        let length = cart.length
        return (
            <div className={`${showCart === true ? myStyle.sideBarAct : myStyle.sideBar}`}>
                <div className={myStyle.cart}>
                    {
                        length > 0 ? <div>
                            {cart.map((item) => (
                                <div key={item.id} className={myStyle.cartItem}>
                                    <img src={item.pic} alt={item.name} className={myStyle.cartImg}></img>
                                    <div className={myStyle.cartDetail}>
                                        <p className={myStyle.cartText}>{item.name}</p>
                                        <label htmlFor="quantity">Quantity </label>
                                        <input type="number" value={item.count} onChange={e => changeQuant(e, item.id)} step="1" className={myStyle.quantInput}></input>
                                        <p className={myStyle.cartText}>Total ${item.total}</p>
                                        <button className={myStyle.removeItem} onClick={() => cartRemove(item.id)}>Remove</button>
                                    </div>

                                </div>
                            )
                            )}
                        </div> :
                            <div className={myStyle.emptyCart}>Cart is Empty</div>
                    }
                    <div className={myStyle.sideBtm}>
                        <p className={myStyle.cartTotal}>Subtotal = ${cartTotal()}</p>
                        <button onClick={checkout} className={myStyle.checkOut}><Link to="/" className={myStyle.checkOutLink}>Proceed to Checkout</Link></button>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div>
            <p className={myStyle.headerCart} onClick={sideToggle}><span className={`${cart.length > 0 ? myStyle.cartLength : myStyle.cartLengthEmpty}`}>{cart.length > 0 ? cart.length : null}</span>Cart</p>
            {CartView()}
            <div onClick={sideToggle} className={`${showCart === true ? myStyle.overlayAct : myStyle.overlay}`}></div>
        </div>
    )
}

export default Cart