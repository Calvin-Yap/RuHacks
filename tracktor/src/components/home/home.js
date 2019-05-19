import React from 'react';
import { NavLink } from "react-router-dom";
import './home.css';
import Navigation from "./navbar";
class Home extends React.Component {
    render() {
        document.body.style.background = "url('https://i.imgur.com/30KJRWO.png') no-repeat center center ";
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";
        document.body.style.backgroundSize = "100% 100%";
        return (
            <div className="navigationbar">
                <img className="logo" alt="logo" src="https://i.imgur.com/xOvpeIV.png" />
                <Navigation />
                <div className="lshifter">
                    <div className="row">
                        <div className="column">
                            <div className="boxes1"><NavLink className="buttons" to="/local"><span className="underline">Buying Local</span></NavLink></div>
                        </div>
                        <div className="column">
                            <div className="boxes2"> <NavLink className="buttons" to="/charity"><span className="underline">Charities</span></NavLink></div>
                        </div>
                        <div className="column">
                            <div className="boxes2line"> <NavLink className="buttons" to="/farmer"><span className="underline">Farmers Connect</span></NavLink></div>
                        </div>
                        <div className="column">
                            <div className="boxes2line1"> <NavLink className="buttons" to="/global"><span className="underline">Global Operations</span></NavLink></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;