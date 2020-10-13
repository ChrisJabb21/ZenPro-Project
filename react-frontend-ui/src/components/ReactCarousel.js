import React from "react";
import "../App.css";
import {  Carousel } from 'react-bootstrap';


function ReactCarousel() {
  return (
    <div style={{display:"inline"}}>
<Carousel style={{width:"1130px" }}>
  <Carousel.Item>
    <img
      style={{borderRadius:"5px"}}
      className="d-block w-100"
      src="https://playfamously.com/wp-content/uploads/2018/01/Bigstock-67613801-Youth-Baseball-game.jpg"
      alt="First slide"
    />
    <Carousel.Caption style={{color:"black"}}>
      <h3>Welcome to ZenPro!</h3>
      <h6>View our products in the shop tab!</h6>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{borderRadius:"5px"}}
      className="d-block w-100"
      src="https://sportsgroundproduction.blob.core.windows.net/cms/14667/newsarticles/73480_wo.jpg"
      alt="Second slide"
    />

    <Carousel.Caption style={{color:"blwhiteack"}}>
    <h6>ZenPro athlete Katerina Kozik playing in ZenPro apparel</h6>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
    style={{borderRadius:"5px"}}
      className="d-block w-100"
      src="https://cdn.vox-cdn.com/thumbor/rdWjsZiaHgVgonZW-DDVMD4Ai9k=/0x0:2000x1200/1200x800/filters:focal(969x270:1289x590)/cdn.vox-cdn.com/uploads/chorus_image/image/67128871/ob_CST_081719_2008.0.jpg"
      alt="Third slide"
    />

    <Carousel.Caption>
     <h6>Naperville University athletes sporting ZenPro practice gear</h6>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
  );
}

export default ReactCarousel;

// function ReactCarousel() {
//   return (
//     <div className="mycarousel w-100 m-auto" >
// <Carousel style={{float:"left", width:"100%"}}>
//   <Carousel.Item>
//     <img
    
//       className="d-block w-100"
//       src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
//       alt="First slide"
//     />
//     <Carousel.Caption>
//       <h3>Welcome to ZenPro!</h3>
//       <p>Check out a few of our products</p>
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
//       alt="Third slide"
//     />

//     <Carousel.Caption>
     
//     </Carousel.Caption>
//   </Carousel.Item>
//   <Carousel.Item>
//     <img
//       className="d-block w-100"
//       src="https://images.unsplash.com/photo-1532349633002-7e3231a1dce3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
//       alt="Third slide"
//     />

//     <Carousel.Caption>
     
//     </Carousel.Caption>
//   </Carousel.Item>
// </Carousel>
// </div>
//   );
// }

// export default ReactCarousel;