import React from 'react'
import Slider from '../../components/Slider/Slider'
import Feature from '../../components/Feature/Feature'
import Categories from '../../components/Categories/Categories'


const Home = () => {
    return (
        <main className='home'>
            <Slider />
            <Feature type="Featured" />
            <Categories />
            <Feature type="Trending" />
        </main>
    )
}

export default Home