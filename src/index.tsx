import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './styles/index.less';

const Login = (props: { name: string }) => {
  return <p>{props.name}</p>;
};

const Home = () => {
  const [count] = useState('seven');
  return (
    <div>
      <p className="wrap">
        <span className="wrap-a">12 {count}</span>
      </p>
      <Login name={count} />
    </div>
  );
};

ReactDOM.render(<Home />, document.getElementById('root'));
