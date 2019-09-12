/// code works with database////
import React from "react";
import axios from "axios";
import {ButtonGroup } from "reactstrap";
import DeleteaHobby from './Deleteahobby';
import  EditaHobby from './Editahobby';

// import StarRatingComponent from 'react-star-rating-component';
// import Ratingstar from './Ratingstar';

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
      <div className="container-1">
      <header className="bg-primary text-center py-3 mb-3">
          <div className="container-2">
            <h1 className="font-weight-light text-white">
              Hobby List
            </h1>
          </div>
        </header>
      
        <div className="panel panel-default p50 uth-panel">
          <table className="table table-hover">
            <thead>
              <tr>
               
                <th>Hobby</th>
                <th>Rate 0-9</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {this.state.hobbylist.map(p => (
                <tr key={p.id}>
                  <td>{p.hobby}</td>
                  <td>{p.rate} 
                  </td>
                  <td>
                    <ButtonGroup key={p.id}>
                    <DeleteaHobby id={p.id}/>
                    </ButtonGroup>
                    <EditaHobby id={p.id} />
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


