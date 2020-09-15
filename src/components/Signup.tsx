import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useJob, setJobs } from '../Context/JobContext';

const Signup = () => {
  const history = useHistory();

  function login() {
    history.push('/');
  }

  async function checkAccount(e) {
    e.preventDefault();

    let username = e.target.username.value;
    let password = e.target.password.value;

    try {
      const data = await fetch('/createUser', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username, password: password }),
      });
      alert('Account has been created');
      history.push('/');
    } catch (e) {
      alert('username already exists');
    }
  }

  return (
    <div className="login">
      <h1>Pipeline - Signup</h1>
      <form onSubmit={checkAccount} className="log-in">
        <input name="username" placeholder="Username" type="text" />
        <input name="password" placeholder="Password" type="text" />
        <button type="submit">Create Account</button>
        <button onClick={login}>Login</button>
      </form>
    </div>
  );
};

export default Signup;
