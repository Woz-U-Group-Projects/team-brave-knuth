import React, {Component} from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';
import { ACCESS_TOKEN } from '../constants';

export default class DeleteHobby extends Component {
  constructor(props) {
    super(props);
    this.state = { id: '' };
  }

  handleSubmit = event => {
    try {
      let token = localStorage.getItem(ACCESS_TOKEN);
            axios.delete(
              'http://localhost:8080/hobbylist/'+this.props.id,
            {headers: {
              "Authorization":"Bearer "+token,
                'Accept': 'application/json, text/plain, */*'
              }}
              )
          
            
      console.log('👉 Response:', this.props.id)
    } catch (event) {
      console.log(`😱 Axios request failed: ${event}`);
    }
    
  }
  
  

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <Button size="sm" color="danger" type="submit">Delete</Button>
        </form>
      </div>
    )
  }
}
