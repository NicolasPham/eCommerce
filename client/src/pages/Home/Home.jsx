import React from 'react'
import Slider from '../../components/Slider/Slider'
import Feature from '../../components/Feature/Feature'
import Categories from '../../components/Categories/Categories'
import Subcribe from '../../components/Subcribe/Subcribe'


const Home = () => {
    return (
        <main className='home'>
            <Slider />
            <Feature type="Featured" />
            <Categories />
            <Feature type="Trending" />
            <Subcribe />
        </main>
    )
}

export default Home