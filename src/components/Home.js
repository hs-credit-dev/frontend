import HomeHeader from './Headers/HomeHeader'

import LandNavBar from './NavBars/LandNavBar'

import Book from '../assets/book.png'
import BottomLeft from '../assets/svg/home-left-bottom.svg'
import BottomRight from '../assets/svg/home-bottom-right.svg'

const Home = () => {
    return (
        <div className='home-container'>
            <LandNavBar />
            <HomeHeader />

            
            

            <img src={Book} alt='book'/>
            <h2>How it Works</h2>
            <p>Opt out of standardized testing while showing off to colleges and universities</p>
            <img src={BottomLeft} alt='Bottom Left'/>
            <img src={BottomRight} alt='Bottom Right'/>

        </div>
    )
}

export default Home