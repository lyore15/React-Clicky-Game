import React, { Component } from 'react';
import Card from "./components/Card";
import Header from "./components/Header"
import treks from "./trek.json";
import './App.css';

class App extends Component {
  state = {
    treks,
    score: 0,
    topScore: 0,
    clickedImage: [],
  };


  shuffleImage = (id) => {
    if (this.state.clickedImage.indexOf(id) > -1) {
      this.setState({
        treks: this.state.treks.sort(() => 0.5 - Math.random()),
        score: 0,
        topScore: this.state.score > this.state.topScore ? this.state.score : this.state.topScore,
        clickedImage: []
      })
    } else {
      this.setState({
        treks: this.state.treks.sort(() => 0.5 - Math.random()),
        score: this.state.score + 1,
        clickedImage: [...this.state.clickedImage, id]
      })
    }
  }

  render() {
    return (
      <div>
        <Header className="header">
          <h1 className="title">To Boldy Click</h1>
          <p className="instructions">
            Click an image to begin! But don't click the same image more than once!
        </p>
          <p>Score: {this.state.score} | Topscore: {this.state.topScore}</p>
        </Header>
        <div className="container">
          {this.state.treks.map(trek => (
            <Card
              shuffle={this.shuffleImage}
              id={trek.id}
              key={trek.id}
              image={trek.image}
            />
          ))}
        </div>

        />
    </div>
    );
  }
}

export default App;