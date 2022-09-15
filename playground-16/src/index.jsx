import React from "react";
import { Link } from "react-router-dom";

const Home = (props) => {
    return (
        <div>
            <ul role='nav'>
                <li><Link to='/main'>Main</Link></li>
                <li><Link to='/about'>About</Link></li>
                <li><Link to='/faq'>Faq</Link></li>
            </ul>
            <hr />
            { props.children }
        </div>
    )
}

export default Home; 

const Main = () => {
    return (
        <div>
            <h1>Main</h1>
        </div>
    )
}

export default Main;