import React from "react";
import logo from "../logo.svg";

export class Header extends React.Component {
  //older way of writing class components
  render() {
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">{this.props.title}</h1>
        <div>{this.props.num}</div>
        <div>{this.props.myObj.a}</div>
        <div>{this.props.myObj.b}</div>
        <div>{JSON.stringify(this.props.myObj)}</div>
        <div>{this.props.myArr[0]}</div>
        <div>{this.props.myName}</div>
        <div>{this.props.myFunc(10, 20)}</div>
        <div>{this.props.myFunc1(10, 20)}</div>
      </header>
    );
  }
}
