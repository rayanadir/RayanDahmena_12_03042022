import React from 'react'
import { Link } from 'react-router-dom'
import '../home/Home.scss'

const Home = () => {
    return (
        <section className='home'>
            <Link to="/user/12" className='home__link'>
                <button className='home__button'>12</button>
            </Link>
            <Link to="/user/18" className='home__link'>
                <button className='home__button'>18</button>
            </Link>
        </section>
    )
}

export default Home