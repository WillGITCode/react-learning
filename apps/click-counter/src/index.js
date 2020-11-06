import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      clickCount: 0,
      hasBeenClicked: false
    }
  }

  onClick() {
    const newState = {
      clickCount: this.state.clickCount + 1,
      hasBeenClicked: true
    }
    this.setState(newState);
  }

  render() {
    const buttonText = !this.state.hasBeenClicked ?
      'Click Me!' :
      'Again!';

    return (
      <div className="app">
        <h1>This is my clicker app</h1>
        <h2>Go ahead and have at it!</h2>
        <button
          onClick={() => this.onClick()}>
          {buttonText}
        </button>
        <h3>Count:
          {' ' + this.state.clickCount}
        </h3>
      </div>
    );
  }
}

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
