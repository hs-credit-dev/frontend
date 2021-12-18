
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom'

function ProfileCarousel() {
  return (

    //////////////////////
    <Carousel variant="dark">
      <Carousel.Item>
        <div className='item'>
          <Link to='/'>
                <a href="https://www.youtube.com/watch?v=r3qNES6HLu0" target='_blank'> 
                    <img className='carousel'src={`${process.env.PUBLIC_URL}/images/hscreditlogo.png`} alt="hs.credit logo"/>
                </a>
          </Link>
        </div>
        <Carousel.Caption className='caption'>
          <div className='caption'>
            <Link to='/'>
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <div className='item'>
          <Link to='/'>
                <a href="https://www.youtube.com/watch?v=r3qNES6HLu0" target='_blank'> 
                    <img className='carousel'src={`${process.env.PUBLIC_URL}/images/hscreditlogo.png`} alt="hs.credit logo"/>
                </a>
          </Link>
        </div>
        <Carousel.Caption>
          <div className='caption'>
            <Link to='/'>

            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item >
        <div className='item'>
          <Link to='/'>
                <a href="https://www.youtube.com/watch?v=r3qNES6HLu0" target='_blank'> 
                    <img className='carousel'src={`${process.env.PUBLIC_URL}/images/hscreditlogo.png`} alt="hs.credit logo"/>
                </a>
          </Link>
        </div>
        <Carousel.Caption>
          <div className='caption3'>
            <Link to='/'>
            </Link>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default ProfileCarousel