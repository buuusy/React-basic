import React, { useLayoutEffect } from 'react';

const IterationSample = () => {
  const names = ['눈사람', '얼음', '눈', '바람'];
  const nameList = names.map((name, i) => <li key={i}>{name}</li>);

  return <ul>{nameList}</ul>;
};

export default IterationSample;
