import React, { Component } from 'react';
import './App.css';
import Login from "./components/login/Login";
import Users from "./components/users/Users";
import Register from "./components/registration/Register";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
      <Router>
        <Route path="/" exact component={Login}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/register" exact component={Register}/>
        <Route path="/users" exact component={Users}/>
      </Router>
      </div>
    );
  }
}

export default App;
