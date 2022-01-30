import React, { useState, useContext } from "react"
import { AppContext } from "../AppContext"
import CartItem from "../components/CartItem"

function Cart() {
    const [buttonText, setButtonText] = useState("Place Order")
    const { cartItems, calculateTotal, placeOrder } = useContext(AppContext)
    const cartItemElements = cartItems.map(item => (
        <CartItem key={item.id} item={item} />
    ))

    const total = calculateTotal().toLocaleString("en-IE", { style: "currency", currency: "EUR" })

    function placeOrderOnClicked() {
        setButtonText("Ordering")
        setTimeout(() => {
            placeOrder()
            setButtonText("Place Order")
        }
            , 3000)
    }

    const placeOrderBtn = cartItems.length > 0 ?
        <div className="order-button">
            <button onClick={placeOrderOnClicked}>{buttonText}</button>
        </div>
        : <p>You have no items in your cart</p>

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total: {total}</p>
            {placeOrderBtn}
        </main>
    )
}

export default Cart