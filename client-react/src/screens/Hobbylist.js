import React from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table'


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
<div className="panel panel-primary">
    <div className="panel-heading">
      <h2>Hobby List</h2>
    <div className="panel-body">
 <Table striped bordered hover>
  <thead>
  <tr>
      {/* <th>Created By</th> */}
      <th>User Name</th>
      <th>Hobby</th>
      <th>Rate Hobby out of 10</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      {/* <td>{this.state.hobbylist.map(p => (
          <div key={p.id}>
              {p.createdBy}
           </div>))}
      </td> */}
      <td>{this.state.hobbylist.map(p => (
          <div key={p.id}>
             {p.name}
           </div>))}</td>
      <td>{this.state.hobbylist.map(p => (
          <div key={p.id}>
              {p.hobby}
           </div>))}</td>
      <td>{this.state.hobbylist.map(p => (
          <div key={p.id}>
             {p.rate}
           </div>))}</td> 
  </tr>
    </tbody>
    </Table>  
    </div>
    </div>
    </div>
    );
    
  }
  
}



export default Hobbylist;