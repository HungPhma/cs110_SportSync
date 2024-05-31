import React from 'react';
import '../App.css';

const Signup = () => {
  return (
    <div className='sign-up-container'>
      <form className='sign-up-form'>
        <h2>Sign up</h2>
        <div className='form-group'>
          <label htmlFor='username'>Username:</label>
          <input className='input' type='text' placeholder='Username'/>
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email:</label>
          <input className='input' type='email' autoComplete='off' placeholder='Email'/>
        </div>

        <div className='form-group'>
          <label htmlFor='password'>Password:</label>
          <input className='input' type='password' placeholder='******'/>
        </div>

        <button type='submit'>Sign up</button>
      </form>
    </div>
  );
};

export default Signup;
