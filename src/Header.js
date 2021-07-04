import React from 'react';

import heartLogo from './heartLogo.svg'
import './Header.css'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';
import ChatIcon from '@material-ui/icons/Chat';
function Header() {
    return (
        <div className='header'>
            <IconButton>
                <AccountCircleIcon fontSize='large' className='header__icon' />
            </IconButton>
            <IconButton>
                <img src={heartLogo} alt="" className='header__logo' />
            </IconButton>
            <IconButton>
                <ChatIcon className='header__icon' fontSize='large' />
            </IconButton>

        </div>
    )
}

export default Header
