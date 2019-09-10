import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = { about: [] };
  }

  componentDidMount() {}

  render() {
    return (
      <div>
        <header className="bg-primary text-center py-5 mb-4">
          <div className="container">
            <h1 className="font-weight-light text-white">
              About Team Brave-Knuth
            </h1>
          </div>
        </header>
        <br />
        <div>
          <br />
          <h3>Welcome to our website!</h3>
          <br />
          <h5>
            This website was created for you to be able to discover peope who
            may be interested in similar hobbies. You can register above and
            chat with others on the chat page. This was coded by a group of
            students from Woz-U's Full Stack Web Development bootcamp course.
            We've been working on this project over the last 6 weeks and hope
            you enjoy it! Feel free to view our code at:
            <a href="https://github.com/Woz-U-Group-Projects/team-brave-knuth">
              github.com
            </a>
            .
          </h5>
          <br />
          <br />
          <h6 className="centered">
            <div>Contact Info:</div>
            <div>Phone: 888-888-8888</div>
            <div>Fax: 888-888-7777</div>
            <div>123 Main St</div>
            <div>Nowhere, MI 49999</div>
            <div>info@thehobbiest.com</div>
          </h6>
          <br />
          <br />
          <h6 className="centered">
            Samantha Wilcott - Blayne Bennett - Grace Neview - Terry Rivers
          </h6>
        </div>
      </div>
    );
  }
}

export default About;
