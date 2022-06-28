import React, { useState } from 'react';

const EventPracice_f = () => {
  const [username, setUsername] = useState('');

  const [message, setMassage] = useState('');

  const onChangeUsername = (e) => setUsername(e.target.value);

  const onChangemessage = (e) => setMassage(e.target.value);

  const onClick = () => {
    alert(username + ':' + message);
    setUsername('');
    setMassage('');
  };

  const onKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChangeUsername}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나"
        value={message}
        onChange={onChangemessage}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

export default EventPracice_f;
