import React from 'react';
import { NavLink }  from "react-router-dom";
import './home.css';

class Home extends React.Component{
  render(){
    document.body.style.backgroundColor= "white";
    //document.body.style.backgroundSize = "cover";
    //document.body.style.backgroundAttachment = "fixed";
        return (
      <div>
<div className="lshifter">    
    <div class="row">
            <div class="column">
                <div className="boxes"> <NavLink  className="buttons" to="/local">Buying Local</NavLink></div>
            </div>
            <div class="column">
                <div className="boxes"> <NavLink className="buttons" to="/charity">Charities</NavLink></div>
            </div>
            <div class="column">
                <div className="boxes2line"> <NavLink  className="buttons" to="/farmer">Farmers Connect</NavLink></div>
                </div>
            <div class="column">
                <div className="boxes2line"> <NavLink  className="buttons" to="/global">Global Operations</NavLink></div>
            </div>
        </div>
    </div>
</div>      
    )
  }
}

export default Home;