import React from 'react'

import './BlizzardBar.css'

function BlizzardBar() {

    return (
        <div className='blizzard-bar'>
            <ul className="blizzard-bar__list">
                <li>Logo</li>
                <li>GAMES</li>
                <li>SHOP</li>
                <li>NEWS</li>
                <li>ESPORTS</li>
            </ul>
            <ul className="blizzard-bar__login">
                <li>Support</li>
                <li>My Account</li>
            </ul>

        </div>
    )
}

export default BlizzardBar