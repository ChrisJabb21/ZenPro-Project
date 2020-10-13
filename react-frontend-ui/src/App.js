import React from "react";
//import Navbar from "./components/Navbar";
import "./App.css";

import { Switch, BrowserRouter, Route } from 'react-router-dom';
import Home from "./components/Home"
import ReactNavbar from "./components/ReactNavbar"
import Shop from "./components/Shop"
import Events from "./components/Events"
import ShoppingCart from "./components/ShoppingCart"
import UserInfo from './components/UserInfo'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeaderImg from './components/headerimg.jpg'

function App() {
  return (
    <div style={{backgroundColor:"rgb(254, 255, 254"}}>
      <img src={HeaderImg} alt="noimg" style={{width:"78%", marginLeft:"11%", }}/>
    <ReactNavbar/>
    <div className="appDiv">

      <BrowserRouter >
            <Switch>
              <Route path='/shop' component={Shop}  />
              <Route path='/events' component={Events}/>
              <Route path='/shoppingcart' component={ShoppingCart} />
              <Route path='/userinfo' component={UserInfo}/>
              <Route path='/'  component={Home}/> 
            </Switch>      
      </BrowserRouter>

      
    </div>
    <footer className="myFooter"><span className="foot">Built by ZenPro</span></footer>
</div>
  );
}

export default App;

//<div /*style ={{ padding: "10px", height:"100%" }}*/>
//<BrowserRouter /*style={{justifyContent: "center",alignItems: "center"}}*/>
//<Switch>
//  <Route path='/home'  component={Home}/> {/* Right after log in, user will go here, all following paths will be buttons on the home screen  */}
//  <Route path='/shop' component={Shop}  />
//
//  <Route path='/userInfo'  />
//  <Route path='/'  />
//</Switch>
//</BrowserRouter>
//</div>
