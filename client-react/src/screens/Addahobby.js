import React from "react";
import { withRouter } from "react-router-dom";
// import axios from "axios";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { ACCESS_TOKEN } from '../constants';
// import Ratingstar, {rating} from './Ratingstar';
// import StarRatingComponent from 'react-star-rating-component';

class Addahobby extends React.Component {
  emptyItem = {
    name: "",
    hobby: "",
     rate: ""
  };

  constructor(props) {
    super(props);
    this.state = {
      item: this.emptyItem
    };
        
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    async componentDidMount() {
      if (this.props.match.params.id !== 'new') {
        const hobby = await (await fetch(`/hobbylist/${this.props.match.params.id}`)).text();
        this.setState({item: hobby});
      }
    };
    
    handleChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      let item = {...this.state.item};
      item[name] = value;
      this.setState({item});
    }
    
  async handleSubmit(event) {
    alert("A Hobby was submitted!");
    event.preventDefault();
    const { item } = this.state;
    let token = localStorage.getItem(ACCESS_TOKEN);
    await fetch("http://localhost:8080/hobbylist", {
      method: item.id ? "PUT" : "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization":"Bearer "+token,
      },
      body: JSON.stringify(item)
    });
    this.props.history.push("/hobbylist");
  }

  render() {
    const { item } = this.state;
    const title = <h2>{item.id ? "Edit Hobby" : "Add a Hobby"}</h2>;
    return (
      <div>
        <Container>
          {title}
          <Form onSubmit={this.handleSubmit}>
            {/* <FormGroup>
              <Label for="name">Name</Label>
              <Input
              placeholder="Rodger"
                type="text"
                name="name"
                id="name"
                value={item.name || ""}
                onChange={this.handleChange}
                autoComplete="name"
              />
            </FormGroup> */}
            <FormGroup>
              <Label for="hobby">Hobby</Label>
              <Input
                type="text"
                placeholder="Running"
                name="hobby"
                id="hobby"
                value={item.hobby || ""}
                onChange={this.handleChange}
                autoComplete="hobby-level1"
              />
            </FormGroup>
            <FormGroup>
              <Label for="rate">Rate Out of 9</Label>
              {/* <Ratingstar/> */}

              {/* this input works, trying to get stars */}
              <Input
                type="text"
                placeholder="9"
                name="rate"
                id="rate"
                value={item.rate || ""}
                onChange={this.handleChange}
                maxLength="1"
                autoComplete="hobby-level1"
              />
            </FormGroup>
   
            <FormGroup>
              <Button color="primary" type="submit">
                Save
              </Button>{" "}
              <Button color="secondary" href="/hobbylist">
                Cancel
              </Button>
            </FormGroup>
          </Form>
        </Container>
      </div>
    );
  }
}

export default withRouter(Addahobby);
