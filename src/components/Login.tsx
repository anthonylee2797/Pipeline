import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useJob, setJobs } from '../Context/JobContext';

const Login = () => {
  const history = useHistory();
  const jobs = useJob();
  const setJobss = setJobs();

  function signUp() {
    history.push('/signup');
  }

  async function checkLogin(e) {
    e.preventDefault();
    let username = e.target.username.value;
    let password = e.target.password.value;

    try {
      const data = await fetch('/checkUser', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: username, password: password }),
      });

      const userInformation = await data.json();
      setJobss(userInformation);
      history.push('/pipeline');
    } catch (e) {
      alert('wrong username/password');
    }
  }

  return (
    <div className="login">
      <h1>Pipeline</h1>
      <form onSubmit={checkLogin} className="log-in">
        <input name="username" placeholder="Username" type="text" />
        <input name="password" placeholder="Password" type="text" />
        <button type="submit">Sign In</button>
        <button type="button" onClick={signUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Login;
