import React, {Component} from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import { ACCESS_TOKEN } from '../constants';


export default class EditaHobby extends Component {
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
  }
  getInitialState() {
    return {
          item: this.emptyItem
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/hobbylist")
      .then(response => this.setState({ hobbylist: response.data }));
  }


  handleSubmit = event => {
    alert("Edit this Hobby Now!");
    event.preventDefault();
    const { item } = this.state;
    let token = localStorage.getItem(ACCESS_TOKEN);
    fetch("http://localhost:8080/hobbylist" + this.props.id, {
      method: item.id ? "POST" : "PUT",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization":"Bearer "+token,
      },
      body: JSON.stringify(item)
    })
      try{ console.log('👉 Response (Hobbyid#):', this.props.id)
      }  catch (event) {
            console.log(`😱 Axios request failed: ${event}`);
         }}

  render() {
    return (
    
        <form onSubmit={this.handleSubmit} >
          <Button size="sm" color="warning" type="submit">Edit</Button>
       </form>
     
    )
  }
}

