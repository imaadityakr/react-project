import logo from './logo.svg';
import './App.css';
import Home from './Components/Home'
import About from './Components/About'
import Listing from './Components/Listing'
import Protected from './Components/Protected'
import Nav from './Components/Nav'
import Auth from './Components/Auth'
import Logout from './Components/Logout'
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
          <Route path="/about">
            {/* <About /> */}
            <Protected cmp={About} />
          </Route>
          <Route path="/home">
            {/* <Home /> */}
            <Protected cmp={Home} />
          </Route>
          <Route path="/">
            <Auth />
          </Route>
          <Route path="logout">
            <Logout />
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
