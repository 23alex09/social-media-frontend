import { Route, Routes } from "react-router-dom"

import { Login } from "./components"
import { Home } from "./container"


export const App = () => {
    return (
        <Routes>
            <Route path="login" element={ <Login /> } />
            <Route path="/*" element={ <Home /> } />
        </Routes>
    )
}
