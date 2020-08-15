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

import Users from "./users";
import About from "./about";
import ChildComponent from "./child-component";
import Functional from "./functional";
import Login from "./login";
import Dashboard from "./dashoard";
import SignUp from "./sign-up";

// const Home = () => <div>Home</div>;
// const About = () => <div>About</div>;
// const Users = ({ match }) => <div>{match.url}</div>;

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      items: [5, 6, 7, 8],
      name: 'John',
      myText: '',
      count: 0,
      textColor: 'white'
    };

  }


  // componentWillUnmount () {
  //   executed just before the component unmounts
  //
  // }

  componentDidMount () {
    console.log(this.props);
    // setInterval(() => {
    //   let currentCount = this.state.count;
    //   currentCount = currentCount + 1;
    //   this.setState({currentCount: currentCount});
    // })
    setTimeout(() => {
      // this.state.name = 'Jane'
      this.setState({name: 'Jane'});
      // let currentItems = this.state.items;
      // currentItems.push(9);
      // currentItems.push(10);
      // currentItems.push(11);
      // this.setState({items: currentItems});
    }, 5000)
  };

  fetchDogs = async () => {
    console.log('fetching!');
    let results = await fetch('http://localhost:3006/dogs');
    let dogs = await results.json();
    console.log(dogs);
    this.setState({dogs: dogs});
  }

  fetchADog = async (dogId) => {
    console.log(dogId);
    let result = await fetch(`http://localhost:3006/dogs/${dogId}`);
    let dog = await result.json();
    console.log(dog);
  }

  updateFirstName = (event) => {
    console.log(event.currentTarget.value);
    this.setState({firstName: event.currentTarget.value});
  }

  updateLastName = (event) => {
    console.log(event.currentTarget.value);
    this.setState({lastName: event.currentTarget.value});
  }

  createDog = async () => {
    let body = {firstName: this.state.firstName, lastName: this.state.lastName};
    let result = await fetch(`http://localhost:3006/dogs`, {method: 'POST', body: JSON.stringify(body), headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }});
    let newDog = await result.json();
    console.log(newDog);
  }

  deleteADog = async (dogId) => {
    console.log(dogId);
    let result = await fetch(`http://localhost:3006/dogs/${dogId}`, {method: 'DELETE'});
    let dog = await result.json();
    console.log(dog);
  }

  showFirstName = (event) => {
    console.log(event.currentTarget.value);
    this.setState({myText: event.currentTarget.value});
  }

  showAnAlert = () => {
    console.log('yay')
    let currentCount = this.state.count;
    currentCount = currentCount + 1;
    if(currentCount == 10) {
      currentCount = 0;
      this.setState({textColor: 'blue'})
    }
    this.setState({count: currentCount});
  }

  showName = (number) => {

    console.log('the data from the child is', number);

  };

  render() {
    return (
        <div className="App">
          <header className="App-header">
            {/*<img src={logo} className="App-logo" alt="logo" />*/}


            {/*<Functional />*/}

            {/*<ChildComponent />*/}





            <BrowserRouter>
              <div>
                {/*<ul>*/}
                {/*  <li>*/}
                {/*    <Link to="/">Home</Link>*/}
                {/*  </li>*/}
                {/*  <li>*/}
                {/*    <Link to="/about">About</Link>*/}
                {/*  </li>*/}
                {/*  <li>*/}
                {/*    <Link to="/users">Users</Link>{" "}*/}
                {/*  </li>*/}
                {/*</ul>*/}
                <hr />
                {/*<Route exact path="/" component={App} />*/}
                <Route path="/about" component={About} />
                <Route path="/users" component={Users} />
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUp} />
                <Route path="/dashboard" component={Dashboard} />
              </div>
            </BrowserRouter>



            {/*<h1>{this.state.name}</h1>*/}




            {/*<Button text={'Show user name'}*/}
            {/*        onButtonClick={this.showName}*/}
            {/*        textColor={'#fff'}*/}
            {/*        padding={'15px'}*/}
            {/*        backgroundColor={'blue'}  />*/}

            {/*{this.state.items.map((item) => {*/}
            {/*  return <Button text={item}*/}
            {/*                 onButtonClick={this.showName}*/}
            {/*                 textColor={'#fff'}*/}
            {/*                 padding={'15px'}*/}
            {/*                 backgroundColor={'blue'}  />*/}
            {/*})}*/}

            {/*<Button text={'Click this'}*/}
            {/*        textColor={'#fff'}*/}
            {/*        padding={'10px'}*/}
            {/*        backgroundColor={'red'} />*/}




            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}




            {/*{this.state.items.map((item) => {*/}
            {/*  return <p key={item}>{item}</p>*/}
            {/*})}*/}

            {/*<input onChange={this.showFirstName}/>&nbsp;&nbsp;*/}
            {/*/!*<input onChange={this.updateFirstName}/>&nbsp;&nbsp;*!/*/}

            {/*<p>{this.state.myText}</p>*/}

            {/*<button onClick={this.showAnAlert}>Click me</button>*/}

            {/*<p style={{color: this.state.textColor}} className={this.state.count<5 ? 'less-than-10-class' : 'greater-than-10-class'}>Count: {this.state.count}</p>*/}

            {/*{this.state.count==5 ? <h1>The count is 5!</h1> : <h1>The count is not 5!</h1>}*/}

            {/*{(this.state.count==5) && (this.state.myText=='Jane') && <h1>The count is 5 and the text is Jane!</h1>}*/}

            {/*<br/>*/}
            {/*<br/>*/}
            {/*<br/>*/}

            {/*<select name="" id="states">*/}

            {/*</select>*/}

            {/*<input onChange={this.updateLastName}/>*/}

            {/*<br/>*/}
            {/*<button onClick={this.createDog}>Create a dog!</button>*/}

            {/*<br/>*/}
            {/*<br/>*/}

            {this.state.dogs && this.state.dogs.map((dog) => {
              return <div key={dog.id}>
                <p>{dog.firstName} {dog.lastName}</p>
                <button onClick={() => this.fetchADog(dog.id)}>Fetch a Dog</button>&nbsp;
                <button onClick={() => this.deleteADog(dog.id)}>Delete Dog</button>
              </div>
            })}

            <button onClick={this.fetchDogs}>Show all the dogs</button>


            {/*<p>*/}
            {/*  Edit <code>src/App.js</code> and save to reload.*/}
            {/*</p>*/}
            {/*<a*/}
            {/*    className="App-link"*/}
            {/*    href="https://reactjs.org"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*>*/}
            {/*  Learn React*/}
            {/*</a>*/}
          </header>
        </div>
    );
  }
}




export default App









// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;
