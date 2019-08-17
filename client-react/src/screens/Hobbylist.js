import React from "react";
import axios from "axios";


class Hobbylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hobbylist: [] };
  
  }
 
  componentDidMount() {
    axios
      .get("http://localhost:8080/hobbylist")
      .then(response => this.setState({ hobbylist: response.data }));
  }

  render() {
    return (
      <div> <h2>List of Hobbies</h2>
        {this.state.hobbylist.map(p => (
          <div key={p.id}>
            {p.id} :  {p.createdBy}: {p.name} : {p.hobby} : {p.hobbyRate}
          </div>
        ))}
      </div>
      
    );
    
  }
  
}



export default Hobbylist;