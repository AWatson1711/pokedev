import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home Page</Link></li>
                <li><Link to="/Pokemon">Pokemon</Link></li>
                <li><Link to="/Game">Game</Link></li>
            </ul>
        </nav>
    );
};

export default Nav;