import React, { useState } from 'react'
import {Link} from 'react-router-dom';
import "./card.scss"

const Card = ({item}) => {
    const [imgHover, setImgHover] = useState(true)

    return (
        <div className='card'>
            <Link className='link' to="/product/1">
                <div className="card_wrapper">
                    <img src={imgHover ? item.img : item.img2} alt="img1" onMouseEnter={() => {setImgHover(!imgHover)}} onMouseLeave={() => {setImgHover(!imgHover)}} />
                    <div className="desc">
                        <p>{item?.attributes.title}</p>
                        <div className="price flexRow">
                            <span className="old"><strike>${item?.attributes.oldPrice || Math.ceil(item?.attributes.price + 20)}</strike></span>
                            <span className="new">${item?.attributes.price}</span>
                        </div>
                    </div>

                    {item?.attributes.isNew && <p className="newSeason">New Season</p>}
                </div>
            </Link>
        </div>
    )
}

export default Card
