import React from "react";
import axios from "axios";
import "./App.css";
class App extends React.Component {
  state = {
    advice: "",
  };

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios("https://api.adviceslip.com/advice")
      // .then((response) => {

      .then((result) => {
        //const { advice } = result.slip;
        // const { advice } = result.slip;
        const { advice } = result.data.slip;
        console.log(advice);

        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>Give Me Advice!</span>
          </button>
        </div>
      </div>
    );
  }
}
export default App;
