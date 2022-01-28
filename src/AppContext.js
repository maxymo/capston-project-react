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

    console.log(photos)

    return (
        <AppContext.Provider value={{ photos }}>
            {props.children}
        </AppContext.Provider>
    )
}

export { AppContextProvider, AppContext }