import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Hobbylist from './Hobbylist';
import Project from './Project';
import { Router, Route, Link } from 'react-router';

ReactDOM.render(<App />, document.getElementById('root'));

    const routing = () => (
        <Router>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/Hobbylist">List of Hobbies</Link>
              </li>
              <li>
                <Link to="/topics"></Link>
              </li>
            </ul>
      
            <hr />
          </div>
      

      <div>
        <Route path="/" component={App} />
        <Route path="/Hobbylist" component={Hobbylist} />
        <Route path="/Project" component={Project} />
      </div>
    </Router> )

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();





