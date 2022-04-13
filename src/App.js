/**
 * Character pages.
 * @param void num The first number.
 * @returns The sum of the two numbers.
 */
/* eslint-disable */
import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    /* Redirect, */
} from 'react-router-dom'
import './App.css'

import Character from './pages/character/Character'
import Dock from './pages/Dock'
import Haruko from './pages/character/Haruko'
import LastSeen from './pages/LastSeen'
import Login from './pages/Login'
import Waiting from './pages/Waiting'
/* import Home from './pages/Home' */

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={Login}>
                        {/* <Redirect to="/items" /> */}
                    </Route>
                    <Route path="/items" component={Dock} />
                    <Route exact path="/character" component={Character} />
                    {/* <Route path="/parts" component={LastSeen} /> */}
                    <Route path="/toyos" component={Haruko} />
                    <Route path="/waiting" component={Waiting} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
