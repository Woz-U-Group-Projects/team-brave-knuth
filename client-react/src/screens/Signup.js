import React from 'react';



class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.state = { signup: [] };
  }
 
  componentDidMount() {
   
  }

  render() {
    return (
      <div> <h4> ----Sign up Goes here----</h4>
        {this.state.signup.map(p => (
          <div> </div>
        ))}
      </div>
      
    );
    
  }
  
}


export default Signup;