import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './styles/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';



render( <App />, document.getElementById('root'));
serviceWorker.unregister();