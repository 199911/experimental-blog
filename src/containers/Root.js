import React from 'react'
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom'
import FrontPage from '../pages/FrontPage';
import ArticlePage from '../pages/ArticlePage';

const Root = () => (
    <Router>
        <div>
            <Route exact path="/react-blog/" component={FrontPage}/>
            <Route exact path="/react-blog/:postSlug" component={ArticlePage}/>
        </div>
    </Router>
)


export default Root
