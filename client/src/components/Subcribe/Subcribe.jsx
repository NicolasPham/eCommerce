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

        <div className="icons flexRow">
            <AiFillFacebook className='icon'/>
            <AiOutlineTwitter className='icon'/>
            <AiFillInstagram className='icon'/>
            <BsPinterest className='icon'/>
        </div>
    </div>
  )
}

export default Subcribe
