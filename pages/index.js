import React from 'react';
import Home from "../components/Home.jsx"
import { Provider } from "react-redux"
import store from "../store"

const App = () => {
    return (
        <React.Fragment>
            <Provider store={store}>
                <Home />
            </Provider>    
        </React.Fragment>
    )
}

export default App