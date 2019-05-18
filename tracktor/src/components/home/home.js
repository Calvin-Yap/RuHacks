import React from 'react';
import { NavLink }  from "react-router-dom";
class Home extends React.Component{
  render(){
    document.body.style.backgroundColor= "white";
    //document.body.style.backgroundSize = "cover";
    //document.body.style.backgroundAttachment = "fixed";
        return (
      <div>
      <p> hi</p>
      <NavLink   to="/" >HOME</NavLink>
    <NavLink  to="/charity">Charity</NavLink>
    <NavLink  to="/f2f">Farmer</NavLink>

    </div>
    )
  }
}

export default Home;