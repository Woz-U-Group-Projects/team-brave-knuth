import React from 'react';
import axios from "axios";


class About extends React.Component {
    constructor(props) {
      super(props);
      this.state = { about: [] };
    }
   
    componentDidMount() {
     
    }
  
    render() {
      return (
        <div> <h1> About the Team !!</h1>
          {this.state.about.map(p => (
            <div> </div>
          ))}
        </div>
        
      );
      
    }
    
  }
  
  
  export default About;