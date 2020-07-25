import React from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends React.Component {

    constructor(props){
        super(props);
        this.state = {

        };

    }


    componentDidMount () {
        console.log(this.props)
        // this.setProps
        // this.props.color='green'

    };


    render() {
        return (
            <div className="App">

                <button onClick={this.props.onButtonClick}
                        style={{
                    color: this.props.textColor,
                    padding: this.props.padding,
                    backgroundColor: this.props.backgroundColor}}>{this.props.text}</button>

            </div>
        );
    }
}




export default Button



