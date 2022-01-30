import React, { useContext } from "react"
import PropTypes from "prop-types"
import { AppContext } from "../AppContext"
import useHover from "../hooks/useHover"

function CartItem({ item }) {
    const [isHovered, ref] = useHover(false)
    const { removePhotoFromCart } = useContext(AppContext)
    const removeBtnClass = isHovered ? "ri-delete-bin-fill" : "ri-delete-bin-line"

    return (
        <div className="cart-item">
            <i
                className={removeBtnClass}
                ref={ref}
                onClick={() => removePhotoFromCart(item)}></i>
            <img src={item.url} width="130px" alt="" />
            <p>$5.99</p>
        </div>
    )
}

CartItem.propTypes = {
    item: PropTypes.shape({
        url: PropTypes.string.isRequired
    })
}

export default CartItem