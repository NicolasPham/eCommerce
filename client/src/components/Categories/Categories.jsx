import React from 'react'
import "./categories.scss";
import Cat from './Cat'

import {categories} from '../../constant/categories.js'

const Categories = () => {
  return (
    <div className='categories flexRow'>
        <div className="left flexCol">
            <Cat item={categories[0]}  />
            <Cat item={categories[1]}  />
        </div>
        <div className="center">
            <Cat item={categories[2]}  />
        </div>
        <div className="right flexCol">
            <div className="top flexRow">
                <Cat item={categories[3]}  />
                <Cat item={categories[4]} />
            </div>
            <div className="bottom">
                <Cat item={categories[5]} />
            </div>

        </div>
    </div>
  )
}

export default Categories