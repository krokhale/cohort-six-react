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
import GrandChildComponent from "./grandchild-component";


class ChildComponent extends React.Component {

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



                    <h1>I am in the child component!</h1>

                    <GrandChildComponent />

                </header>
            </div>
        );
    }
}




export default ChildComponent

