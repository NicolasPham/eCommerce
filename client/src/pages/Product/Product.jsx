import React, { useState } from 'react'
import "./product.scss"

import { BiCartAdd } from 'react-icons/bi'
import { FaHeart, FaRegHeart, FaBalanceScaleLeft } from 'react-icons/fa'

const Product = () => {

    const [selectedImg, setSelectedImg] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [wishList, setWishList] = useState(false);

    const imagesData = [
        "https://images.unsplash.com/photo-1504593811423-6dd665756598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
        "https://images.unsplash.com/photo-1514222788835-3a1a1d5b32f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
    ]

    //function for minus quantity:
    const handleMinus = (e) => {
        e.preventDefault();
        if (quantity > 1) {
            setQuantity((prev) => prev - 1)
        }
    }

    const handleAdd = (e) => {
        e.preventDefault();
        setQuantity((prev) => prev + 1)
    }

    return (
        <main className='product flexRow'>
            <div className="left flexRow">
                <div className="images flexCol">
                    <img src={imagesData[0]} alt="" onClick={() => setSelectedImg(0)} />
                    <img src={imagesData[1]} alt="" onClick={() => setSelectedImg(1)} />
                </div>
                <div className="mainImg">
                    <img src={imagesData[selectedImg]} alt="" />
                </div>
            </div>
            <div className="right">
                <h1>Long Sleeve Graphic T-shirt</h1>
                <h2>$19.9</h2>
                <p className="desc">Some description here</p>

                <div className="quantity flexRow">
                    <button onClick={handleMinus} disabled={quantity == 0 ? true : false}>-</button>
                    <span>{quantity}</span>
                    <button onClick={handleAdd}>+</button>
                </div>

                <button className='addCart'>
                    <BiCartAdd />
                    <span>ADD TO CART</span>
                </button>

                <div className="favourite flexRow">
                    <div className="item" onClick={() => setWishList(!wishList)}>
                        {!wishList ? <FaRegHeart /> : <FaHeart />}
                        <span>ADD TO WISHLIST</span>
                    </div>
                    <div className="item">
                        <FaBalanceScaleLeft />
                        <span>ADD TO COMPARE</span>
                    </div>
                </div>

                <div className="info flexCol">
                    <p>Vendor: Polo</p>
                    <p>Product Type: T-Shirt</p>
                    <p>Tag: T-Shirt, Men, Top</p>
                </div>

                <hr />

                <div className="details flexCol">
                    <span>DESCRIPTION</span>
                    <hr />
                    <span>ADDITIONAL INFORMATION</span>
                    <hr />
                    <span>FAQ</span>
                </div>



            </div>
        </main>
    )
}

export default Product
