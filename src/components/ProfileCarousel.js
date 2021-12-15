
import Carousel from 'react-bootstrap/carousel'
import { Link } from 'react-router-dom'

function ProfileCarousel() {
  return (
<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=First slide&bg=373940"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Second slide&bg=282c34"
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>



    ////////////////////////
    // <Carousel variant="dark">
    //   <Carousel.Item>
    //     <div className='item'>
    //       <Link to='/'>
    //             <a href="https://www.youtube.com/watch?v=r3qNES6HLu0" target='_blank'> 
    //                 <img className='carousel'src={`${process.env.PUBLIC_URL}/images/hscreditlogo.png`} alt="hs.credit logo"/>
    //             </a>
    //       </Link>
    //     </div>
    //     <Carousel.Caption className='caption'>
    //       <div className='caption'>
    //         <Link to='/'>
    //         </Link>
    //       </div>
    //     </Carousel.Caption>
    //   </Carousel.Item>

    //   <Carousel.Item>
    //     <div className='item'>
    //       <Link to='/'>
    //             <a href="https://www.youtube.com/watch?v=r3qNES6HLu0" target='_blank'> 
    //                 <img className='carousel'src={`${process.env.PUBLIC_URL}/images/hscreditlogo.png`} alt="hs.credit logo"/>
    //             </a>
    //       </Link>
    //     </div>
    //     <Carousel.Caption>
    //       <div className='caption'>
    //         <Link to='/'>

    //         </Link>
    //       </div>
    //     </Carousel.Caption>
    //   </Carousel.Item>

    //   <Carousel.Item >
    //     <div className='item'>
    //       <Link to='/'>
    //             <a href="https://www.youtube.com/watch?v=r3qNES6HLu0" target='_blank'> 
    //                 <img className='carousel'src={`${process.env.PUBLIC_URL}/images/hscreditlogo.png`} alt="hs.credit logo"/>
    //             </a>
    //       </Link>
    //     </div>
    //     <Carousel.Caption>
    //       <div className='caption3'>
    //         <Link to='/'>
    //         </Link>
    //       </div>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    // </Carousel>
  )
}

export default ProfileCarousel

