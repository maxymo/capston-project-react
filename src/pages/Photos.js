import React, { useContext } from "react"
import { AppContext } from "../AppContext"

import Image from "../components/Image"
import { getClass } from "../utils"

function Photos() {
    const { photos } = useContext(AppContext)

    const images = photos.map((image, i) => (
        <Image key={image.id} img={image} className={getClass(i)} />
    ))
    return (
        <main className="photos">
            {images}
        </main>
    )
}

export default Photos