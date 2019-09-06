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

        <header class="bg-primary text-center py-5 mb-4">
          <div class="container">
            <h1 class="font-weight-light text-white">About Team Brave-Knuth</h1>
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
          <h6 class="centered">
            Samantha Wilcott - Blayne Bennett - Grace Neview - Terry Rivers -
            Alex Jacobo
          </h6>

          
        </div>
        
      </div>

    );
    
  }
}

export default About;
