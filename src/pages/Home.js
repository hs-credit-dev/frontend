import HomeHeader from '../components/Headers/HomeHeader'
import TopNavBar from '../components/NavBars/TopNavBar'

const Home = () => {
    return (
        <div className='home-container'>
            <TopNavBar />
            <HomeHeader />
        </div>
    )
}

export default Home;
