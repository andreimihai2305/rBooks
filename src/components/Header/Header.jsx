import React from 'react';
import './Header.css';
function Header() {
    return (
        <nav>
            <ul className='navbar-list'>
                <li><h1>rBooks</h1></li>
                <li><p>Add Book</p></li>
                <li><p>See Book List</p></li>
            </ul>
        </nav>
    );
}

export default Header;