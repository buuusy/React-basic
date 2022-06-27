import React, { useState } from 'react';

const Say = () => {
  //배열을 요소를 구조분해할 이름은 마음대로 지어도됨
  const [message, setMessage] = useState('');
  //useState 인자= 초기값. 리턴값 = 배열[초기값,세터함수]. 첫번째 파라미터 = 현재값(상태), 두번째파라미터 =  상태를 바꾸어 주는 함수
  const onClickEnter = () => setMessage('안녕하세요!');
  const onClickLeave = () => setMessage('안녕히 가세요!');

  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        빨간색
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        초록색
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        파란색
      </button>
    </div>
  );
};

export default Say;
