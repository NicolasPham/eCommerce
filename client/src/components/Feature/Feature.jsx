import React, { useState } from 'react'
import "./feature.scss"

import { data } from '../../constant/featuredData.js'
import Card from '../Card/Card.jsx'

const Feature = ({ type }) => {

    return (
        <section className='feature'>
            <div className="title flexRow">
                <h1>{type} products</h1>
                <p>Here you will find the latest and greatest fashion items from our store. Whether you're looking for a new dress, a stylish pair of shoes, or the perfect accessory to complete your look, we have something for everyone. Our featured products are carefully selected to ensure that you always look your best. Shop now and find the perfect item for any occasion!</p>
            </div>

            <div className="cards flexRow">
                {data.map(item => (
                    <Card item={item} key={item.id} />
                ))}
            </div>
        </section>
    )
}

export default Feature