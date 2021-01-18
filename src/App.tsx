
import { Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./App/Home";
import Login from "./App/Login";
import Secured from "./App/Secured";


// to handle the private route, check if localStorage.getItem('auth') have any value or not,if have then it'll navigate user to the respective private pages
const PrivateRoute = ({ component: Component, ...rest }:any) => (
  <Route
    {...rest}
    render={props => localStorage.getItem('auth') ? <Component {...props} /> : <Redirect to="/login" /> }
  />
);
// to handle the public route, check if localStorage.getItem('auth') have any value or not,if have then it'll navigate user to the respective public pages
const PublicRoute = ({ component: Component, ...rest }:any) => (
  <Route
    {...rest}
    render={props => localStorage.getItem("auth") ? <Redirect to="/secured" /> : <Component {...props} /> }
  />
);

function App() {
  return (
    <div>
      <Switch>
        <PublicRoute exact path="/" component={Home} />
        <PublicRoute path="/login" component={Login} />
        <PrivateRoute  path="/secured" component={Secured} />
      </Switch>
    </div>    
  );
}

export default App;
