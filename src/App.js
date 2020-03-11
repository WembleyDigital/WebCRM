import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	withRouter
} from "react-router-dom";
import Dashboard from "./components/pages/Dashboard.js";
import SideBar from "./components/pages/SideBar";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import About from "./components/pages/About";
import Header from "./components/layout/Header";
import Account from "./components/pages/Account";
import uuid from "uuid";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Axios from "axios";

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
		Axios.get(
			"https://jsonplaceholder.typicode.com/Dashboard?_limit=10"
		).then(res => this.setState({ Dashboard: res.data }));
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
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
