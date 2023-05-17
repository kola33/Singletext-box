import React from 'react';

class Singletextbox extends React.Component {
  constructor() {
    super();
    this.state = {
      y: '',
      x: ['HI', 'hello'],
    };
  }
  render() {
    return (
      <div>
        {this.state.y}
        <input
          type="text"
          onChange={(e) => {
            this.setState({ y: e.target.value });
          }}
        />
        <button
          onClick={() => {
            this.setState({ x: [...this.state.x, this.state.y] });
          }}
        >
          {' '}
          click me
        </button>
        <ul>
          {this.state.x.map((fr, i) => {
            return <li key={i}>{fr}</li>;
          })}
        </ul>
      </div>
    );
  }
}
export default Singletextbox;
