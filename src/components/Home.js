import HomeHeader from './Headers/HomeHeader'



import Book from '../assets/book.png'
import BottomLeft from '../assets/svg/home-left-bottom.svg'
import BottomRight from '../assets/svg/home-bottom-right.svg'

const Home = () => {
    return (
        <div className='home-container'>
           
            <HomeHeader />

            <div className='book-div'>
            <img className='book' src='https://i.imgur.com/JEDTTyf.png' alt='book'/>
            </div>
            <h2 className='how-works'>How it Works</h2>
            <p className='how-desc'> opt out of standardized testing <br/>and gain economic advantage <br/>while showing off to universities<br/> and employers</p>
        <img src="https://i.imgur.com/eYtc9sI.png" alt='mask 1'/>

            <img className='book' src={Book} alt='book'/>
            <h2 className='how-works'>How it Works</h2>
            <p className='how-desc'>Opt out of standardized testing while showing off to colleges and universities</p>
            <img src={BottomLeft} alt='Bottom Left'/>
            <img src={BottomRight} alt='Bottom Right'/>

        </div>
    )
}

export default Home