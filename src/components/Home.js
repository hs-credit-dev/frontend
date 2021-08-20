import HomeHeader from './Headers/HomeHeader'



import Book from '../assets/book.png'
import BottomLeft from '../assets/svg/home-left-bottom.svg'
import BottomRight from '../assets/svg/home-bottom-right.svg'
import MainNavBar from './NavBars/MainNavBar'

const Home = () => {
    return (
        <div className='home-container'>
           <MainNavBar />
            <HomeHeader />
        
            
            

            <img className='book' src={Book} alt='book'/>
            <h2 className='how-works'>How it Works</h2>
            <p className='how-desc'>Opt out of standardized testing while showing off to colleges and universities</p>
            

        </div>
    )
}

export default Home