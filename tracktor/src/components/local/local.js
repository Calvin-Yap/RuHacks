import React from 'react';
import './local.css';
import ReactSearchBox from 'react-search-box'
import { Button, Container, Row, Col } from 'reactstrap';

class Local extends React.Component{
    data = [
        {
          key: 'john',
          value: 'John Doe',
        }
      ]
  render(){
    document.body.style.background = "url('https://www.solidbackgrounds.com/images/2560x1440/2560x1440-white-solid-color-background.jpg') no-repeat center center ";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize="100% 100%";
        return (
            
      <div>
          
        <div className="searchbar">
        <ReactSearchBox 
        
            placeholder="Find Farmer's Markets, Fresh Produce, Food Banks ......"
            dropDownBorderColor   ="black"
            inputBoxBorderColor ="black"
            data={this.data}
            callback={record => console.log(record)}
        />
        </div>
        <div className="searchbar1">
        <ReactSearchBox 
        
            placeholder="Near: Toronto, ON"
            dropDownBorderColor   ="black"
            inputBoxBorderColor ="black"

            data={this.data}
            callback={record => console.log(record)}
        />
        </div>
        <Button className="searcher" color="success" >Search</Button>{' '}
          <img className="logoLocal" src="https://i.imgur.com/UFxScxk.png" alt="logo1"/>
          <img className="headersize" src="https://i.ibb.co/XjKb4tk/annie-spratt-773853-unsplash.jpg" alt="backing"/>
      <p className="words"> Milka's Market</p>
      <p className="ltext"><span className="lunderline1">Home</span></p>
      <p className="ltext1"><span className="lunderline1">About</span></p>
      <p className="ltext2"><span className="lunderline1">Media</span></p>
      <p className="ltext3"><span className="lunderline1">Contact</span></p>
      <p className="ltext4"><span className="lunderline1">Log On</span></p>
      <p className="ltext5"><span className="lunderline1">Sign Up</span></p>      
      <div className="shifter">
    <Container>
        <Row>
            <Col xs="6" sm="4">
                <h6 className="textcenter2">Search Locally</h6>
            </Col>
            <Col xs="6" sm="4">
                <h6 className="textcenter2">Freshness Guaranteed</h6>
            </Col>
            <Col sm="4">
                <h6 className="textcenter2">Connect With Locals</h6>
            </Col>
        </Row>
    </Container>
    </div>
    </div>
    )
  }
}

export default Local;