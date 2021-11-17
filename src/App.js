import './App.css';
import Home from './Home';
import Navbar from './Navbar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LaunchDetails from './LaunchDetails';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

function App() {
  return (

    <Router>
      <div className="App">

        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/:id">
              <LaunchDetails />
            </Route>

          </Switch>

        </div>
      </div>
    </Router>
  );
}

export default App;
