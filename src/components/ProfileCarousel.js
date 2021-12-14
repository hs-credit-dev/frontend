
// import Carousel from 'react-bootstrap/Carousel'
// import { Link } from 'react-router-dom'

// function ProfileCarousel() {
//     return (
//         // <Carousel>
//         //   <Carousel.Item>
//         //     <img
//         //       className="d-block w-100"
//         //       src="holder.js/800x400?text=First slide&bg=373940"
//         //       alt="First slide"
//         //     />
//         //     <Carousel.Caption>
//         //       <h3>First slide label</h3>
//         //       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         //     </Carousel.Caption>
//         //   </Carousel.Item>
//         //   <Carousel.Item>
//         //     <img
//         //       className="d-block w-100"
//         //       src="holder.js/800x400?text=Second slide&bg=282c34"
//         //       alt="Second slide"
//         //     />

//         //     <Carousel.Caption>
//         //       <h3>Second slide label</h3>
//         //       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         //     </Carousel.Caption>
//         //   </Carousel.Item>
//         //   <Carousel.Item>
//         //     <img
//         //       className="d-block w-100"
//         //       src="holder.js/800x400?text=Third slide&bg=20232a"
//         //       alt="Third slide"
//         //     />

//         //     <Carousel.Caption>
//         //       <h3>Third slide label</h3>
//         //       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
//         //     </Carousel.Caption>
//         //   </Carousel.Item>
//         // </Carousel>



//         //////////////////////
//         <Carousel variant="dark">
//             <Carousel.Item>
//                 <div className='item'>
//                     <Link to='/'>

//                         <img className='carousel' src={`${process.env.PUBLIC_URL}/images/hscreditlogo.png`} alt="hs.credit logo" />

//                     </Link>
//                 </div>
//                 <Carousel.Caption className='caption'>
//                     <div className='caption'>
//                         <Link to='/'>
//                         </Link>
//                     </div>
//                 </Carousel.Caption>
//             </Carousel.Item>

//             <Carousel.Item>
//                 <div className='item'>
//                     <Link to='/'>

//                         <img className='carousel' src={`${process.env.PUBLIC_URL}/images/hscreditlogo.png`} alt="hs.credit logo" />

//                     </Link>
//                 </div>
//                 <Carousel.Caption>
//                     <div className='caption'>
//                         <Link to='/'>

//                         </Link>
//                     </div>
//                 </Carousel.Caption>
//             </Carousel.Item>

//             <Carousel.Item >
//                 <div className='item'>
//                     <Link to='/'>

//                         <img className='carousel' src={`${process.env.PUBLIC_URL}/images/hscreditlogo.png`} alt="hs.credit logo" />

//                     </Link>
//                 </div>
//                 <Carousel.Caption>
//                     <div className='caption3'>
//                         <Link to='/'>
//                         </Link>
//                     </div>
//                 </Carousel.Caption>
//             </Carousel.Item>
//         </Carousel>
//     )
// }

// export default ProfileCarousel

// import React from "react";
// import {
//     MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardImage,
//     MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn
// } from "mdbreact";

