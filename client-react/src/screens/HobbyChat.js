import React from 'react';
import Header from '../components/Header';


class Hobbychat extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hobbychat: [] };
    }
   
    componentDidMount() {
     
    }
  
    render() {
      return (
        <div> <h1> Below are chatrooms for Hobbyists like you!</h1>
          {this.state.hobbychat.map(p => (
            <div> </div>
          ))}
        </div>
        
      );
      
    }
    
  }
  
  
  export default Hobbychat;