import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import Profile from './screens/Profile';
import Hobbylist from './screens/Hobbylist';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Header from './components/Header';
import { getCurrentUser } from './util/APIUtils';
import { ACCESS_TOKEN } from './constants';
import  LoadingIndicator from './components/LoadingIndicator';

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
    if(this.state.isLoading) {
      return <LoadingIndicator />
    }  
    return (
      <Layout className="app-container">
          <Header isAuthenticated={this.state.isAuthenticated} 
            currentUser={this.state.currentUser} 
            onLogout={this.handleLogout} />
      <Content className="app-content">
        <div className="container">
          <BrowserRouter>      
                <Route exact path="/" 
                  render={(props) => <Hobbylist isAuthenticated={this.state.isAuthenticated} 
                  currentUser={this.state.currentUser} handleLogout={this.handleLogout} {...props} />}>
                </Route>
                <Route path="/login" 
                  render={(props) => <Login onLogin={this.handleLogin} {...props} />}></Route>
                <Route path="/signup" component={Signup}></Route>
                <Route path="/users/:username" 
                  render={(props) => <Profile isAuthenticated={this.state.isAuthenticated} currentUser={this.state.currentUser} {...props}  />}>
                </Route>
          </BrowserRouter>
        </div>
      </Content>
      </Layout> 
    );
  }
}


