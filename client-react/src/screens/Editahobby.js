import React from "react";
import axios from "axios";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { ACCESS_TOKEN } from '../constants';

export default class Editahobby extends React.Component {

    constructor(props) {
    super(props);
    this.state = {
      id: '',
      isHidden: true
    }
    }
   

   async componentDidMount() {
        axios
          .get("http://localhost:8080/hobbylist/")
          .then(res => this.setState({ id: res.data }));
   }
      
      handleChange = e => {
        const state = this.state.id
        state[e.target.name] = e.target.value;
        this.setState({id:state});
      };

      handleSubmit = e => {
        const { name, hobby, rate } = this.state.id;
        let token = localStorage.getItem(ACCESS_TOKEN);
        axios.put('http://localhost:8080/hobbylist/'+this.props.id, { name, hobby, rate, 
         headers: {
          "Access-Control-Allow-Origin" : "*",
          "Content-Type": "application/json",
           "Authorization":"Bearer"+ token,
           'Accept': 'application/json, text/plain, */*'
        }})
        .then(res => console.log(res.data));  

        }

        toggleHidden () {
          this.setState({
            isHidden: !this.state.isHidden
          })
        }
    

  render() {
    const Child = () => (
      <div>
      
        <Container>
        <Form onSubmit={this.handleSubmit}>
            <FormGroup>
              {/* <Label for="name">Name</Label>
              <Input
                type="text"
                name="name"
                id="name"
                 value={this.state.id.name}
                 onChange={this.handleChange}
                autoComplete="name"
              /> */}
               <Label for="hobby">Hobby</Label>
               <Input
                type="text"
                name="hobby"
                id="hobby"
                value={this.state.id.hobby}
                onChange={this.handleChange}
                autoComplete="hobby"
                autoFocus={true}
              />
               <Label for="rate">Rate</Label>
               <Input
                type="text"
                name="rate"
                id="rate"
                maxLength="1"
                value={this.state.id.rate}
                onChange={this.handleChange}
                autoComplete="rate"
              />
              </FormGroup>
            </Form>
          </Container>

    <form onSubmit={this.handleSubmit} >
      <Button size="sm" color="primary" type="submit">Save</Button>
   </form>


   </div>)

    return (
    
          <div>
            <Button size="sm" color="warning" onClick={this.toggleHidden.bind(this)} >Edit</Button>
                {!this.state.isHidden && <Child />}
        </div>    
        )
        }
      }


