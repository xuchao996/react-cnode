import React from 'react';
import ReactDOM from 'react-dom';

import { Router, hashHistory } from 'react-router'

import './index.css';
import router from "./routers/router.js";
// import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Router history={hashHistory} routes={router} />, document.getElementById('root'))


// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
