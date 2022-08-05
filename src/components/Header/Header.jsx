import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

function Header() {
    return (      
        <nav>
            <ul className='navbar-list'>
                <li>
                    <Link className='link' to='/'>
                        <p className='logo'>rBooks</p>
                    </Link>
                </li>
                <li>
                    <Link className='link' to='/find'>
                        <p>Find Book</p>
                    </Link>
                </li>
                <li>
                    <Link className='link' to='/library'>
                        <p>See library</p>
                    </Link>
                </li>
            </ul>
        </nav>

    );
}

export default Header;