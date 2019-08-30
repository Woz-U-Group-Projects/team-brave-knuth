import React, {Component} from 'react';
import axios from 'axios';
import { Button } from 'reactstrap';

export default class DeleteHobby extends Component {
  constructor(props) {
    super(props);
    this.state = { id: '' };
  }
 

  // handleChange = event => {
  //   this.setState({ id: event.target.value });
  // }

  handleSubmit = event => {
    event.preventDefault();
    
    try {
      const id = this.state
            axios.delete(
              'http://localhost:8080/hobbylist/'+this.id,
            {header: {
                'Accept': 'application/json, text/plain, */*'
              }}
              )
          
            
      console.log('👉 Response:', id)
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
