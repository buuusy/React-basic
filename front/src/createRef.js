import React, { Component } from 'react';

class CreateRef extends Component {
  //JSX의 input태그에 Ref를 지정하겠습니다.
  input = React.createRef();

  handleFocus = () => {
    this.input.current.focus();
  };

  render() {
    return (
      <div>
        <input ref={this.input} />
      </div>
    );
  }
}

export default CreateRef;
