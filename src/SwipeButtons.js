import React from 'react'
import './SwipeButtons.css'
import FlashOnIcon from '@material-ui/icons/FlashOn';
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarRateIcon from '@material-ui/icons/StarRate';
import CloseIcon from '@material-ui/icons/Close';
import ReplayIcon from '@material-ui/icons/Replay';
import IconButton from '@material-ui/core/IconButton';

function SwipeButtons() {
    return (
        <div className='swipeButtons'>
            <IconButton className='swipeButtons__repeat'>
                <ReplayIcon fontSize='medium' />
            </IconButton>
            <IconButton className='swipeButtons__left'>
                <CloseIcon fontSize='medium' />
            </IconButton>
            <IconButton className='swipeButtons__star'>
                <StarRateIcon fontSize='medium' />
            </IconButton>
            <IconButton className='swipeButtons__right'>
                <FavoriteIcon fontSize='medium' />
            </IconButton>
            <IconButton className='swipeButtons__lightning'>
                <FlashOnIcon fontSize='medium' />
            </IconButton>
        </div>
    )
}

export default SwipeButtons
