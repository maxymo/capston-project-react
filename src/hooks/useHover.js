import React, { useState, useEffect, useRef } from "react"

function useHover() {
    // Challenge:
    // Keep track of hover state in this hook
    const [isHovered, setIsHovered] = useState(false)
    const ref = useRef(null)

    function enter() {
        setIsHovered(true)
    }

    function leave() {
        setIsHovered(false)
    }

    useEffect(() => {
        ref.current.addEventListener("mouseenter", enter)
        ref.current.addEventListener("mouseleave", leave)

        return function cleanup() {
            ref.current.removeEventListener("mouseenter")
            ref.current.removeEventListener("mouseleave")
        }
    }, [])

    return [isHovered, ref]
}

export default useHover