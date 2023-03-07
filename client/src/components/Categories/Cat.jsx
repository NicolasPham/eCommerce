import React from 'react'
import './categories.scss';

const Cat = ({item}) => {
  return (
    <div className='cat flexRow'>
        <img src={item.url} alt="" />
        <button>{item.title}</button>
    </div>
  )
}

export default Cat