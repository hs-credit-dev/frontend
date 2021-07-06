import HomeHeader from './Headers/HomeHeader'
import LandNavBar from './NavBars/LandNavBar'

const Home = () => {
    return (
        <div className='home-container'>
            <LandNavBar />
            <HomeHeader />
            <div className='book-div'>
            <img className='book' src='https://i.imgur.com/JEDTTyf.png' alt='book'/>
            </div>
            <h2 className='how-works'>How it Works</h2>
            <p className='how-desc'> opt out of standardized testing <br/>and gain economic advantage <br/>while showing off to universities<br/> and employers</p>
        <img src="https://i.imgur.com/eYtc9sI.png" alt='mask 1'/>
        </div>
    )
}

export default Home
