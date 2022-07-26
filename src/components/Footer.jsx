import React from 'react';

function Footer() {
    const d = new Date();

    return (
        <footer>
            <p>copyright {d.getFullYear()}</p>
        </footer>
    );
}
export default Footer;