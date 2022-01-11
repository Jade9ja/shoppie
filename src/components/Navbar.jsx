import { Search, ShoppingCartOutlined } from '@mui/icons-material'
import { Badge } from '@mui/material'
import React from 'react'
function Navbar() {
    return (
        <div className='navbar'>
            <div className='wrapper'>
                <div className='left'>
                    <div className="search-box">
                        <input className='top-search-bar'></input>
                        <Search/>
                    </div>
                </div>
                <div className="center">
                    <div className="title">
                        SHOPPIE.
                    </div>
                </div>
                <div className="right">
                    <div className="menu-item">
                        REGISTER
                    </div>
                    <div className="menu-item">
                        SIGN-IN
                    </div>
                    <div className="menu-item" >
                    <Badge badgeContent={4} color="primary" sx={{'& .MuiBadge-badge' : {
                        backgroundColor: '#ff6090'
                    }}} >
                        <ShoppingCartOutlined/>
                    </Badge>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
