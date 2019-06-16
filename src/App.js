import React from 'react';
import Home from './component/HomeComponent'
import About from './component/AboutComponent'
import Job from './component/JobComponent'
import { BrowserRouter as Router, Route } from "react-router-dom"
function App() {
  return (
    <Router>
      <Route exact path="/" component={Home} />
      <Route exact path="/Home" component={Home} />
      <Route exact path="/Job" component={Job} />
      <Route exact path="/About" component={About} />
    </Router>
  );
}

export default App;
