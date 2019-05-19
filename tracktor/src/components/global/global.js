import React from 'react';
import './global.css';
class Global extends React.Component{
  render(){
    document.body.style.background = "url('https://www.htmlcsscolor.com/preview/gallery/25343F.png') no-repeat center center ";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize="100% 100%";
        return (
      <div>
        <img className="logo3" src="https://i.imgur.com/t14rSEl.png" alt="logo"/>
        <p className="gtext"><span className="gunderline1">Home</span></p>
      <p className="gtext1"><span className="gunderline1">About</span></p>
      <p className="gtext2"><span className="gunderline1">Media</span></p>
      <p className="gtext3"><span className="gunderline1">Contact</span></p>
      <p className="gtext4"><span className="gunderline1">Log On</span></p>

      <img className="pickto" src="https://i.imgur.com/gDpE0eK.png" alt="picktochart"/>
    </div>
    )
  }
}

export default Global;