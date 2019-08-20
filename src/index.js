import {Provider} from 'react-redux'
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Weather from './Components/weather';
import * as serviceWorker from './serviceWorker';
import {create_redux_store} from './store.js';
const store=create_redux_store();
ReactDOM.render(<Provider store={store}><Weather /></Provider>, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
