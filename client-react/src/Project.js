import React from "react";
import axios from "axios";

class Project extends React.Component {
  constructor(props) {
    super(props);
    this.state = { projects: [] };
  }

  componentDidMount() {
    axios
      .get("http://localhost:3000/projects")
      .then(response => this.setState({ projects: response.data }));
  }

  render() {
    return (
      <div>
        {this.state.projects.map(p => (
          <div key={p.id}>
            {p.id} : {p.name} : {p.createdBy}
          </div>
        ))}
      </div>
    );
  }
}

export default Project;
