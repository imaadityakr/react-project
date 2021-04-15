import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import About from './Components/About'
import Nav from './Components/Nav'
import Login from './Components/Login'
import Logout from './Components/Logout'
import Registration from './Components/Registration'
import { PrivateRoute } from './Components/PrivateRoute'

import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link 
} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
          <Nav />
          <Switch>
            <PrivateRoute path = "/home" component = {Home} />
            <PrivateRoute  path = "/about" component = {About} />
            <Route  path = "/login" component = {Login} />
            <Route  path = "/registration" component = {Registration} />
            <PrivateRoute t path = "/logout" component = {Logout} />
          </Switch>
      </Router>
    </div>
  );
}

export default App;



