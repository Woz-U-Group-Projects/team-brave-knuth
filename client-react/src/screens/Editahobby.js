import React from "react";
import { Link, withRouter } from "react-router-dom";
// import axios from "axios";
import { Button, Container, Form, FormGroup, Input, Label } from "reactstrap";
import { ACCESS_TOKEN } from '../constants';
import axios from 'axios';

class Addahobby extends React.Component {
  id = {
    name: "",
    hobby: "",
    rate: ""
  };

  constructor(props) {
    super(props);
    this.state = { id: '' };
  }


  componentDidMount() {
    axios.get(`http://localhost:8080/hobbylist/`)
      .then(res => {
        const id = res.data;
        this.setState({ id });
      })
  }

    // componentDidMount() {
    //   if (this.props.match.params.id !== 'new') {
    //     const hobby =  (fetch(`/hobbylist/${this.props.match.params.id}`)).text();
    //     this.setState({item: hobby});
    //   }
    // };
    
    handleChange(event) {
      const { id } = this.state;
      this.setState({id});
    }


  handleSubmit(event) {
     event.preventDefault();
     const { id } = this.state;
      let token = localStorage.getItem(ACCESS_TOKEN);
            axios.put(
              'http://localhost:8080/hobbylist/'+this.props.id,
            {headers: {
              "Authorization":"Bearer "+token,
                'Accept': 'application/json, text/plain, */*'
              },
              body: JSON.stringify(id)
            }
              )
    this.props.history.push("/hobbylist");
    
              
  }

  render() {

      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <Button size="sm"  type="submit">Edit</Button>
          </form>
        </div>
      )
    }
  }
export default withRouter(Addahobby);
