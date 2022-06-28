import React, { Component } from 'react';

class EventPractice extends Component {
  state = { message: '' };

  constructor(props) {
    super(props); // 수퍼클래스의 생성자를 불러와서 props를 넣어줍니다
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange = (e) => {
    this.setState({ message: e.target.value });
  };

  handleClick(e) {
    this.setState({ message: '' });
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="massage"
          placeholder="아무거나 입력해"
          value={this.state.massage}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>확인</button>
      </div>
    );
  }
}

export default EventPractice;
