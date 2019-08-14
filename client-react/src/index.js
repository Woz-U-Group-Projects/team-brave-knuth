// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
// import Hobbylist from './Hobbylist';
// import Project from './Project';
// import { BrowserRouter as  Router, Route, Link } from 'react-router-dom';

//     const App = () => (
//         <Router>
//           <div>
//             <ul>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li>
//                 <Link to="/Hobbylist">List of Hobbies</Link>
//               </li>
//               <li>
//                 <Link to="/Project"></Link>
//               </li>
//             </ul>
      
//             <hr />
//           </div>
      

//       <div>
//         <Route path="/" component={App} />
//         <Route path="/Hobbylist" component={Hobbylist} />
//         <Route path="/Project" component={Project} />
//       </div>
//     </Router> 
//     )
//     ReactDOM.render(<App />, document.getElementById('root'));
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// 

import React from 'react';
import { render } from 'react-dom';
import * as serviceWorker from './serviceWorker';
import './index.css';
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
