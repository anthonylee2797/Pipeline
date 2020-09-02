import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Login = () => {
  const history = useHistory();

  return (
    <div>
      <button
        onClick={() => {
          history.push('/pipeline');
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
