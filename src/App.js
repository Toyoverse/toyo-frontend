/**
 * Character pages.
 * @param void num The first number.
 * @returns The sum of the two numbers.
 */
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'

import Dock from './pages/ToysAndBoxes/ToysAndBoxes'

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route path="/" component={Dock} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
