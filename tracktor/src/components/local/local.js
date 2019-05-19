import React from 'react';
import './local.css';
import ReactSearchBox from 'react-search-box'
import { Button, Container, Row, Col, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
    import MapGL, { Popup } from '@urbica/react-map-gl';
    import 'mapbox-gl/dist/mapbox-gl.css';


class Local extends React.Component{
    initialState = {
        viewport: {
          latitude: 43.657188,
          longitude: -79.379542,
          zoom: 13
        }
      };
      data = [
        {
          key: 'Milka',
          value: 'Milkas Farm',
        },
        {
          key: 'Green Grocer',
          value: 'Green Grocer',
        },
        {
          key: 'Green Machine',
          value: 'Green Machine',
        },
        {
          key: 'Macks Ranch',
          value: 'Macks Ranch',
        },
        {
          key: 'Food Bank',
          value: 'Salvation Army Food Bank',
        },
      ]

    data1 = [
        {
            key: 'Brampton',
            value: 'Brampton, ON',

        },
        {
          key: 'Toronto',
          value: 'Toronto, ON',
        },
        {
          key: 'Newmarket',
          value: 'Newmarket, ON',
        },
        {
          key: 'Markham',
          value: 'Markham, ON',
        },
        {
          key:'Scarbrough',
          value: 'Scarbrough, ON',
        },
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

            data={this.data1}
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
      <h1>How does Track<span className="greentext">tor</span> work?</h1>

    <Container className="shifter1">
        <Row>
            <Col xs="6" sm="4">
                <h6 className="textcenter2">Search Locally</h6>
                <img className="icon" alt="magglass" src="https://upload.wikimedia.org/wikipedia/commons/5/55/Magnifying_glass_icon.svg"/>
                <p className="worksize">With a quick search, Tracktor provides you easy access to the largest selection of locally grown products in your area</p>
            </Col>
            <Col xs="6" sm="4">
                <h6 className="textcenter2">Freshness Guaranteed</h6>
                <img className="icon" alt="fresh" src="https://image.flaticon.com/icons/svg/1000/1000196.svg"/>
                <p className="worksize">We do all the hard work curating all local establishments to provide the finest and freshest products </p>
            </Col>
            <Col sm="4">
                <h6 className="textcenter2">Connect With Locals</h6>
                <img className="icon" alt="connect" src="https://image.flaticon.com/icons/svg/753/753115.svg"/>
                <p className="worksize">Skip on large businesses and profit margins when we remove the middleman in between, allowing you to connect to the root of what you are getting</p>
            </Col>
        </Row>
    </Container>



    </div>

    <div className="shifter2">
      <h1>New and Fresh to Track<span className="greentext">tor</span></h1>
            <hr></hr>
    <Container className="shifter1">
        <Row>
            <Col xs="6" sm="4">
                <Card className="cardbody">
                    <CardImg  className="cardImg" top width="100%" src="https://d3u03kk87rjfaq.cloudfront.net/wp-content/uploads/2009/06/03145943/farmers-markets.jpg" alt="Card image cap" />
                        <CardBody>
                                <CardTitle className="cardText">The Valley Greens</CardTitle>
                                <CardSubtitle>🥑🥑🥑 15 Reviews</CardSubtitle>
                                <CardText className="bodytext">Toronto, ON <br/> Fresh Farmers Market produce open daily at 9am - 5pm</CardText>
                            <Button color="success">Explore</Button>
                        </CardBody>
                </Card>
            </Col>
            <Col xs="6" sm="4">
            <Card  className="cardbody">
                <CardImg  className="cardImg" top width="100%" src="https://winnersdrinkmilk.com/wp-content/uploads/2014/06/kleine02.jpg" alt="Card image cap" />
                    <CardBody>
                            <CardTitle className="cardText">Dason Milkka Farms ✅</CardTitle>
                            <CardSubtitle>🥑🥑🥑🥑 20 Reviews</CardSubtitle>
                            <CardText className="bodytext">
                            Brampton,ON <br/>"Best Source for fresh milk and grain fed free run chicken." Open Mon - Fri 9am - 6pm</CardText>
                            <Button color="success">Explore</Button>
                    </CardBody>
            </Card>
            </Col>
            <Col sm="4">
            <Card  className="cardbody">
                    <CardImg className="cardImg" top width="100%" src="http://brooklyntothecatskills.com/wp-content/uploads/2018/06/asparagus-1080x675.jpg" alt="Card image cap" />
                    <CardBody>
                        <CardTitle className="cardText">Ronald Peed Markets</CardTitle>
                        <CardSubtitle>🥑🥑 6 Reviews</CardSubtitle>
                        <CardText className="bodytext">Vaughn, ON<br/> Fresh and new market selling sweet corn and tomatoes. Open Weekends 10am - 6pm</CardText>
                        <Button color="success">Explore</Button>
                    </CardBody>
            </Card>
            </Col>
        </Row>
    </Container>

      </div>
     <div className="mapshift">
     <Row>
        <Col xs="6">
      <MapGL
        style={{ width: '110%', height: '525px' }}
        mapStyle='mapbox://styles/mapbox/light-v9'
        accessToken={'pk.eyJ1IjoicmFqaXMzeHkiLCJhIjoiY2p2dTdrNGFlM254bzQzbXVwOW83NnhlNCJ9.LvRKzR6XBUgDT9P5mB7b0g'}
        latitude={this.initialState.viewport.latitude}
        longitude={this.initialState.viewport.longitude}
        zoom={this.initialState.viewport.zoom}
        onViewportChange={viewport => this.setState({ viewport })}
        >
        <Popup longitude={-79.379542} latitude={43.657188} closeButton={true} closeOnClick={false}>
        1. The Villager <br/> 🥑🥑🥑<br/>
        "Fresh Produce every day!"
      </Popup>
      <Popup longitude={-79.4579} latitude={44.0527} closeButton={true} closeOnClick={false}>
        2. Ronald Joe's Farms <br/> 🥑🥑🥑🥑<br/>
        "Best Corn in town!"
      </Popup>
      <Popup longitude={-79.4094} latitude={43.6782} closeButton={true} closeOnClick={false}>
        3. Auntie Heckatoons Farm <br/> 🥑🥑<br/>
        "Horrible time, the Farm was not the cleanest."
      </Popup>
      <Popup longitude={-79.3948} latitude={43.6677} closeButton={true} closeOnClick={false}>
        4. Salvation Army Thrift Store <br/> 🥑🥑🥑🥑<br/>
        "Got a new Shirt here last weekend"
      </Popup>
      <Popup longitude={-79.3596} latitude={43.6503} closeButton={true} closeOnClick={false}>
        5. Fort York Food Bank <br/> 🥑🥑🥑<br/>
        "My go to for every time I donate"
      </Popup>
    </MapGL>
    </Col>
    <Col xs="6">
    <Card className="mapsearch">
        <CardBody>
          <CardTitle className="cardText">1. The Villager $$</CardTitle>
          <CardText className="bodytext1">🥑🥑🥑<br/>Italian eats using the most organic and freshest ingredients from farms in our local vanicity</CardText>
        </CardBody>
      </Card>
      <Card className="mapsearch">
      <CardBody> 
          <CardTitle className="cardText">2. Ronald Joe's Farms $</CardTitle>
          <CardText className="bodytext1">🥑🥑🥑🥑<br/> Full day breakfast made to order with our homegrown organic ingredients everyday</CardText>
          </CardBody>
      </Card>
      <Card className="mapsearch">
        <CardBody>
          <CardTitle className="cardText">3. Auntie Heckatoons Farm $$$</CardTitle>
          <CardText className="bodytext1">🥑🥑<br/>"The food was cold, tasteless, and expensive. Wouldn't reccommend"
          <br/> - Jennifer S. 24</CardText>

        </CardBody>
      </Card>
    </Col>
        </Row>

      <Card className="mapsearch1">
        <CardBody>
          <CardTitle className="cardText">4. Salvation Army Thrift Store $</CardTitle>
          <CardText className="bodytext1">🥑🥑🥑🥑<br/>"I found many unique, antique and old items that brought out the inner explorist within me from my childhood days." <br/> - Johnson W. 54</CardText>
        </CardBody>
      </Card>
      <Card className="mapsearch1">
        <CardBody>
          <CardTitle className="cardText">5. Fort York Food Bank $</CardTitle>
          <CardText className="bodytext1">🥑🥑🥑<br/>First time dropping off food at this location. The staff was a bit slow and the service was decent at best but overall it was alright</CardText>
        </CardBody>
      </Card>
    </div>
    <div>
<footer className="footer">
<p className="footertext">Website made from scratch using ReactJS and NodeJs for RuHacks<br/> Team: It's a bug not a feature <br/>Copyright 2019</p>
</footer>
</div>
    </div>
    )
  }
}

export default Local;