import React from 'react'
import Slider from '../../components/Slider/Slider'
import Feature from '../../components/Feature/Feature'


const Home = () => {
    return (
        <main className='home'>
            <Slider />
            <Feature type="Featured" />
            <Feature type="Trending" />
        </main>
    )
}

export default Home