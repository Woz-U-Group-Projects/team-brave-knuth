import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './styles/index.css';
// import App from './App';
import Home from './screens/Home';
import Profile from './screens/Profile';
import About from './screens/About';
import Hobbylist from './screens/Hobbylist';
import HobbyChat from './screens/HobbyChat';
import { BrowserRouter as Router, Route} from 'react-router-dom';


const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/profile" component={Profile} />
      <Route path="/about" component={About} />
      <Route path="/hobbylist" component={Hobbylist} />
      <Route path="/hobbychat" component={HobbyChat} />
    </div>
  </Router>
);

const Index = ({ pathname }) => {
    switch (pathname) {
      case '/about':
        return <About />;
      case '/hobbychat':
        return <HobbyChat />;
        case '/profile':
         return <Profile />;
        case '/hobbylist':
        return <Hobbylist />;
      default:
        return <Home />;
    }
  };
  
  let pathname = window.location.pathname;
  render(<Index pathname={pathname} />, document.getElementById('root'));
  
  window.addEventListener('popstate', () => {
    pathname = window.location.pathname;
  });


 render(<App />, document.getElementById('root'));

 serviceWorker.unregister();
