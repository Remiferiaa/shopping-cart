import React, { useState } from "react"


export const MyCart = React.createContext(null)


const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [count, setCount] = useState(1)
    

    const addCart = (item) => {
        let name = item.name
        let id = item.id
        let pic = item.image
        let cost = parseInt(item.fpCost) + 10
        let total = cost * count
        if ((cart.find(element => element.id === id)) === undefined) {
            setCart(cart => [...cart, { name, id, pic, cost, count, total }])
        } else {
            let newArray = cart.map(item => {
                if (item.id === id) {
                    return { ...item, count: parseInt(item.count) + 1, total: (parseInt(item.count) + 1) * cost };
                }
                return item
            })
            setCart(newArray)
        }
    }

    const changeQuant = (e, id) => {
        let newArray = cart.map(item => {
            if(item.id === id) {
                return {...item, count: e.target.value, total: parseInt(e.target.value) * item.cost}
            }
            return item
        })
        let filter = newArray.filter(item => item.count > 0)
        setCart(filter)
    }

    const cartRemove = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    const cartTotal = () => {
        let sum = 0
        for (let i = 0; i <= cart.length - 1; i++) {
            sum += cart[i].total
        }
        return sum
    }

    const reset = () => {
        setCart([])
    }

    const methods = {
        cart,
        addCart,
        changeQuant,
        cartRemove,
        cartTotal,
        reset
    }

    return (
        <MyCart.Provider value={methods}>
            {children}
        </MyCart.Provider>
    )
}

export default CartProvider

