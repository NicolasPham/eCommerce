import React from 'react'
import Card from '../Card/Card';
import "./list.scss"

import {data} from '../../constant/featuredData.js'

const List = () => {
  return (
    <div className='list flexRow'>
        {data.map((item, index) => (
            <Card item={item} key={index} />
        ))}
    </div>
  )
}

export default List