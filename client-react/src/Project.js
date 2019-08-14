import React from "react";
import axios from "axios";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projects: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/projects")
      .then(response => this.setState({ projects: response.data }));
  }

  render() {
    return (
      <div>
        
    
      </div>
    );
  }
}

export default Project;
