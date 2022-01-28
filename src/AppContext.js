import React, { createContext, useState, useEffect } from "react"

const AppContext = createContext("");

function AppContextProvider(props) {
    const [photos, setPhotos] = useState([])
    const apiUrl = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(images => {
                setPhotos(images)
            })
    }, [])
    //console.log(photos)
    function toggleFavorite(id) {
        const newPhotos = [...photos]
        const photoToChange = newPhotos.find(photo => photo.id === id)
        photoToChange.isFavorite = !photoToChange.isFavorite
        setPhotos(newPhotos)
        console.log("toggleFavorite called for id=" + id)
    }

    return (
        <AppContext.Provider value={{ photos, toggleFavorite }}>
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContextProvider, AppContext }