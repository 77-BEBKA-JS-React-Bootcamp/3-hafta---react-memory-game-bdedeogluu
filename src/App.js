import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import Home from "./components/Home/Home";
import CardGame from "./components/CardGame/CardGame";
import Result from "./components/Result/Result";

import './App.css';

export default function App(){
  return(
    <Router>
      <div>
        <nav className = "navbar">
          <ul>
            <li>
              <Link to ="/">Home</Link>
            </li>
            <li>
              <Link to="/game">Secret User</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/game">
            <CardGame />
          </Route>
          <Route path="/result">
            <Result />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

