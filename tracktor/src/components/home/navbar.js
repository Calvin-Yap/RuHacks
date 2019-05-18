import React from 'react';
import './nav.css';

class navbar extends React.Component{
  render(){
        return (
            <div>

      <p className="text"><span className="underline1">Home</span></p>
      <p className="text1"><span className="underline1">About</span></p>
      <p className="text2"><span className="underline1">Media</span></p>
      <p className="text3"><span className="underline1">Contact</span></p>
      <p className="text4"><span className="underline1">Log On</span></p>

    </div>
    )
  }
}

export default navbar;