// const ProfileCarousel = () => {
//     return (
//         <MDBContainer>
//             <MDBCarousel activeItem={1} length={3} slide={true} showControls={true} showIndicators={true} multiItem>
//                 <MDBCarouselInner>
//                     <MDBRow>
//                         <MDBCarouselItem itemId="1">
//                             <MDBCol md="4">
//                                 <MDBCard className="mb-2">
//                                     <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(34).jpg" />
//                                     <MDBCardBody>
//                                         <MDBCardTitle>MDBCard title</MDBCardTitle>
//                                         <MDBCardText>
//                                             Some quick example text to build on the card title and
//                                             make up the bulk of the card's content.
//                                         </MDBCardText>
//                                         <MDBBtn color="primary">MDBBtn</MDBBtn>
//                                     </MDBCardBody>
//                                 </MDBCard>
//                             </MDBCol>
//                             <MDBCol md="4">
//                                 <MDBCard className="mb-2">
//                                     <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(18).jpg" />
//                                     <MDBCardBody>
//                                         <MDBCardTitle>MDBCard title</MDBCardTitle>
//                                         <MDBCardText>
//                                             Some quick example text to build on the card title and
//                                             make up the bulk of the card's content.
//                                         </MDBCardText>
//                                         <MDBBtn color="primary">MDBBtn</MDBBtn>
//                                     </MDBCardBody>
//                                 </MDBCard>
//                             </MDBCol>
//                             <MDBCol md="4">
//                                 <MDBCard className="mb-2">
//                                     <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(35).jpg" />
//                                     <MDBCardBody>
//                                         <MDBCardTitle>MDBCard title</MDBCardTitle>
//                                         <MDBCardText>
//                                             Some quick example text to build on the card title and
//                                             make up the bulk of the card's content.
//                                         </MDBCardText>
//                                         <MDBBtn color="primary">MDBBtn</MDBBtn>
//                                     </MDBCardBody>
//                                 </MDBCard>
//                             </MDBCol>
//                         </MDBCarouselItem>
//                         <MDBCarouselItem itemId="2">
//                             <MDBCol md="4">
//                                 <MDBCard className="mb-2">
//                                     <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(60).jpg" />
//                                     <MDBCardBody>
//                                         <MDBCardTitle>MDBCard title</MDBCardTitle>
//                                         <MDBCardText>
//                                             Some quick example text to build on the card title and
//                                             make up the bulk of the card's content.
//                                         </MDBCardText>
//                                         <MDBBtn color="primary">MDBBtn</MDBBtn>
//                                     </MDBCardBody>
//                                 </MDBCard>
//                             </MDBCol>
//                             <MDBCol md="4">
//                                 <MDBCard className="mb-2">
//                                     <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(47).jpg" />
//                                     <MDBCardBody>
//                                         <MDBCardTitle>MDBCard title</MDBCardTitle>
//                                         <MDBCardText>
//                                             Some quick example text to build on the card title and
//                                             make up the bulk of the card's content.
//                                         </MDBCardText>
//                                         <MDBBtn color="primary">MDBBtn</MDBBtn>
//                                     </MDBCardBody>
//                                 </MDBCard>
//                             </MDBCol>
//                             <MDBCol md="4">
//                                 <MDBCard className="mb-2">
//                                     <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(48).jpg" />
//                                     <MDBCardBody>
//                                         <MDBCardTitle>MDBCard title</MDBCardTitle>
//                                         <MDBCardText>
//                                             Some quick example text to build on the card title and
//                                             make up the bulk of the card's content.
//                                         </MDBCardText>
//                                         <MDBBtn color="primary">MDBBtn</MDBBtn>
//                                     </MDBCardBody>
//                                 </MDBCard>
//                             </MDBCol>
//                         </MDBCarouselItem>
//                         <MDBCarouselItem itemId="3">
//                             <MDBCol md="4">
//                                 <MDBCard className="mb-2">
//                                     <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(53).jpg" />
//                                     <MDBCardBody>
//                                         <MDBCardTitle>MDBCard title</MDBCardTitle>
//                                         <MDBCardText>
//                                             Some quick example text to build on the card title and
//                                             make up the bulk of the card's content.
//                                         </MDBCardText>
//                                         <MDBBtn color="primary">MDBBtn</MDBBtn>
//                                     </MDBCardBody>
//                                 </MDBCard>
//                             </MDBCol>
//                             <MDBCol md="4">
//                                 <MDBCard className="mb-2">
//                                     <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(45).jpg" />
//                                     <MDBCardBody>
//                                         <MDBCardTitle>MDBCard title</MDBCardTitle>
//                                         <MDBCardText>
//                                             Some quick example text to build on the card title and
//                                             make up the bulk of the card's content.
//                                         </MDBCardText>
//                                         <MDBBtn color="primary">MDBBtn</MDBBtn>
//                                     </MDBCardBody>
//                                 </MDBCard>
//                             </MDBCol>
//                             <MDBCol md="4">
//                                 <MDBCard className="mb-2">
//                                     <MDBCardImage className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(41).jpg" />
//                                     <MDBCardBody>
//                                         <MDBCardTitle>MDBCard title</MDBCardTitle>
//                                         <MDBCardText>
//                                             Some quick example text to build on the card title and
//                                             make up the bulk of the card's content.
//                                         </MDBCardText>
//                                         <MDBBtn color="primary">MDBBtn</MDBBtn>
//                                     </MDBCardBody>
//                                 </MDBCard>
//                             </MDBCol>
//                         </MDBCarouselItem>
//                     </MDBRow>
//                 </MDBCarouselInner>
//             </MDBCarousel>
//         </MDBContainer>
//     );
// }

// export default ProfileCarousel;


