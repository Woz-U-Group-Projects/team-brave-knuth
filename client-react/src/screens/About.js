import React from 'react';



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