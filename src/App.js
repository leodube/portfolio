import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { hot } from "react-hot-loader";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

const App = () => {
  return (
    <Router>
      <div className="App">
        <div className="container">
          <Navbar />
        </div>
        <div className="container pt-5">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default hot(module)(App);
