// IMPORT PACKAGE REFERENCES
import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './screens/Home';
import Profile from './screens/Profile';
import About from './screens/About';
import Hobbylist from './screens/Hobbylist';
import HobbyChat from './screens/HobbyChat';
import Signup from './screens/Signup';
import Header from './components/Header';


// IMPORT COMPONENT REFERENCES

// IMPORT CSS
import './styles/App.css'
import Addahobby from './screens/Addahobby';


export default class App extends React.Component {
  render() {    
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Switch>
      <Route exact path="/" component={Home} />
    <Route path="/signup" component={Signup} />
       <Route path="/profile" component={Profile} />
       <Route path="/about" component={About} />
       <Route path="/hobbylist" component={Hobbylist} />
       <Route path="/addahobby" component={Addahobby} />
       <Route path="/hobbychat" component={HobbyChat} />
    </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
// export default function App() {
//   return (
//     <Switch>
//       <Route exact path="/" component={Home} />
//     <Route path="/signup" component={Signup} />
//        <Route path="/profile" component={Profile} />
//        <Route path="/about" component={About} />
//        <Route path="/hobbylist" component={Hobbylist} />
//        <Route path="/hobbychat" component={HobbyChat} />
//     </Switch>
//   )

// }











// // `App` COMPONENT
// class App extends Component {
// 	constructor(props) {
// 		super(props);
		
//   }
// 	render() {
// 		return (
// 			// Don't forget your routing!
// 			//Hint! Look at the import statements to see what you need to use to route
// 			<BrowserRouter>
// 			</BrowserRouter>
	  	
	  
//     )}};

// export default App;


// class App extends React.Component {
// 	render() {
// 	  return (
// 		<div>
// 		  <Header />
// 		</div>
// 	  );
// 	}
//   }
  


