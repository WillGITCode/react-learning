import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Calculator
        </a>
      </header>
      <CalculatorBody />
    </div>
  );
};

type DisplayScreenProps = {
  value: string
}

const DisplayScreen = (props: DisplayScreenProps) => {
  return (
    <div className="display-screen">
      {props.value}
    </div>
  );
};

export default App;


class CalculatorBody extends React.Component {
  constructor(props: object) {
    super(props);
    this.state = {
      display: ""
    };
  }

  render(): JSX.Element {
    return (
      <div className="Body-content">
        <DisplayScreen value="Value" />
        <div className="button-row">
          <button className="calc-button">{"<="}</button>
          <button className="calc-button">CE</button>
          <button className="calc-button">C</button>
          <button className="calc-button">+/-</button>
          <button className="calc-button">√</button>
        </div>
        <div className="button-row">
          <button className="calc-button">7</button>
          <button className="calc-button">8</button>
          <button className="calc-button">9</button>
          <button className="calc-button">/</button>
          <button className="calc-button">%</button>
        </div>
        <div className="button-row">
          <button className="calc-button">4</button>
          <button className="calc-button">5</button>
          <button className="calc-button">6</button>
          <button className="calc-button">*</button>
          <button className="calc-button">1/x{/*1/the numver*/}</button>
        </div>
        <div className="button-row">
          <button className="calc-button">1</button>
          <button className="calc-button">2</button>
          <button className="calc-button">3</button>
          <button className="calc-button">-</button>
          <button className="calc-button">π</button>
        </div>
        <div className="button-row">
          <button className="calc-button-double-width">0</button>
          <button className="calc-button">.</button>
          <button className="calc-button">+</button>
          <button className="calc-button">=</button>
        </div>
      </div>
    );
  }

}
