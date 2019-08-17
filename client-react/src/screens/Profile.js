import React from 'react';


class Profile extends React.Component {
    constructor(props) {
      super(props);
      this.state = { profile: [] };
    }
   
    componentDidMount() {
     
    }
  
    render() {
      return (
        <div> <h1>--User Profile--</h1>
          {this.state.profile.map(p => (
            <div> </div>
          ))}
        </div>
        
      );
      
    }
    
  }
  
  
  export default Profile;
