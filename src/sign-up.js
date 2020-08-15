import React from 'react';
import logo from './logo.svg';
import './App.css';

function SignUp() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1>Signup Component!</h1>

                <form method='POST' action={'http://localhost:3006/users/signup'}>
                    <label>Email</label>
                    <br/>
                    <input type={'email'} name={'email'}/>
                    <br/>
                    <label>Create a Password</label>
                    <br/>
                    <input type={'password'} name={'password'}/>
                    <br/>
                    <button type={'submit'}>Submit</button>
                </form>

            </header>
        </div>
    );
}

export default SignUp;
