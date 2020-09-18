import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <h1 className="header-text">Sudoku <span>pm</span></h1>
            <ul>
                <li>Dark mode <input type="checkbox" name="theme" id="theme"/></li>
            </ul>
        </nav>
    )
}

export default Navbar
