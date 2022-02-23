import React from "react";

//exporting a functional component
export default (props) => (
  <div>
    <p clasName="App-intro">{props.text}</p>
    <p clasName="App-intro">{props.text1}</p>
  </div>
);

export const Body2 = () => (
  <div>
    <p>Hello from Body 2</p>;
  </div>
);

export const Body3 = () => (
  <div>
    <p>Hello from Body 3</p>;
  </div>
);
