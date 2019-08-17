import React from 'react';
import Header from '../components/Header';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { home: [] };
  }
 
  componentDidMount() {
   
  }

  render() {
    return (
      <div> <h1> Welcome to TheHobbyist Homepage</h1>
        {this.state.home.map(p => (
          <div> </div>
        ))}
      </div>
      
    );
    
  }
  
}


export default Home;