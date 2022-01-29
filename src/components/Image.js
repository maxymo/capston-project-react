import React, { useState, useContext } from "react"
import { AppContext } from "../AppContext"
import PropTypes from "prop-types"

function Image({ className, img }) {
    const { toggleFavorite, addPhotoToCart, isItemInCart, removePhotoFromCart } = useContext(AppContext)
    const [hovered, setHovered] = useState(false)

    function heartIcon() {
        if (img.isFavorite) {
            return <i className="ri-heart-fill favorite"
                onClick={() => toggleFavorite(img.id)}
            ></i>
        }
        else if (hovered) {
            return <i className="ri-heart-line favorite"
                onClick={() => toggleFavorite(img.id)}
            ></i>
        }
    }

    function cartIcon() {
        if (isItemInCart(img)) {
            return <i className="ri-shopping-cart-fill cart"
                onClick={() => removePhotoFromCart(img)}></i>
        } else if (hovered) {
            return <i className="ri-add-circle-line cart"
                onClick={() => addPhotoToCart(img)}></i>
        }
    }

    return (
        <div
            className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {heartIcon()}
            {cartIcon()}

            <img src={img.url} className="image-grid" alt="" />
        </div>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        isFavorite: PropTypes.bool
    })
}

export default Image