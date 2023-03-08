import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './navbar.scss'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import { navItemLeft, navItemRight } from '../../constant'
import Cart from '../Cart/Cart';


const Navbar = () => {

    const [openCart, setOpenCart] = useState(true);

    return (
        <nav>
            <div className="wrapper flexRow">
                <div className="left flexRow">
                    <div className="item">
                        <img src="/img/en.png" alt="en" />
                        <KeyboardArrowDownIcon />
                    </div>
                    <div className="item">
                        <span>USD</span>
                        <KeyboardArrowDownIcon />
                    </div>
                    {navItemLeft.map((item, index) => (
                        <div className="item" key={index}>
                            <Link className='link' to={`/products/${item}`}>{item}</Link>
                        </div>
                    ))}
                </div>

                <div className="center flexRow">
                    <Link className='link flexRow' to="/">
                        <img src="/img/logo.png" alt="logo" />
                        <span>NICOSTORE</span>
                    </Link>
                </div>

                <div className="right flexRow">
                    {navItemRight.map((item, index) => (
                        <div className="item">
                            <Link className='link' to={item.path}>{item.name}</Link>
                        </div>
                    ))}

                    <div className="icons flexRow">
                        <SearchIcon />
                        <PersonOutlineOutlinedIcon />
                        <FavoriteBorderOutlinedIcon />

                        <div className="cartIcon" onClick={() => setOpenCart(!openCart)}>
                            <ShoppingCartOutlinedIcon />
                            <span>0</span>
                        </div>
                    </div>
                </div>
            </div>

            {openCart && <Cart />}

        </nav>
    )
}

export default Navbar