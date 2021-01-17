
import { Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./App/Home";
import Login from "./App/Login";
import Secured from "./App/Secured";

function App() {
  var auth : Boolean = false;
  if(localStorage.getItem('auth') === "1") {
    auth = true;
  }
  return (
    <div>
      <Switch>
      <Route exact path="/"><Home /></Route>
      <Route path="/login"><Login /></Route>
      {auth ? <Route path="/secured"><Secured /></Route> : <Redirect to="/login" />}
      </Switch>      
    </div>    
  );
}

export default App;
