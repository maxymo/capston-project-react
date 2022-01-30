import React, { useContext } from "react"
import { Link } from "react-router-dom"

import { AppContext } from "../AppContext"

function Header() {
    const { cartItems } = useContext(AppContext)

    function shoppingCartIcon() {
        if (cartItems.length > 0) {
            return <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>
        } else {
            return <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
        }
    }
    return (
        <header>
            <h2><Link to="/">Pic Some</Link></h2>
            <Link to="/cart">{shoppingCartIcon()}</Link>
        </header>
    )
}

export default Header
