import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";

import AddTodo from "./components/add-todo.component";
import EditTodo from "./components/edit-todo.component";
import TodoList from "./components/todo-list.component";

import logo from "./logo.svg";
class App extends Component {
  render() {
    return (
      <Router>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="google.com" target="_blank">
                <img src={logo} width="30" height="30" alt="Zonvoir" />
              </a>
              <Link to="/" className="navbar-brand">
                MERN-Stack Todo App
              </Link>
              <div className="collpase navbar-collapse">
                <ul className="navbar-nav mr-auto">
                  <li className="navbar-item">
                    <Link to="/" className="nav-link">
                      Todos
                    </Link>
                  </li>
                  <li className="navbar-item">
                    <Link to="/create" className="nav-link">
                      Create Todo
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
            <br />
        <Routes>
            <Route path="/" exact element={<TodoList />} />
            <Route path="/edit/:id" element={<EditTodo />} />
            <Route path="/create" element={<AddTodo/>} />
        </Routes>
          </div>
      </Router>
    );
  }
}

export default App;
