import React from 'react';

class Addahobby extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A Hobby was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
         
        <form onSubmit={this.handleSubmit}>
            <h3> Enter your Hobby below:</h3>
          <label>
            Hobby:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

export default Addahobby;