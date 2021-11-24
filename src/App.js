/**
 * Character pages.
 * @param void num The first number.
 * @returns The sum of the two numbers.
 */
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import Character from './pages/character/Character'
import Dock from './pages/Dock'
import Parts from './pages/Parts'

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={Character} />
                    <Route path="/dock" component={Dock} />
                    <Route path="/parts" component={Parts} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
