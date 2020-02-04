import React, {Component } from 'react';
import './App.css';
import {PictureScroll} from './components/PictureScroll'
import {NasaHeader} from './components/NasaHeader'


class App extends Component {
  state = {
    pictures: []
  }
  render(){

    return (
      <div className="App">
       
        <NasaHeader/>
        <PictureScroll/>

      
      </div>
    );
  }
}

export default App;
