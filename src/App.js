import React, { Component } from "react";
import "./App.css";
import { Header } from "./components/Header";
import Body, { Body3, Body2 } from "./components/Body";

function App() {
  //latest react version
  return (
    <div className="App">
      <Header
        title="Hello World from React"
        num={5}
        myObj={{
          a: 5,
          b: 6,
        }}
        myArr={[1, 2, 3]}
        myName="Christian"
        myFunc={this.add}
        myFunc1={(a, b) => a + b} //Labda function
      />
      <Body2 />
      <Body text="I am gahiii" text1="I'm gahiii too" />
      <Body3 />
    </div>
  );
}

export default App;
