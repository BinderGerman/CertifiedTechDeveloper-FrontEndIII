import React from "react";
import Blog from "./Blog";
import Vlog from "./Vlog";
import { Route, Switch, Link } from 'react-router-dom';
import NotFound from "./NotFound";


const Main = ()  => {
    return (
        
        <div>
            <h1>Main</h1>
            <h2>Vlog</h2>
            <ul>
                <li key='R1-A1V'>
                    <Link to='main/vlog/A1V/R1-A1V'>
                        Recurso uno del artículo para video
                    </Link>
                </li>
                <li key='R2-A1V'>
                    <Link to='main/vlog/A1V/R2-A1V'>
                        Recurso dos del artículo para video
                    </Link>
                </li>
                <li>
                    <Link to='/main/brokenlink'>
                        Recurso inexistente para video
                    </Link>
                </li>
            </ul>

            <h2>Blog</h2>
            <ul>
                <li key='R1-A1B'>
                    <Link to='main/blog/A1B/R1-A1B'>
                        recurso uno del artículo para blog
                    </Link>
                </li>
                <li key='R2-A1B'>
                    <Link to='main/blog/A1B/R2-A1B'>
                        recurso dos del artículo para blog
                    </Link>
                </li>
            </ul>
            <hr />
            <Switch>
                <Route exact path='/main/vlog/:id/:resourceId'><Vlog /></Route>
                <Route exact path='/main/blog/:id/:resourceId'><Blog /></Route>
                <Route path='/main/*'><NotFound /></Route>
            </Switch>
        </div>
    );
}; 

export default Main;