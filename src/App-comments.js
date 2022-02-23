import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

// Creating a function (shorthand version) and most used in React
const Body = () => (
  <p clasName="App-intro">
    To get started, edit <code>src/App.js</code> and save to run.
  </p>
);

/*
const Body = () => { // Creating a function (with return method)
  return (
    <p clasName="App-intro">
      To get started, edit <code>src/App.js</code> and save to run.
    </p>
  );
}; */

/*
function Body () { // Creating a function (with the function keyword)
  return (
    <p clasName="App-intro">
      To get started, edit <code>src/App.js</code> and save to run.
    </p>
  );
}; */

class Header extends Component {
  //older way of writing class components
  render() {
    return (
      <header className="App-header">
        <img scr={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Welcome to React Flores</h1>
      </header>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}

// function App() { latest react version
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

export default App;
