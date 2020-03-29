import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";

import Header from "./components/layout/Header";
import Dashboard from "./components/pages/Dashboard";
import SideBar from "./components/pages/SideBar";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import About from "./components/pages/About";
import Account from "./components/pages/Account";
import AllRoles from "./components/pages/AllRoles";
import Customers from "./components/pages/Customers";
import Billing from "./components/pages/Billing";
import uuid from "uuid";
import test from "./components/pages/test";

import "./styles/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Events from "./components/pages/Events";
import Products from "./components/pages/Products";
import FeedbackReview from "./components/pages/FeedbackReview";
import ProductReview from "./components/pages/ProductReview";
import Suppliers from "./components/pages/Suppliers";

// import Axios from "axios";

class App extends Component {
  state = {
    Dashboard: [
      // {
      // 	id: uuid.v4(),
      // 	title: "Take out the trash",
      // 	completed: false
      // },
      // {
      // 	id: uuid.v4(),
      // 	title: "Todo 2",
      // 	completed: false
      // },
      // {
      // 	id: uuid.v4(),
      // 	title: "Todo 3",
      // 	completed: false
      // }
    ]
  };

  componentDidMount() {
    // Axios.get(
    // 	"https://jsonplaceholder.typicode.com/Dashboard?_limit=10"
    // ).then(res => this.setState({ Dashboard: res.data }));
  }

  // Toggle Complete
  markComplete = id => {
    this.setState({
      Dashboard: this.state.Dashboard.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  // Delete Todo
  delTodo = id => {
    this.setState({
      Dashboard: [...this.state.Dashboard.filter(todo => todo.id !== id)]
    });
  };

  // Add Todo
  SideBar = title => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    };
    this.setState({ Dashboard: [...this.state.Dashboard, newTodo] });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <div className="con">
            {/* <Header /> */}
            <Route
              path="/dashboard"
              render={props => (
                <React.Fragment>
                  {/* <SideBar SideBar={this.SideBar} /> */}
                  <Dashboard
                    Dashboard={this.state.Dashboard}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/about" component={About} />
            <Route path="/account" component={Account} />
            <Route path="/allroles" component={AllRoles} />
            <Route path="/customers" component={Customers} />
            <Route path="/suppliers" component={Suppliers} />
            <Route path="/billing" component={Billing} />
            <Route path="/events" component={Events} />
            <Route path="/products" component={Products} />
            <Route path="/feedback_review" component={FeedbackReview} />
            <Route path="/product_review" component={ProductReview} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
