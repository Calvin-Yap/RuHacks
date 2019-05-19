import React from 'react';
import './farmer.css';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import ScrollUpButton from "react-scroll-up-button"; 
class Farmer extends React.Component{
  render(){
    document.body.style.background = "url('https://www.htmlcsscolor.com/preview/gallery/525252.png') no-repeat center center ";
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundAttachment = "fixed";
    document.body.style.backgroundSize="100% 100%";
        return (
      <div>
        <ScrollUpButton />
        <div className="buttonshift">
        <AnchorLink className="anchor" offset='-70' href='#match'> <img className="buttons" alt="Button" src="https://i.imgur.com/CD5HJci.png"/></AnchorLink>
        <AnchorLink className="anchor" offset='-70' href='#suggest'><img className="buttons" alt="Button" src="https://i.imgur.com/RVakPT5.png"/></AnchorLink>
        <AnchorLink className="anchor" offset='-70' href='#local'><img className="buttons" alt="Button" src="https://i.imgur.com/LERK22u.png"/></AnchorLink>
        <AnchorLink className="anchor" offset='-70' href='#friends'><img className="buttons" alt="Button" src="https://i.imgur.com/axXx0P6.png"/></AnchorLink>
        <img className="logo6" alt="logo" src="https://i.imgur.com/n0i1wgH.png"/>
        </div>

        <div>
        <section id='match'> <img className="section" alt="chat" src="https://i.imgur.com/gmYcza4.png"/></section>
        <section id='suggest'> <img className="section" alt="chat" src="https://i.imgur.com/656Rngx.png"/></section>
        <section id='local'> <img className="section" alt="chat" src="https://i.imgur.com/vzhQgGu.png"/></section>
        <section id='friends'> <img className="section" alt="chat" src="https://i.imgur.com/hC1HSef.png"/></section>
        </div> 
    </div>
    )
  }
}

export default Farmer;