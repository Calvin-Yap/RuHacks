import React from 'react';
import './charity.css';



class Charity extends React.Component {
  render() {
    document.body.style.background = "url('https://brockportchamber.org/wp-content/uploads/2017/09/happy-family.jpg') no-repeat center center ";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize = "100% 100%";
    return (
      <div>
        <div className="cnavigationalbar">
          <img className="clogo2" alt="logo" src="https://i.imgur.com/iwrkQ7t.png" />
          <p className="ctext"><span className="underline1">Home</span></p>
          <p className="ctext1"><span className="underline1">About</span></p>
          <p className="ctext2"><span className="underline1">Media</span></p>
          <p className="ctext3"><span className="underline1">Contact</span></p>
          <p className="ctext4"><span className="underline1">Log On</span></p>
        </div>

        <div className="crow">
          <div className="ccolumn">
            <div className="cbox">
              <h1 id="bold" className="cp1">The Salvation Army</h1>
              <br></br>
              <br></br>
              <img className="cpicture1" alt="logo" src="https://www.wmbfnews.com/resizer/WfXEhR-PwPbHo2LhlHU2YH5m2h8=/1200x600/arc-anglerfish-arc2-prod-raycom.s3.amazonaws.com/public/FJ7F4UZNKBCATOKPHF55MDQIEA.jpg" />
              <br></br>
              <br></br>
              <p className="cp1">The Salvation Army is a Christian organization that gives hope
                          and support to vulnerable people in 400 communities across Canada and in 131 countries.
                          The Salvation Army exists to share the love of Jesus Christ, meet human needs and be a transforming influence in the communities of our world.
            </p>
              <br></br>
              <p className="cp1">
                <a href="https://salvationarmy.ca/" class="btn btn-info" role="button">Learn More</a>
              </p>
            </div >
          </div>
          <div className="ccolumn">
            <div class="cbox">
              <h1 id="bold" className="cp1">Ronald McDonald House Charities</h1>
              <br></br><br></br>
              <img className="cpicture1" alt="logo" src="https://i.imgur.com/F88yUcT.png" />
              <br></br>
              <br></br>
              <p className="cp1">The mission of RMHC is to create, find and support programs that directly improve the health and well-being of children and their families. A world where all children have access to medical care, and their families are supported and actively involved in their children's care.
            </p>
              <br></br>
              <p className="cp1">
                <a href="https://www.rmhccanada.ca/" class="btn btn-info" role="button">Learn More</a>

              </p>
            </div >
          </div>
          <div className="ccolumn">
            <div class="cbox">
              <h1 id="bold" className="cp1">SickKids foundation</h1>
              <br></br><br></br>
              <img className="cpicture1" alt="logo" src="https://www.searchenginepeople.com/wp-content/uploads/2013/04/SickKids-foundation-logo.jpg" />
              <br></br>
              <br></br>
              <p className="cp1">The Hospital for Sick Children (SickKids) is a health-care community dedicated to improving the health of children. Our mission is to provide the best in family-centred, compassionate care, to lead in scientific and clinical advancement, and to prepare the next generation of leaders in child health.
            </p>
              <br></br>

              <p className="cp1">
                <a className="cbutton1" href="https://www.sickkidsfoundation.com/" class="btn btn-info" role="button">Learn More</a>

              </p>
            </div >
          </div>
        </div>
        <br></br>
      </div >

    )
  }
}

export default Charity;