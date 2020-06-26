import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {

    };

  }


  componentDidMount () {
    console.log(this.props);
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

  render() {
    return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />

            <input onChange={this.updateFirstName}/>&nbsp;&nbsp;
            <input onChange={this.updateLastName}/>

            <br/>
            <button onClick={this.createDog}>Create a dog!</button>

            <br/>
            <br/>

            {this.state.dogs && this.state.dogs.map((dog) => {
              return <div key={dog.id}>
                <p>{dog.firstName} {dog.lastName}</p>
                <button onClick={() => this.fetchADog(dog.id)}>Fetch a Dog</button>&nbsp;
                <button onClick={() => this.deleteADog(dog.id)}>Delete Dog</button>
              </div>
            })}

            <button onClick={this.fetchDogs}>Show all the dogs</button>


            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
              Learn React
            </a>
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
