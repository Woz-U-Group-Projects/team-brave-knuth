import React from "react";

class ChatNames extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <form onSubmit={this.handleChange}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        {/* <input type="submit" value="Submit" /> */}
      </form>
    );
  }
}

export default ChatNames;
