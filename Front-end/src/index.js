import React from 'react';
import ReactDOM from 'react-dom';
import '../src/Assets/Styles/index.css';
import App from './Assets/Javascript/App';
import * as serviceWorker from './Assets/Javascript/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
