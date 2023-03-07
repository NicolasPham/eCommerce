import React from 'react'
import "./subcribe.scss"

import {AiFillFacebook, AiOutlineTwitter, AiFillInstagram} from 'react-icons/ai'
import {BsPinterest} from 'react-icons/bs'

const Subcribe = () => {
  return (
    <div className='subcribe flexRow'>
        <span>Don't want to miss our deal?</span>

        <form >
            <input type="text" placeholder='Enter your email' />
            <button>Subcribe</button>
        </form>

        <div className="icons">
            <AiFillFacebook />
            <AiOutlineTwitter />
            <AiFillInstagram />
            <BsPinterest />
        </div>
    </div>
  )
}

export default Subcribe
