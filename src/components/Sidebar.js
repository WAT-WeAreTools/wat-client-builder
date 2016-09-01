import React, { Component } from 'react';
import '../App.css';

class Sidebar extends Component {
  render() {
    return (
        <div>
          <div className="col-md-3 side">
            <i className="fa fa-user fa-5x ello" aria-hidden="true"></i>
             <div col-md-3 className="login">
               <a href="http://watserver.herokuapp.com/auth/github"><button className="btn btn-success">Github Login</button></a>
             </div>
            <h1 className="ello">Welcome</h1>
            <h1 className="ello">To your tools...<i class="fa fa-wrench" aria-hidden="true"></i></h1>
           <div col-md-3 className="login">
           <a href="http://watserver.herokuapp.com/logout"><button className="btn btn-danger logout">Logout</button></a>
           </div>
          </div>
        </div>
  
    );
  }
}

export default Sidebar;
