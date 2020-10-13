import React from "react";
import "../App.css";
import {  Button, Container } from 'react-bootstrap';
import Carousel from "./ReactCarousel"

function Hero() {
  return (
    <div>
        
        <div style={{display:"inline-block", margin:"10px"}}>
          <Carousel />
        </div>

        

        <div style={{width:"350px", height:"750px",margin:"10px", backgroundColor:"", display:"inline-block", position:"absolute"}}>
          <div style={{backgroundColor:"white", width:"330px", margin:"10px", height:"90px", border:"1px solid lightgrey", borderRadius: "15px", padding:"10px"}}>

            <p style={{margin:"auto",  fontSize:"20px"}}>Use our hashtag <a href="https://twitter.com/search?q=zenprosports&src=typed_query">#zenprosports</a> to get featured on our website!</p>

          </div>
          <div style={{backgroundColor:"white", width:"330px", margin:"10px", height:"400px", border:"1px solid lightgrey", borderRadius: "15px", padding:"10px"}}>
              <h3>Recommended for you</h3><hr/>

              <div class="shopDivHome">
                  <div style={{width: "40%", float: "left"}}>
                      <a href="/shop"><img src="https://dks.scene7.com/is/image/GolfGalaxy/16RAWUFFCLLGCRPGRBSB?wid=1000&amp;fmt=pjpeg" alt="Api error" style={{height: "100px", margin: "20px"}}/></a><br/>
                  </div>
                  <div style={{width: "40%", float: "right"}}>
                      <p style={{textAlign: "left", fontSize:"12px"}}>Rawlings ROLB1/R14U Official League Baseball</p>
                      <span>$5.99</span><button class="cartButton">
                      <span class="icon"><i class="fas fa-shopping-cart"></i></span></button><br/><br/>
                      <p><a href=""></a></p>
                  </div>
              </div>
              <div class="shopDivHome">
                  <div style={{width: "40%", float: "left"}}>
                  <a href="/shop"><img src="https://dks.scene7.com/is/image/GolfGalaxy/16MCCASGNTRWHTBG2BTG_White_Red?qlt=70&wid=1100&fmt=webp" alt="Api error" style={{height: "100px",width:"auto", margin: "20px"}}/></a><br/>
                  </div>
                  <div style={{width: "40%", float: "right"}}>
                      <p style={{textAlign: "left", fontSize:"12px"}}>Marucci Adult Signature Series Batting Gloves</p>
                      <span>$39.99</span><button class="cartButton">
                      <span class="icon"><i class="fas fa-shopping-cart"></i></span></button><br/><br/>
                      <p><a href=""></a></p>
                  </div>
              </div>
          </div>
          
          <div style={{backgroundColor:"white", width:"330px", margin:"10px", height:"230px", border:"1px solid lightgrey", borderRadius: "15px", padding:"10px"}}>
              <h3>Next Event</h3><hr style={{margin:"0"}}/>
              <div style={{textAlign:"center"}}><span style={{fontWeight:"bold"}}>Virtual HIT Workout: Saturday 2 PM</span>
                <a href="/events"><img src="https://www.myokem.com/wp-content/uploads/2017/09/HIIT-vs.-LISS-1024x513.jpg" alt="noimg" style={{width:"250px", height:"auto", borderRadius:"5px"}}/></a>
              </div>
          </div>
        </div>
        
      </div>
  );
}

export default Hero;
