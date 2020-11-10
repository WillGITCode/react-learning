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
  currentValue: string
  operationString: string
}

const DisplayScreen = (props: DisplayScreenProps) => {
  return (
    <div className="display-screen">
      <h6 className="op-string">{props.operationString}</h6>
      <h5 className="current-val">{props.currentValue}</h5>
    </div>
  );
};

export default App;

type CalcBodyState = {
  display: string;
  operationString: string;
  operation: number;
  valuePhase: boolean;
  error: boolean;
}

class CalculatorBody extends React.Component<{}, CalcBodyState> {
  constructor(props: object) {
    super(props);
    this.state = {
      display: '0',
      operationString: '',
      operation: 0,
      valuePhase: true,
      error: false
    };
  }

  private handleValueClick = (i: string) => {
    const newState:CalcBodyState ={};
    if(this.state.valuePhase){

    }else{
    newState["operation"] = this.state.operation + 1;
    newState["display"] = this.state.display === "0" ?
          i :
          this.state.display + i;
    newState["valuePhase"]= true
    }
   
    this.setState(newState);
  }

  private handleOperationClick = (i: string) => {
    if (this.state.valuePhase) {
      this.setState({
        display: i,
        operationString: this.state.display,
        operation: this.state.operation + 1,
        valuePhase: false
      })
    }
  }

  render(): JSX.Element {
    return (
      <div className="body-content">
        <div className="body-column">
          <DisplayScreen currentValue={this.state.display} operationString={this.state.operationString} />
          <div className="button-row">
            <button onClick={() => this.handleOperationClick("")} className="calc-button">Back</button>
            <button onClick={() => this.handleOperationClick("CE")} className="calc-button">CE</button>
            <button onClick={() => this.handleOperationClick("C")} className="calc-button">C</button>
            <button onClick={() => this.handleOperationClick("+/-")} className="calc-button">+/-</button>
            <button onClick={() => this.handleOperationClick("√")} className="calc-button">√</button>
          </div>
          <div className="button-row">
            <button onClick={() => this.handleValueClick("7")} className="calc-button">7</button>
            <button onClick={() => this.handleValueClick("8")} className="calc-button">8</button>
            <button onClick={() => this.handleValueClick("9")} className="calc-button">9</button>
            <button onClick={() => this.handleValueClick("/")} className="calc-button">/</button>
            <button onClick={() => this.handleValueClick("%")} className="calc-button">%</button>
          </div>
          <div className="button-row">
            <button onClick={() => this.handleValueClick("4")} className="calc-button">4</button>
            <button onClick={() => this.handleValueClick("5")} className="calc-button">5</button>
            <button onClick={() => this.handleValueClick("6")} className="calc-button">6</button>
            <button onClick={() => this.handleValueClick("*")} className="calc-button">*</button>
            <button onClick={() => this.handleValueClick("1/x")} className="calc-button">1/x{/*1/the numver*/}</button>
          </div>
          <div className="button-row">
            <button onClick={() => this.handleValueClick("1")} className="calc-button">1</button>
            <button onClick={() => this.handleValueClick("2")} className="calc-button">2</button>
            <button onClick={() => this.handleValueClick("3")} className="calc-button">3</button>
            <button onClick={() => this.handleValueClick("-")} className="calc-button">-</button>
            <button onClick={() => this.handleValueClick("π")} className="calc-button">π</button>
          </div>
          <div className="button-row">
            <button onClick={() => this.handleValueClick("0")} className="calc-button-double-width">0</button>
            <button onClick={() => this.handleValueClick(".")} className="calc-button">.</button>
            <button onClick={() => this.handleOperationClick("+")} className="calc-button">+</button>
            <button onClick={() => this.handleOperationClick("=")} className="calc-button">=</button>
          </div>
        </div>
      </div>
    );
  }

}
