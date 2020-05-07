import React from "react";
import { Link } from "react-router";
import "./reset.css";
import "./App.scss";
import logo from "./asserts/cnodejs_light.svg";
import { Footer } from "./components/index";

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

function App(props) {
  const searchHandler = function (e) {
    console.log("keyCode", e.keyCode);
    console.log("value", e.target.value);
    const {
      keyCode,
      target: { value },
    } = e;
    if (keyCode === 13) {
      window.open(
        "https://www.google.com.hk/search?hl=zh-CN&q=site:cnodejs.org+2020&cad=" +
          value
      );
    }
  };
  return (
    <div className="App">
      <div className="App-header-container">
        <header className="App-header">
          <div className="header-logo">
            <img src={logo} alt="" />
          </div>
          <div className="header-search">
            <input onKeyUp={searchHandler} />
          </div>
          <ul className="header-tab">
            <li>
              <Link to="home">首页</Link>
            </li>
            <li>
              <Link to="getstart">新手入门</Link>
            </li>
            <li>
              <Link to="api">API</Link>
            </li>
            <li>
              <Link to="about">关于</Link>
            </li>
            <li>
              <Link to="register">注册</Link>
            </li>
            <li>
              <Link to="login">登陆</Link>
            </li>
          </ul>
        </header>
      </div>
      {props.children}
      <div className="App-footer-container">
        <Footer />
      </div>
    </div>
  );
}

export default App;
