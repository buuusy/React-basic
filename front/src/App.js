import React, { Component } from 'react';
import LifeCycleSample from './LifeCycleSample';
import ErrorBoudary from './ErrorBoudary';

function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {
  state = { color: '#000000' };

  handleClick = () => {
    this.setState({ color: getRandomColor() });
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>랜덤색상</button>
        <ErrorBoudary>
          <LifeCycleSample color={this.state.color} />
        </ErrorBoudary>
      </div>
    );
  }
}

export default App;
