import React from "react";
import {withRouter } from "react-router-dom";
// import axios from "axios";
import { Button} from "reactstrap";
import { ACCESS_TOKEN } from '../constants';
// import Ratingstar, {rating} from './Ratingstar';
// import StarRatingComponent from 'react-star-rating-component';

class Addahobby extends React.Component {
  emptyItem = {
    name: "",
    hobby: "",
     rate: ""
  };

  constructor(props) {
    super(props);
    this.state = {
      item: this.emptyItem
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    async componentDidMount() {
      if (this.props.match.params.id !== 'New') {
        const hobby = await (await fetch(`/hobbylist/${this.props.match.params.id}`)).text();
        this.setState({item: hobby});
      }
    };
    
    handleChange(event) {
      const target = event.target;
      const value = target.value;
      const name = target.name;
      let item = {...this.state.item};
      item[name] = value;
      this.setState({item});
    }
    


  async handleSubmit(event) {
    alert("Editting Hobby");
    const { item } = this.state;
    let token = localStorage.getItem(ACCESS_TOKEN);
    await fetch("http://localhost:8080/hobbylist" + this.props.item, {
      method: item.id ? "PUT" : "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization":"Bearer "+token,
      },
      body: JSON.stringify(item)
    });
    this.props.history.push("/hobbylist");
  }

  
  render() {
    return (
              <Button size="sm" type="submit" color="warning">Edit</Button>
           
    );
  }
}

export default withRouter(Addahobby);
