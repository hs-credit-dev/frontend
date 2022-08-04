import HomeHeader from '../components/Headers/HomeHeader'
// import Book from '../assets/images/book.png'
// import BottomLeft from '../assets/svg/home-left-bottom.svg'
// import BottomRight from '../assets/svg/home-bottom-right.svg'
import { Link } from 'react-router-dom'
import TopNavBar from '../components/NavBars/TopNavBar'

const Home = () => {
    return (
        <div className='home-container'>
            <TopNavBar />
            <HomeHeader />

            {/* <img className='book' src={Book} alt='book' />
            <h2 className='how-works'>How it Works</h2>
            <p className='how-desc'>Opt out of standardized testing while showing off to colleges and universities</p>
                <Link to="/credit-details" className=''>
                    <img className='credit-thumbnail'src={`${process.env.PUBLIC_URL}/images/credit1.gif`} alt="credit1"/>
                </Link>
                <br />
                <Link to="/credit-details" className=''>
                    <img className='credit-thumbnail'src={`${process.env.PUBLIC_URL}/images/credit2.gif`} alt="credit2"/>
                </Link>
                <br />
                <Link to="/credit-details" className=''>
                    <img className='credit-thumbnail'src={`${process.env.PUBLIC_URL}/images/credit3.gif`} alt="credit3"/>
                </Link>
            <img src={BottomLeft} alt='Bottom Left' />
            <img src={BottomRight} alt='Bottom Right' /> */}

        </div>
    )
}

export default Home