import React from 'react';
import "./reset.css"
import "./App.scss"
// import {Component} from "react"

import { Link } from "react-router";
import logo from "./asserts/cnodejs_light.svg"

// class App extends Component () {
//   constructor(props) {
//       super(props);
//   }
//   render () {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <div className="header-logo">
//             <img src={logo} alt="" /> 
//           </div>
//           <div className="header-search">
//             <input />
//           </div>
//           <ul className="header-tab">
//             <li>首页</li>
//             <li>新手入门</li>
//             <li>API</li>
//             <li>关于</li>
//             <li>注册</li>
//             <li>登陆</li>
//           </ul>
//         </header>
//         {this.props.children}
//       </div>
//     );
//   }
// }

function App (props) {
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
            <li><Link to="home">首页</Link></li>
            <li><Link to="getstart">新手入门</Link></li>
            <li><Link to="api">API</Link></li>
            <li><Link to="about">关于</Link></li>
            <li><Link to="register">注册</Link></li>
            <li><Link to="login">登陆</Link></li>
          </ul>
        </header>
        {props.children}
      </div>
    );
}

export default App;
