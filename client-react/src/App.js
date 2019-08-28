import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './screens/Home';
import Profile from './screens/Profile';
import About from './screens/About';
import Hobbylist from './screens/Hobbylist';
import HobbyChat from './screens/HobbyChat';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Header from './components/Header';
import Addahobby from './screens/Addahobby';
import { getCurrentUser } from './util/APIUtils';
import { ACCESS_TOKEN } from './constants';

// IMPORT CSS
import './styles/App.css'
import { Layout, notification } from 'antd';
const { Content } = Layout;

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isAuthenticated: false,
      isLoading: false
    }
    this.handleLogout = this.handleLogout.bind(this);
    this.loadCurrentUser = this.loadCurrentUser.bind(this);
    this.handleLogin = this.handleLogin.bind(this);

    notification.config({
      placement: 'topRight',
      top: 70,
      duration: 3,
    });    
  }

  loadCurrentUser() {
    this.setState({
      isLoading: true
    });
    getCurrentUser()
    .then(response => {
      this.setState({
        currentUser: response,
        isAuthenticated: true,
        isLoading: false
      });
    }).catch(error => {
      this.setState({
        isLoading: false
      });  
    });
  }

  componentDidMount() {
    this.loadCurrentUser();
  }

  handleLogout(redirectTo="/", notificationType="success", description="You're successfully logged out.") {
    localStorage.removeItem(ACCESS_TOKEN);

    this.setState({
      currentUser: null,
      isAuthenticated: false
    });

    this.props.history.push(redirectTo);
    
    notification[notificationType]({
      message: 'Hobby App',
      description: description,
    });
  }

  handleLogin() {
    notification.success({
      message: 'Hobby App',
      description: "You're successfully logged in.",
    });
    this.loadCurrentUser();
    this.props.history.push("/");
  }
  
  render() {    
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/signup" component={Signup} />
              <Route path="/login" component={Login} />
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