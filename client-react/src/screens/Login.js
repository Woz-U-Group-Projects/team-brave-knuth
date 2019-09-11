import React, { Component } from 'react';
import { login } from '../util/APIUtils';
import '../styles/Login.css';
import { Link } from 'react-router-dom';
import { ACCESS_TOKEN } from '../constants';
import { Row, Col } from 'react-bootstrap';
// import garden from '../images/garden.jpg';
// import skiing from '../images/skiiig.jpg';
// import hobby from '../images/hobby-icon.jpg';

import { Form, Input, Button, notification } from 'antd';

class Login extends Component {
    constructor(props) {
    super(props);
    this.state = {
        usernameOrEmail: {
            value: ''
        },
        password: {
            value: ''
        }
    }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleInputChange(event) {
        const target = event.target;
        const inputName = target.name;        
        const inputValue = target.value;

        this.setState({
            [inputName] : {
                value: inputValue
            }
        });
    }

    handleSubmit = event => {
        event.preventDefault();   

        const loginRequest = {
            usernameOrEmail: this.state.usernameOrEmail.value,
            password: this.state.password.value
        };
        login(loginRequest)
        .then(response => {
            localStorage.setItem(ACCESS_TOKEN, response.accessToken);
            this.props.history.push("/hobbylist");
        }).catch(error => {
            notification.error({
                message: 'Hobby App',
                description: 'Your Username or Password is incorrect. Please try again!'
            });                    
        });
    }

    render() {
        return (
           <div className="form-flex">
            <Row>
            <Col md={{ span: 3, offset: 3 }}>
            <Form onSubmit={this.handleSubmit} className="login-form">
                <Form.Item
                label="Username">  
                <Input 
                    size="large"
                    name="username"
                    autoComplete="off"
                    placeholder="Your username"
                    value={this.state.username.value} 
                    onChange={(event) => this.handleInputChange(event)} />    
                </Form.Item>
                <Form.Item
                label="Password">
                <Input 
                    size="large"
                    name="password" 
                    type="password"
                    autoComplete="off"
                    placeholder="Your Password" 
                    value={this.state.password.value} 
                    onChange={(event) => this.handleInputChange(event)} />    
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" size="large" className="login-form-button">Login</Button>
                    Or <Link to="/signup">register now!</Link>
                </Form.Item>
            </Form>
            </Col>
            </Row>
            <Row>
            <Col sm={4}>
                <div className="theBox">
                    {/* We help make connecting with like minded individuals easier
                    <img src={garden} alt='garden' /> */}
                </div>
            </Col>
            <Col sm={4}>
                <div className="theBox">
                    {/* No matter your hobby
                    <img src={hobby} alt='garden' /> */}
                </div>
            </Col>
            <Col sm={4}>
                <div className="theBox">
                    {/* Login to get started on your journey
                    <img src={skiing} alt='garden' /> */}
                </div>   
            </Col>
            </Row>
            </div>
        );
    }
}


export default Login;









// import React, { Component } from 'react';
// import { login } from '../util/APIUtils';
// import '../styles/Login.css';
// import { Link } from 'react-router-dom';
// import { ACCESS_TOKEN } from '../constants';
// import { Row, Col } from 'react-bootstrap';
// import garden from '../images/garden.jpg';
// import skiing from '../images/skiiig.jpg';
// import hobby from '../images/hobby-icon.jpg';

// import { Form, Input, Button, Icon, notification } from 'antd';

// class Login extends Component {
//     constructor(props) {
//     super(props);
//         this.handleSubmit = this.handleSubmit.bind(this);
        
//     }

//     handleSubmit(event) {
//         event.preventDefault();   
//         this.props.form.validateFields((err, values) => {
//             if (!err) {
//                 const loginRequest = Object.assign({}, values);
//                 login(loginRequest)
//                 .then(response => {
//                     localStorage.setItem(ACCESS_TOKEN, response.accessToken);
//                     this.props.onLogin();
//                 }).catch(error => {
//                     if(error.status === 401) {
//                         notification.error({
//                             message: 'Hobby App',
//                             description: 'Your Username or Password is incorrect. Please try again!'
//                         });                    
//                     } 
//                 });
//             }
//         });
//     }

//     render() {
//         const { getFieldDecorator } = this.props.form;
//         return (
//             [
//             <NormalLoginForm onLogin={this.props.onLogin} {...this.props} />
//            ],
//            <div className="form-flex">
//             <Row>
//             <Col md={{ span: 3, offset: 3 }}>
//             <Form onSubmit={this.handleSubmit} className="login-form">
//                 <Form.Item>
//                     {getFieldDecorator('usernameOrEmail', {
//                         rules: [{ required: true, message: 'Please input your username or email!' }],
//                     })(
//                     <Input 
//                         prefix={<Icon type="user" />}
//                         size="large"
//                         name="usernameOrEmail" 
//                         placeholder="Username or Email" />    
//                     )}
//                 </Form.Item>
//                 <Form.Item>
//                 {getFieldDecorator('password', {
//                     rules: [{ required: true, message: 'Please input your Password!' }],
//                 })(
//                     <Input 
//                         prefix={<Icon type="lock" />}
//                         size="large"
//                         name="password" 
//                         type="password" 
//                         placeholder="Password"  />                        
//                 )}
//                 </Form.Item>
//                 <Form.Item>
//                     <Button type="primary" htmlType="submit" size="large" className="login-form-button">Login</Button>
//                     Or <Link to="/signup">register now!</Link>
//                 </Form.Item>
//             </Form>
//             </Col>
//             </Row>
//             <Row>
//             <Col sm={4}>
//                 <div className="theBox">
//                     We help make connecting with like minded individuals easier
//                     <img src={garden} alt='garden' />
//                 </div>
//             </Col>
//             <Col sm={4}>
//                 <div className="theBox">
//                     No matter your hobby
                    
//                     <img src={hobby} alt='garden' />
//                 </div>
//             </Col>
//             <Col sm={4}>
//                 <div className="theBox">
//                     Login to get started on your journey
//                     <img src={skiing} alt='garden' />
//                 </div>   
//             </Col>
//             </Row>
//             </div>
//         );
//     }
// }

// const NormalLoginForm = Form.create()(Login)
// export default NormalLoginForm;



