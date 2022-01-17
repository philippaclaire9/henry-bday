import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

const Login = () => {
  const [user, setUser] = useState({ uid: '' });
  const [userInput, setUserInput] = useState({ email: '', password: '' });
  const auth = getAuth();

  const handleChange = ({ target }, input) => {
    const { value } = target;
    setUserInput((currInput) => {
      return { ...currInput, [input]: value };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, userInput.email, userInput.password)
      .then((userCredential) => {
        const user = userCredential.user;
        setUser((currUser) => {
          return { ...currUser, uid: user.uid };
        });
      })
      .catch((err) => {
        console.log(err.code, err.message);
      });
    setUserInput({ email: '', password: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="Login__form">
      <label htmlFor="email">Email address please</label>
      <input
        onChange={(event) => handleChange(event, 'email')}
        id="email"
        value={userInput.email}
        type="email"
      />
      <br />
      <label htmlFor="password">Password please</label>
      <input
        onChange={(event) => handleChange(event, 'password')}
        id="password"
        value={userInput.password}
        type="password"
      />
      <br />
      <button className="Login__button">
        Get cracking <span aria-label="fried-egg">🍳</span>
      </button>
    </form>
  );
};

export default Login;
