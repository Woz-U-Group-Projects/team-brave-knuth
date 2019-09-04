import React from "react";

class ChatNames extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hobby: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ hobby: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.mutateState(this.state.hobby);
    console.log("ChatNames value is: " + this.state.hobby);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Enter a hobby:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ChatNames;
