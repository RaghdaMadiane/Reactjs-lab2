import React from 'react';
import Login from './Login';
import Users from './Users';
import ToDo from './ToDo';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class Menu extends React.Component {
emptyToken=()=>{

localStorage.removeItem("Token");

};
 
render(){
  return (
    
      <div  >
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
          <ul className="nav">
              <li className="nav-item">
              <Link to="/ToDo" className="nav-link">ToDo</Link>
            </li>
              <li className="nav-item">
              <Link to="/Users" className="nav-link">Users</Link>
            </li>

            <li className="nav-item">
			<Link to="/" className="nav-link">
              <button  onClick={this.emptyToken} className="border-0 text-primary">Logout</button>
            </Link>
			</li>

                      
          </ul>
        </nav>
              

        
      </div>
   
  );
}

}
export default Menu;



