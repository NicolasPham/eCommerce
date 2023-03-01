import React from 'react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { navItem } from '../../constant'


const Navbar = () => {
    return (
        <nav>
            <div className="wrapper">
                <div className="left">
                    <div className="item">
                        <img src="/img/en.png" alt="en" />
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    ${for (let item in navItem) {
                        
                    }}
                </div>

                <div className="center"></div>

                <div className="right"></div>
            </div>
        </nav>
    )
}

export default Navbar