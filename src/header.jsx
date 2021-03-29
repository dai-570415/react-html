import React from 'react';
import { render } from 'react-dom';

const Header = () => {
    return (
        <>
            <h1>WebSite in React</h1>
        </>
    );
}

render(<Header/>, document.getElementById('header'));