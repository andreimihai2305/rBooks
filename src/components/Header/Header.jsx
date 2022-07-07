import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';

function Header() {
    return (      
        <nav>
            <ul className='navbar-list'>
                <li>
                    <Link className='link' to='/'>
                        <h1 className='logo'>rBooks</h1>
                    </Link>
                </li>
                <li>
                    <Link className='link' to='add-book'>
                        <p>Add Book</p>
                    </Link>
                </li>
                <li>
                    <Link className='link' to='book-list'>
                        <p>See Books List</p>
                    </Link>
                </li>
            </ul>
        </nav>

    );
}

export default Header;