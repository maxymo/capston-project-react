import React, { createContext, useState, useEffect } from "react"

const AppContext = createContext("");

function AppContextProvider(props) {
    const [photos, setPhotos] = useState([])
    const [cartItems, setCartItems] = useState([])
    const apiUrl = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(images => {
                setPhotos(images)
            })
    }, [])

    function toggleFavorite(id) {
        const newPhotos = [...photos]
        const photoToChange = newPhotos.find(photo => photo.id === id)
        photoToChange.isFavorite = !photoToChange.isFavorite
        setPhotos(newPhotos)
    }

    function addPhotoToCart(newItem) {
        setCartItems(prevItems => [...prevItems, newItem])
    }

    function removePhotoFromCart(itemToRemove) {
        setCartItems(prevItems => prevItems.filter(item => item.id !== itemToRemove.id))
    }

    function isItemInCart(item) {
        return cartItems.some(cartItem => cartItem.id === item.id)
    }

    function calculateTotal() {
        return cartItems.length * 5.99
    }

    function placeOrder() {
        console.log("Order placed!")
        setCartItems([])
    }

    return (
        <AppContext.Provider value={{
            photos,
            toggleFavorite,
            cartItems,
            addPhotoToCart,
            isItemInCart,
            removePhotoFromCart,
            calculateTotal,
            placeOrder
        }}>
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContextProvider, AppContext }