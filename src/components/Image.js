import React, { useState, useContext } from "react"
import { AppContext } from "../AppContext"

function Image({ className, img }) {
    const { toggleFavorite } = useContext(AppContext)
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
    const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>

    return (
        <div
            className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {heartIcon()}
            {cartIcon}

            <img src={img.url} className="image-grid" alt="" />
        </div>
    )
}

export default Image