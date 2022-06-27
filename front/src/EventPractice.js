import React, { Component } from 'react';

class EventPractice extends Component {
  state = { message: '' };

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="massage"
          placeholder="아무거나 입력해"
          value={this.state.massage}
          onChange={(e) => this.setState({ massage: e.target.value })}
        />
        <button
          onClick={() => {
            alert(this.state.massage);
            this.setState({ message: '' });
          }}
        >
          확인
        </button>
      </div>
    );
  }
}

export default EventPractice;
