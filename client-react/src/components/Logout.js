import React from 'react';
import { ACCESS_TOKEN } from '../constants';

class Logout extends React.Component {

    componentDidMount(){
        //console.log(localStorage.getItem(ACCESS_TOKEN));
        //localStorage.setItem(ACCESS_TOKEN, "");
        localStorage.removeItem(ACCESS_TOKEN);
        this.props.history.push("/login");    
    }

    render() {
        return <>logging out</>
    }

}

export default Logout;


// handleLogout(redirectTo="/login", notificationType="success", description="You're successfully logged out.") {
//     localStorage.removeItem(ACCESS_TOKEN);

//     this.setState({
//       currentUser: null,
//       isAuthenticated: false
//     });

//     this.props.history.push(redirectTo);
    
//     notification[notificationType]({
//       message: 'Hobby App',
//       description: description,
//     });
//   }