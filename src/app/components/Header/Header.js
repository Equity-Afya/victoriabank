import React from 'react'
import './Header.css'
import Settings
 from '../settings/Settings'
const Header = () => {
    return (
        <header className='header'>
            <div className='header-left'>
                <img className='header-logo' src="/assets/images/logo.svg" />
            </div>
            <div className='header-right'>
                <div className="icon-container">
                    <img src="/assets/images/message-icon.svg" />
                </div>
                <div className="icon-container">
                    <Settings/>
                </div>
                <div className="icon-container">
                    <img src="/assets/images/notification-icon.svg" />
                </div>
                <span className="username">Username</span>
                <div className="profile-image">
                    <img className="profile-image" src="/assets/images/profile-image.png" />
                </div>
            </div>
        </header>
    )
}

export default Header
