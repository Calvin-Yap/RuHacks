import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Charity from "./components/charity/charity";
import Farmer from "./components/F2F/farmer";
import Global from "./components/global/global";
import Local from "./components/local/local";
import Home from "./components/home/home"
import 'mapbox-gl/dist/mapbox-gl.css';


class App extends Component {
  render(){
  return (
    <BrowserRouter>
    <div>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/charity" component={Charity}/>
      <Route path="/farmer" component={Farmer}/>
      <Route path="/local" component={Local}/>
      <Route path="/global" component={Global}/>
    </Switch>
    </div>
  </BrowserRouter>
  );
  }
}

export default App;
