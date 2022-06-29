import React, { Component } from 'react';
import './ValidationSample.css';

class ValidationSample extends Component {
  state = {
    password: '',
    clicked: false,
    validated: false,
  };

  //input에 패스워드가 넣는 이벤트가 발생하면 password 상태값을 업데이트하는 함수
  handleChange = (e) => {
    this.setState({ password: e.target.value });
  };

  // 버튼 클릭이벤트가 발생하면 상태값을 변화시킴
  //validated 값은 검증 결과
  handleButtonClick = (e) => {
    this.setState({
      clicked: true,
      validated: this.state.password === '0000',
    });
    this.input.focus();
  };

  render() {
    return (
      <div>
        <input
          ref={(ref) => (this.input = ref)}
          type="password"
          value={this.state.password}
          onChange={this.handleChange}
          //검증버튼이 눌렷니? (트루), 그런데 패스워드가 0000이면 초록, 아니면 코랄
          className={
            this.state.clicked
              ? this.state.validated
                ? 'success'
                : 'failure'
              : ''
          }
        />
        <button onClick={this.handleButtonClick}>검증하기</button>
      </div>
    );
  }
}

export default ValidationSample;
