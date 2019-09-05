import React from 'react';
import "./App.css"
import "./reset.css"
import logo from "./asserts/cnodejs_light.svg"

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div className="header-logo">
          <img src={logo} alt="" /> 
        </div>
        <div className="header-search">
          <input />
        </div>
        <ul className="header-tab">
          <li>首页</li>
          <li>新手入门</li>
          <li>API</li>
          <li>关于</li>
          <li>注册</li>
          <li>登陆</li>
        </ul>
      </header>
      {this.props.children}
    </div>
  );
}

export default App;
