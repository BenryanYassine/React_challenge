import React, { Component } from 'react';
import {Switch,Route}  from 'react-router-dom';
 
import './App.css';
 
import MySlider from './components/MySlider';
 
class App extends Component {
  render() {
    return (
  //frag for minimsing html divs and sStuuf 
      <React.Fragment> 
        
        

        <Switch>

          <Route exact path="/" component={MySlider} ></Route>
          
        </Switch>
         
      </React.Fragment>

    );
  }
}

export default App;
