import HomeHeader from './Headers/HomeHeader'
import Book from '../assets/book.png'

const Home = () => {
    return (
        <div>
            <HomeHeader />
            <img src={Book} alt='book'/>
            <h2>How it Works</h2>
            <p>Opt out of standardized testing while showing off to colleges and universities</p>
        </div>
    )
}

export default Home