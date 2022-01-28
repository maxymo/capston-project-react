import React, { useState } from "react"

function Image({ className, img }) {
    const [hovered, setHovered] = useState(false)

    console.log(hovered)
    return (
        <div
            className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}>
            <img src={img} className="image-grid" alt="" />
        </div>
    )
}

export default Image