import React, {Component } from 'react';
import './App.css';
import {PictureScroll} from './components/PictureScroll'
import {NasaHeader} from './components/NasaHeader'
import {ShowPicture} from './components/ShowPicture'
const base = 'http://localhost:3000/nasas'


class App extends Component {
  state = {
    pictures: [],
    isClicked: false,
    hdurl: []
  }

  componentDidMount(){
    fetch(base)
    .then(response => response.json())
    .then(pictures => this.setState({pictures}))
  }

  showImage = picture => {
    this.setState({
      isClicked:true,
      hdurl: picture.hdurl})
  }
  
  


  render(){

    
    return (
      <div className="App">
       
        <NasaHeader/>
        {this.state.isClicked===true ? <ShowPicture hdurl={this.state.hdurl}/> : <PictureScroll pictures={this.state.pictures} showImage={this.showImage}/>}
        

      
      </div>
    );
  }
}

export default App;
