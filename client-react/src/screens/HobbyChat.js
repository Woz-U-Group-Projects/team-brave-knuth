import React from "react";
import "../styles/HobbyChat.css";
import Messages from "../components/Messages";
import Input from "../components/Input";
import ChatNames from "../components/ChatNames";

//selects a random color
function randomColor() {
  return "#" + Math.floor(Math.random() * 0xffffff).toString(16);
}

//main hobbychat component
class HobbyChat extends React.Component {
  state = {
    messages: [],
    member: {
      username: localStorage.getItem("username"),
      color: randomColor(),
      hobby: "none"
    }
  };

  constructor() {
    super();
    this.drone = new window.Scaledrone("KzIUXsMgEyQVUk4e", {
      data: this.state.member
    });
    this.drone.on("open", error => {
      if (error) {
        return console.error(error);
      }
      const member = { ...this.state.member };
      member.id = this.drone.clientId;
      this.setState({ member });
    });
    const room = this.drone.subscribe("observable-room");
    room.on("data", (data, member) => {
      const messages = this.state.messages;
      messages.push({ member, text: data });
      this.setState({ messages });
    });

    this.mutateHobby = this.mutateHobby.bind(this);
  }

  //updates the state to reflect the user's input
  mutateHobby(newValue) {
    console.log("HobbyChat value before change is: " + this.state.member.hobby);
    const updatedMember = this.state.member;
    updatedMember.hobby = newValue;
    this.setState({ member: updatedMember });
    console.log("HobbyChat value after change is: " + this.state.member.hobby);
  }

  render() {
    return (
      <div className="ChatApp">
        <div>
          <h3 className="centered">
            Welcome to the Chatroom! Talk about your favorite hobbies below!
          </h3>
        </div>
        <Messages
          messages={this.state.messages}
          currentMember={this.state.member}
        />
        <Input onSendMessage={this.onSendMessage} />
        <ChatNames value={this.state.hobby} mutateState={this.mutateHobby} />
      </div>
    );
  }

  onSendMessage = message => {
    this.drone.publish({
      room: "observable-room",
      message
    });
  };
}

export default HobbyChat;
