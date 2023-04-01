import React from "react";
import { Link } from "react-router-dom";
import SignOut from "./signOutUtility";


import './Slide.css'

function Slide(){
  return(
    <div className="slide">
     
      <span><i className="fa-brands fa-twitter icon" ></i></span>

    <button type="submit" className="btn btn-outline-primary btn-lg add"> 
    <i className="fa-solid fa-house font"></i> <Link to="/" className="linkStyle">Home</Link></button>
    <br />
    <button type="submit" className="btn btn-outline-primary btn-lg add">
       <i className="fa-sharp fa-solid fa-magnifying-glass font"></i><Link to="/explore" className="linkStyle">Explore</Link></button>
    <br />
       <button type="submit" className="btn btn-outline-primary btn-lg add">
       <i className="fa-regular fa-bell font"></i>  <Link to="/notification" className="linkStyle">Notification</Link>
         </button>
         <br />
         <button type="submit"className="btn btn-outline-primary btn-lg add">
         <i className="fa-regular fa-message font"></i>  <Link to="/messages" className="linkStyle">Message</Link>
           </button>
           <br />
           <button type="submit" className="btn btn-outline-primary btn-lg add">
           <i className="fa-regular fa-bookmark font"></i>  <Link to="/bookMarks" className="linkStyle">BookMarks</Link>
           </button>
           <br />
           <button type="submit" className="btn btn-outline-primary btn-lg add">
           <i className="fa-solid fa-list font"></i>  <Link to="/lists" className="linkStyle">Lists</Link>
           </button>
           <br />
           <button type="submit" className="btn btn-outline-primary btn-lg add">
           <i className="fa-regular fa-user font"></i>  <Link to="/profile" className="linkStyle">Profile</Link>
           </button>
           <br />
           <button type="submit" className="btn btn-outline-primary btn-lg add">
           ...      More
           </button>
           <br />
           <button className="btn btn-primary btn-lg add " type="submit">
           Tweet
           </button>
           <br />
           <button type="submit"  onClick={SignOut}
           className="btn btn-outline-primary btn-lg add">
           <i className="fa-solid fa-power-off font"></i> <span className="signOut">Sign Out</span>
           </button>
      </div>

  )
}

export default Slide;