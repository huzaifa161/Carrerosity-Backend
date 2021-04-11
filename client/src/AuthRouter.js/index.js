import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from '../Screens/Home'
import Comparsion from '../Screens/Comparsion'
import Login from '../Screens/Login'
import Scholarship from '../Screens/Scholarship'


function AuthRouterComponent() {
  return (
      
    <Router>
      <Switch>
            <Route path="/" exact component={Login} />
     </Switch>
     </Router>

  );
}

export default AuthRouterComponent;
