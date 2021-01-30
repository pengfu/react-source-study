import * as ReactDOM from "react-dom";
import * as React from "react";
import {Component} from "react";

export default function App() {
    return (
      <div className="App">
        <div className="container">
          <h1>我是标题</h1>
          <p>我是第一段话</p>
          <p>我是第二段话</p>
        </div>
      </div>
    );
}

// const rootElement = document.getElementById("root");
// ReactDOM.render(<App />, rootElement);