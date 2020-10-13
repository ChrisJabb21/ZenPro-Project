import React from "react";
import "../App.css";
import Hero from "./Hero"
import TwitterDiv from "./TwitterDiv"

function Home() {
  return (
    <div>
      <Hero />
      
    </div>
  );
}

export default Home;


// function Home() {
//   return (
//     <>
//     <div className="home">
//       <TwitterDiv/>
//       </div>
//       <div className="sideBar">
//         <h1>Sign up for exclusive deals!</h1>
//         <img className="homeImg" src="https://images.unsplash.com/photo-1484482340112-e1e2682b4856?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="noimg"></img>
//         <h5>Or view some of our upcoming <a href="/events">Events</a></h5>
//       </div>
//       <Hero />
//       <footer className="myFooter"><span className="foot">Built by ZenPro</span></footer>
//     </>
//   );
// }

// export default Home;