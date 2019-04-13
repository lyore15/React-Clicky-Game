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

  pleaseWork = id => {
    const shuffleImage = this.state.shuffleImage;

    this.setState({ shuffleImage });

    if (this.state.clickedImage.includes(id)) {
      this.setState({ treks, score: 0, clickedImage: [] });
      console.log("Sorry, you lose!");

    } else {
      this.setState({
        clickedImage: this.state.clickedImage,
        score: this.state.score + 1,
      });
    }
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score});
    }
  }
  shuffleImage = trek => {
    for (let i = trek.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [treks[i], treks[j]] = [treks[j], treks[i]];
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
       
      {this.state.treks.map(trek => (
        <Card
            pleaseWork={this.pleaseWork}
            id={trek.id}
            key={trek.id}
            image={trek.image}
        />
    ))}
      
      />
    </div>
    );
  }
}

export default App;
