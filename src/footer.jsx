import React from 'react';
import { render } from 'react-dom';
import footerStyle from './css/footer.scss';

const Footer = () => {
    return (
        <>
            <p className={footerStyle.copy}>Copyright</p>
        </>
    );
}

render(<Footer/>, document.getElementById('footer'));