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
import ToysAndBoxes from './pages/ToysAndBoxes/ToysAndBoxes.jsx'
import Haruko from './pages/character/Haruko'
import LastSeen from './pages/LastSeen'
/* import Home from './pages/Home' */

function App() {
    return (
        <div className="App">
            <Router>
                <Switch>
                    <Route exact path="/" component={ToysAndBoxes} />
                    <Route exact path="/character" component={Character} />
                    <Route exact path="/toys" component={ToysAndBoxes} />
                    <Route path="/dock" component={Dock} />
                    <Route path="/parts" component={Parts} />
                    <Route path="/last-seen" component={LastSeen} />
                    <Route path="/character/haruko" component={Haruko} />
                </Switch>
            </Router>
        </div>
    )
}

export default App
