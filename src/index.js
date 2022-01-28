import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"

import App from "./App"
import { AppContextProvider } from "./AppContext"

ReactDOM.render(
    <AppContextProvider>
        <Router>
            <App />
        </Router>
    </AppContextProvider>,
    document.getElementById("root"))
