import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import './styles/App.css'

import { ACCESS_TOKEN } from './constants';
import  LoadingIndicator from './components/LoadingIndicator';

import About from './screens/About';
import Hobbylist from './screens/Hobbylist';
import Addahobby from './screens/Addahobby';
import HobbyChat from './screens/HobbyChat';
import Signup from './screens/Signup';
import Login from './screens/Login';
import Header from './components/Header';
import { getCurrentUser } from './util/APIUtils';

import { Layout, notification } from 'antd';
import Logout from './components/Logout';
const { Content } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null,
      isAuthenticated: false,
      isLoading: false
    }
    
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
    if(localStorage.getItem(ACCESS_TOKEN) != null)
    {
    this.loadCurrentUser();
    }
  }

    handleLogin() {
      notification.success({
        message: 'Hobby App',
        description: "You're successfully logged in.",
      });

      this.loadCurrentUser();
      this.props.history.push("/hobbylist");
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
          <Switch>
                <Route exact path="/hobbylist" 
                  render={(props) => <Hobbylist isAuthenticated={this.state.isAuthenticated} 
                  currentUser={this.state.currentUser} handleLogout={this.handleLogout} {...props} />}>
                </Route>
                <Route exact path="/addahobby" 
                  render={(props) => <Addahobby isAuthenticated={this.state.isAuthenticated}
                  currentUser={this.state.currentUser} handleLogout={this.handleLogout} {...props} />}>
                </Route>
                <Route exact path="/about" 
                  render={(props) => <About isAuthenticated={this.state.isAuthenticated}
                  currentUser={this.state.currentUser} handleLogout={this.handleLogout} {...props} />}>
                </Route>
                <Route exact path="/hobbychat" 
                  render={(props) => <HobbyChat isAuthenticated={this.state.isAuthenticated}
                  currentUser={this.state.currentUser} handleLogout={this.handleLogout} {...props} />}>
                </Route>
                <Route path="/logout" component={Logout}></Route>
                <Route path="/login" 
                  render={(props) => <Login onLogin={this.handleLogin} {...props} />}>  
                </Route>
                {/* <Route path="/login" component={Login}></Route> */}
                <Route path="/signup" component={Signup}></Route>
                </Switch>    
          </BrowserRouter>
        </div>
      </Content>
      </Layout> 
    );
  }
}

export default App;






