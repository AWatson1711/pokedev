import React from 'react';
import Nav from './Nav';

const Error404 = () => {
    return (
        <div>
            <header>
                <Nav/>
                <h1>Pokédev</h1>
            </header>
            <main>
                <h2>Page: 404</h2>
                <p>Page not found</p>
            </main>
        </div>
    );
};

export default Error404;