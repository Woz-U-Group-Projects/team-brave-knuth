import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './styles/index.css';
import App from './App';
import Home from './screens/Home';
import Profile from './screens/Profile';
import About from './screens/About';
import Hobbylist from './screens/Hobbylist';
import HobbyChat from './screens/HobbyChat';
import Signup from './screens/Signup';
import Header from './components/Header'
import { BrowserRouter as Router, Route} from 'react-router-dom';


render( <App />, document.getElementById('root'));
