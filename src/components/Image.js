import React, { useState } from "react"

function Image({ className, img }) {
    const [hovered, setHovered] = useState(false)

    const heartIcon = hovered && <i className="ri-heart-line favorite"></i>
    const cartIcon = hovered && <i className="ri-add-circle-line cart"></i>
    return (
        <div
            className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {heartIcon}
            {cartIcon}

            <img src={img} className="image-grid" alt="" />
        </div>
    )
}

export default Image