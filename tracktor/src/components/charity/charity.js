import React from 'react';
import Navigation from "../home/navbar";
import '../home/home.css';
import { Button } from 'reactstrap';


class Charity extends React.Component {
  render() {
    document.body.style.backgroundColor = "white";
    document.body.style.background = "url('http://prod-upp-image-read.ft.com/52afd056-01ab-11e2-8aaa-00144feabdc0') no-repeat center 200px ";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundSize = "100% 100%";

    return (
      <div>
        <div className="navbar">
          <img className="picture1" alt="logo" src="https://i.imgur.com/xOvpeIV.png" />
          <Navigation />
        </div>
        <br></br>
        <div class="box">
          <h1 id="bold" className="p1">The Salvation Army</h1>
          <br></br><br></br>
          <img alt="logo" src="https://www.wmbfnews.com/resizer/WfXEhR-PwPbHo2LhlHU2YH5m2h8=/1200x600/arc-anglerfish-arc2-prod-raycom.s3.amazonaws.com/public/FJ7F4UZNKBCATOKPHF55MDQIEA.jpg" />
          <br></br>
<p className="p1">The Salvation Army is a Christian organization that gives hope
          and support to vulnerable people in 400 communities across Canada and in 131 countries. 
          The Salvation Army exists to share the love of Jesus Christ, meet human needs and be a transforming influence in the communities of our world.
          </p>
            <p className="p1">
               <Button className="p1" color="primary">Learn More</Button>
            </p>
        </div >

      <br></br>
      <div class="box">
        <h1 id="bold" className="p1">The Salvation Army</h1>
        <br></br>
        <img alt="logo" src="https://www.wmbfnews.com/resizer/WfXEhR-PwPbHo2LhlHU2YH5m2h8=/1200x600/arc-anglerfish-arc2-prod-raycom.s3.amazonaws.com/public/FJ7F4UZNKBCATOKPHF55MDQIEA.jpg" />
        <br></br>
        <p className="p1">The Salvation Army is a Christian organization that gives hope
                  and support to vulnerable people in 400 communities across Canada and in 131 countries.
                  The Salvation Army exists to share the love of Jesus Christ, meet human needs and be a transforming influence in the communities of our world.
          </p>
        <p className="p1">
          <Button className="p1" color="primary">Learn More</Button>
        </p>
      </div >                 
      </div >      
    )                                               
  }  
}                     

export default Charity;