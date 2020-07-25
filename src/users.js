import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./button";

import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";
import App from "./App";
import About from "./about";


class Users extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        };

    }


    componentDidMount () {

    };


    render() {
        return (
            <div className="App">
                <header className="App-header">



                    <h1>I am in the users page/component!</h1>

                </header>
            </div>
        );
    }
}




export default Users

