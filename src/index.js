import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import Counter from './components/counter';


const element = <button class="btn btn-warning">Hello World</button>;

ReactDOM.render(<Counter/>, document.getElementById('root'));



serviceWorker.unregister();
