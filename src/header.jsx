import React from 'react';
import { render } from 'react-dom';
import headerStyle from './css/header.scss';

const Header = () => {
    return (
        <>
            <h1 className={headerStyle.title}>React in WebSite</h1>
        </>
    );
}

render(<Header/>, document.getElementById('header'));