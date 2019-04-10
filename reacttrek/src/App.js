import React, { Component } from 'react';
import './App.css';
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header"
import trek from "./trek.json";

class App extends Component {
  state = {
    Card,
    score: 0,
    highScore: 0,
  };


  shuffleImage = id => {
    const clickedImageId = this.state.clickedImageId

    if (clickedImageId.id) {
      this.setState({ clickedImageId, score: 0});
      return;
    } else {
      clickedImageId.push(id)

      if (clickedImageId.length === 12) {
        this.setState({ score: 12, clickedImageId});
        console.log('You Win');
        return;
      }
      this.setState({ Card, clickedImageId, score: clickedImageId.length });

      for (let i = Card.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [Card[i], Card[j]] = [Card[j], Card[i]];
      }
    }
  }
  render() {
    return (
      <wrapper>
        <header className="header">
          <h1 className="title">To Boldy Click</h1>
          <p className="instructions">
            Click an image to begin! But don't click the same image more than once!
        </p>
        </header>
        <Card
         clickedImageId={this.clickedImageId}
         id={Card.id}
         image={Card.image}
            />
      </wrapper>
    );
  }
}
  export default App;
