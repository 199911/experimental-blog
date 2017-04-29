import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import FrontPage from '../pages/FrontPage';

const Root = () => (
    <Router>
        <Route exact path="/" component={FrontPage}/>
    </Router>
)

export default Root
