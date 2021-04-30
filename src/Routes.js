import React from 'react';
import Login from './Login';
import Users from './Users';
import ToDo from './ToDo';
import { BrowserRouter as Router,Link,Switch,Route} from 'react-router-dom';

class Routes extends React.Component{
render(){
    return(

<Router> 
   <Switch>
          <Route path="/ToDo">
            <ToDo/>
          </Route>
          <Route path="/users">
            <Users/>
          </Route>
          <Route path="/">
            <Login/>
          </Route>
           
        </Switch>
 </Router>
)
  }

}

export default Routes;
