import React from 'react';
import logo from '../../logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      operationString: '',
      currentValue: '0',
      operatorMode: false,
      results: ''
    }
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>React Calculator</p>
        </header>
        <div className='App-body'>
          <DisplayScreen currentValue={this.state.currentValue} operationString={this.state.operationString} />
          <Keypad
            onClick={(e) => this.handleClick(e)}
          />
        </div>
      </div>
    );
  }

  initState = () => {
    this.setState({
      operationString: '',
      currentValue: '0',
      results: ''
    });
  }

  handleClick = (button) => {
    switch (button) {
      case 'C':
        this.initState();
        break;
      case 'CE':
        this.clearInput();
        break;
      case '1/X':
        alert("1/x");
        break;
      case '=':
        this.runOperation();
        break;
      case 'Back':
        this.backSpace();
        break;
      case 'π':
        this.appendPi();
        break;
      case '+':
      case '-':
      case '/':
      case '*':
        this.appendOperation(button)
        break;
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '0':
      case '.':
        this.appendValue(button)
        break
      default:
        alert('Clicked: ' + button);
    }
  }

  clearInput = () => {
    this.setState({
      currentValue: '0'
    });
  }

  backSpace = () => {
    if (!this.state.operatorMode) {
      this.setState({
        currentValue: this.state.currentValue && this.state.currentValue.length > 1 ?
          this.state.currentValue.slice(0, this.state.currentValue.length - 1) :
          this.state.currentValue
      });
    }
  }

  appendPi = () => {
    if (this.state.operatorMode || this.state.currentValue === '0') {
      this.setState({
        currentValue: Math.PI.toString(),
        operatorMode: false
      })
    }
  }

  runOperation = () => {
    alert('======');
  }

  appendValue = (n) => {
    this.setState({
      currentValue: this.state.operatorMode ?
        n :
        this.state.currentValue === '0' ?
          n :
          this.state.currentValue + n,
      operatorMode: false
    });
  }

  appendOperation = (o) => {
    if (!this.state.operatorMode)
      this.setState({
        operationString: this.state.operationString + this.state.currentValue + o,
        operatorMode: true
      });
  }

}

export default App;

const DisplayScreen = (props) => {
  return (
    <div className='body-column'>
      <div className='display-screen'>
        <h6 className='op-string'>{props.operationString}</h6>
        <h5 className='current-val'>{props.currentValue}</h5>
      </div>
    </div>
  );
};

const Keypad = (props) => {
  return (
    <div className='body-column'>
      <div className='button-row'>
        <button name='Back' onClick={e => props.onClick(e.target.name)} className='calc-button'>Back</button>
        <button name='CE' onClick={e => props.onClick(e.target.name)} className='calc-button'>CE</button>
        <button name='C' onClick={e => props.onClick(e.target.name)} className='calc-button'>C</button>
        <button name='+/-' onClick={e => props.onClick(e.target.name)} className='calc-button'>+/-</button>
        <button name='√' onClick={e => props.onClick(e.target.name)} className='calc-button'>√</button>
      </div>
      <div className='button-row'>
        <button name='7' onClick={e => props.onClick(e.target.name)} className='calc-button'>7</button>
        <button name='8' onClick={e => props.onClick(e.target.name)} className='calc-button'>8</button>
        <button name='9' onClick={e => props.onClick(e.target.name)} className='calc-button'>9</button>
        <button name='/' onClick={e => props.onClick(e.target.name)} className='calc-button'>/</button>
        <button name='%' onClick={e => props.onClick(e.target.name)} className='calc-button'>%</button>
      </div>
      <div className='button-row'>
        <button name='4' onClick={e => props.onClick(e.target.name)} className='calc-button'>4</button>
        <button name='5' onClick={e => props.onClick(e.target.name)} className='calc-button'>5</button>
        <button name='6' onClick={e => props.onClick(e.target.name)} className='calc-button'>6</button>
        <button name='*' onClick={e => props.onClick(e.target.name)} className='calc-button'>*</button>
        <button name='1/X' onClick={e => props.onClick(e.target.name)} className='calc-button'>1/X{/*1/the numver*/}</button>
      </div>
      <div className='button-row'>
        <button name='1' onClick={e => props.onClick(e.target.name)} className='calc-button'>1</button>
        <button name='2' onClick={e => props.onClick(e.target.name)} className='calc-button'>2</button>
        <button name='3' onClick={e => props.onClick(e.target.name)} className='calc-button'>3</button>
        <button name='-' onClick={e => props.onClick(e.target.name)} className='calc-button'>-</button>
        <button name='π' onClick={e => props.onClick(e.target.name)} className='calc-button'>π</button>
      </div>
      <div className='button-row'>
        <button name='0' onClick={e => props.onClick(e.target.name)} className='calc-button-double-width'>0</button>
        <button name='.' onClick={e => props.onClick(e.target.name)} className='calc-button'>.</button>
        <button name='+' onClick={e => props.onClick(e.target.name)} className='calc-button'>+</button>
        <button name='=' onClick={e => props.onClick(e.target.name)} className='calc-button'>=</button>
      </div>
    </div>
  );
}

