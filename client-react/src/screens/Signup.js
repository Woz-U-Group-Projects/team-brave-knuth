import React, { Component } from 'react';
import { signup, checkUsernameAvailability, checkEmailAvailability } from '../util/APIUtils';
import '../styles/Signup.css';
import { Link } from 'react-router-dom';
import { 
    NAME_MIN_LENGTH, NAME_MAX_LENGTH, 
    USERNAME_MIN_LENGTH, USERNAME_MAX_LENGTH,
    EMAIL_MAX_LENGTH,
    PASSWORD_MIN_LENGTH, PASSWORD_MAX_LENGTH
} from '../constants';

// import adventure from '..images/adventure1.jpg';
import { Form, notification } from 'antd';
import { Button, FormGroup, Label, Input, Container, Row, Col} from 'reactstrap';

// const FormItem = Form.Item;

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: {
                value: ''
            },
            username: {
                value: ''
            },
            email: {
                value: ''
            },
            password: {
                value: ''
            }
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.validateUsernameAvailability = this.validateUsernameAvailability.bind(this);
        this.validateEmailAvailability = this.validateEmailAvailability.bind(this);
        this.isFormInvalid = this.isFormInvalid.bind(this);
    }

    handleInputChange(event, validationFun) {
        const target = event.target;
        const inputName = target.name;        
        const inputValue = target.value;

        this.setState({
            [inputName] : {
                value: inputValue,
                ...validationFun(inputValue)
            }
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    
        const signupRequest = {
            name: this.state.name.value,
            email: this.state.email.value,
            username: this.state.username.value,
            password: this.state.password.value
        };
        signup(signupRequest)
        .then(response => {
            notification.success({
                message: 'Hobby App',
                description: "Thank you! You're successfully registered. Please Login to continue!",
            });          
            this.props.history.push("/login");
        }).catch(error => {
            notification.error({
                message: 'Hobby App',
                description: error.message || 'Sorry! Something went wrong. Please try again!'
            });
        });
    }

    isFormInvalid() {
        return !(this.state.name.validateStatus === 'success' &&
            this.state.username.validateStatus === 'success' &&
            this.state.email.validateStatus === 'success' &&
            this.state.password.validateStatus === 'success'
        );
    }

    render() {
        const newImage = require('../images/adventure1.jpg');
        const divStyle = {
        width: '100%',
        height: '450px',
        opcaity: '0.5',
        backgroundImage: `url(${newImage})`,
        backgroundSize: 'cover'   
        };
        return (
            <div className="signup-container" style={divStyle}>
                <div className="signup-content">
                    <Container className="container">
                    <Form onSubmit={this.handleSubmit} className="signup-form">
                        <Row form>
                        <Col xs={6} sm={6} md={3}>
                        <FormGroup validateStatus={this.state.name.validateStatus} help={this.state.name.errorMsg}>
                            <Label for="name" className="mr-sm-2"></Label>
                            <Input type="name" placeholder="Full Name" name="name" value={this.state.name.value} 
                            onChange={(event) => this.handleInputChange(event, this.validateName)} />   
                        </FormGroup>
                        </Col>       
                        <Col xs={6} sm={6} md={3}>
                        <FormGroup validateStatus={this.state.username.validateStatus} help={this.state.username.errorMsg}>
                            <Label for="username" className="mr-sm-2"></Label>
                            <Input type="username" placeholder="Username" name="username" value={this.state.username.value} 
                            onChange={(event) => this.handleInputChange(event, this.validateName)} />   
                        </FormGroup>
                        </Col>
                        
                        <Col xs={6} sm={6} md={3}>
                        <FormGroup validateStatus={this.state.email.validateStatus} help={this.state.email.errorMsg}>
                            <Label for="email" className="mr-sm-2"></Label>
                            <Input type="email" placeholder="Email" name="email" value={this.state.email.value} 
                            onChange={(event) => this.handleInputChange(event, this.validateName)} />   
                        </FormGroup>
                        </Col>
                        <Col xs={6} sm={6} md={3}>
                        <FormGroup validateStatus={this.state.password.validateStatus} help={this.state.password.errorMsg}>
                            <Label for="password" className="mr-sm-2"></Label>
                            <Input type="password" placeholder="Password" name="password" value={this.state.password.value} 
                            onChange={(event) => this.handleInputChange(event, this.validateName)} />   
                        </FormGroup>
                        </Col>
                        <Col md={10}>                     
                        <FormGroup>
                            <Button type="primary" className="signup-form-button" disabled={this.isFormInvalid()}>Sign up</Button>
                            <br />
                            <h5>Already registed?</h5> <Link to="/login" className="link"><h5>Login now!</h5></Link>
                        </FormGroup>
                        </Col>   
                        </Row>
                    </Form>
                    </Container>
                </div>
            </div>
        );
    }

    // Validation Functions

    validateName = (name) => {
        if(name.length < NAME_MIN_LENGTH) {
            return {
                validateStatus: 'error',
                errorMsg: `Name is too short (Minimum ${NAME_MIN_LENGTH} characters needed.)`
            }
        } else if (name.length > NAME_MAX_LENGTH) {
            return {
                validationStatus: 'error',
                errorMsg: `Name is too long (Maximum ${NAME_MAX_LENGTH} characters allowed.)`
            }
        } else {
            return {
                validateStatus: 'success',
                errorMsg: null,
              };            
        }
    }

    validateEmail = (email) => {
        if(!email) {
            return {
                validateStatus: 'error',
                errorMsg: 'Email may not be empty'                
            }
        }

        const EMAIL_REGEX = RegExp('[^@ ]+@[^@ ]+\\.[^@ ]+');
        if(!EMAIL_REGEX.test(email)) {
            return {
                validateStatus: 'error',
                errorMsg: 'Email not valid'
            }
        }

        if(email.length > EMAIL_MAX_LENGTH) {
            return {
                validateStatus: 'error',
                errorMsg: `Email is too long (Maximum ${EMAIL_MAX_LENGTH} characters allowed)`
            }
        }

        return {
            validateStatus: null,
            errorMsg: null
        }
    }

    validateUsername = (username) => {
        if(username.length < USERNAME_MIN_LENGTH) {
            return {
                validateStatus: 'error',
                errorMsg: `Username is too short (Minimum ${USERNAME_MIN_LENGTH} characters needed.)`
            }
        } else if (username.length > USERNAME_MAX_LENGTH) {
            return {
                validationStatus: 'error',
                errorMsg: `Username is too long (Maximum ${USERNAME_MAX_LENGTH} characters allowed.)`
            }
        } else {
            return {
                validateStatus: null,
                errorMsg: null
            }
        }
    }

    validateUsernameAvailability() {
        // First check for client side errors in username
        const usernameValue = this.state.username.value;
        const usernameValidation = this.validateUsername(usernameValue);

        if(usernameValidation.validateStatus === 'error') {
            this.setState({
                username: {
                    value: usernameValue,
                    ...usernameValidation
                }
            });
            return;
        }

        this.setState({
            username: {
                value: usernameValue,
                validateStatus: 'validating',
                errorMsg: null
            }
        });

        checkUsernameAvailability(usernameValue)
        .then(response => {
            if(response.available) {
                this.setState({
                    username: {
                        value: usernameValue,
                        validateStatus: 'success',
                        errorMsg: null
                    }
                });
            } else {
                this.setState({
                    username: {
                        value: usernameValue,
                        validateStatus: 'error',
                        errorMsg: 'This username is already taken'
                    }
                });
            }
        }).catch(error => {
            // Marking validateStatus as success, Form will be recchecked at server
            this.setState({
                username: {
                    value: usernameValue,
                    validateStatus: 'success',
                    errorMsg: null
                }
            });
        });
    }

    validateEmailAvailability() {
        // First check for client side errors in email
        const emailValue = this.state.email.value;
        const emailValidation = this.validateEmail(emailValue);

        if(emailValidation.validateStatus === 'error') {
            this.setState({
                email: {
                    value: emailValue,
                    ...emailValidation
                }
            });    
            return;
        }

        this.setState({
            email: {
                value: emailValue,
                validateStatus: 'validating',
                errorMsg: null
            }
        });

        checkEmailAvailability(emailValue)
        .then(response => {
            if(response.available) {
                this.setState({
                    email: {
                        value: emailValue,
                        validateStatus: 'success',
                        errorMsg: null
                    }
                });
            } else {
                this.setState({
                    email: {
                        value: emailValue,
                        validateStatus: 'error',
                        errorMsg: 'This Email is already registered'
                    }
                });
            }
        }).catch(error => {
            // Marking validateStatus as success, Form will be recchecked at server
            this.setState({
                email: {
                    value: emailValue,
                    validateStatus: 'success',
                    errorMsg: null
                }
            });
        });
    }

    validatePassword = (password) => {
        if(password.length < PASSWORD_MIN_LENGTH) {
            return {
                validateStatus: 'error',
                errorMsg: `Password is too short (Minimum ${PASSWORD_MIN_LENGTH} characters needed.)`
            }
        } else if (password.length > PASSWORD_MAX_LENGTH) {
            return {
                validationStatus: 'error',
                errorMsg: `Password is too long (Maximum ${PASSWORD_MAX_LENGTH} characters allowed.)`
            }
        } else {
            return {
                validateStatus: 'success',
                errorMsg: null,
            };            
        }
    }

}

export default Signup;