/// code works with database////
import React from "react";
import axios from "axios";
// import Table from 'react-bootstrap/Table';
import { Button, ButtonGroup } from "reactstrap";
import { Link } from "react-router-dom";
import DeleteaHobby from './Deleteahobby';


class Hobbylist extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hobbylist: [] };
    // this.remove = this.remove.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:8080/hobbylist")
      .then(response => this.setState({ hobbylist: response.data }));
  }
  // async remove(id) {
  //   const url = "http://localhost:8080/hobbylist/" + this.id;
  //   await fetch(url, {
  //     method: "DELETE",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json"
  //     }
  //   }).then(() => {
  //     let updatedProject = [...this.state.hobbylist].filter(i => i.id !== id);
  //     this.setState({ Project: updatedProject });
  //   });
  // }
  render() {
    return (
      <div className="container">
        <h2> Hobby List</h2>
        <div className="panel panel-default p50 uth-panel">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Username</th>
                <th>Hobby</th>
                <th>Rate</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.hobbylist.map(p => (
                <tr key={p.id}>
                  <td>{p.name}{p.id}</td>
                  <td>{p.hobby}</td>
                  <td>{p.rate}</td>
                  <td>
                    <ButtonGroup key={p.id}>
                      <Button
                        size="sm"
                        color="primary"
                        tag={Link}
                        to={"/hobbylist"}
                      >
                        {" "}
                        Edit
                      </Button>
                      {/* <Button
                        size="sm"
                        color="danger"
                        tag={Link}
                        to={"/hobbylist"}
                      >
                        {" "}
                        Delete
                      </Button> */}
                    <DeleteaHobby id={p.id}/>
                      {/* //trying to connect//

                            <Button size="sm" color="primary" tag={Link} to={"/hobbylist" + p.id}>Edit</Button>
                            <Button size="sm" color="danger" onClick={() => this.remove(p.id)}>Delete</Button>

                            //trying to connect buttons for delete and add// */}
                    </ButtonGroup>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Hobbylist;
/// end of code that works with database///


