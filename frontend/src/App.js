import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
	withRouter,
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
import Events from "./components/pages/Events";
import Products from "./components/pages/Products";
import FeedbackReview from "./components/pages/FeedbackReview";
import ProductReview from "./components/pages/ProductReview";
import Suppliers from "./components/pages/Suppliers";
import uuid from "uuid";
import test from "./components/pages/test";

import "./styles/App.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Report from "./components/pages/Report";
import Invoices from "./components/pages/Invoices";
import Orders from "./components/pages/Orders";
import SuppliersWinery from "./components/pages/SuppliersWinery";
import WineryDetail from "./components/pages/WineryDetail";
import Sup_Events from "./components/pages/Sup_Events";
import Sup_Products from "./components/pages/Sup_Products";

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
		],
		Username: "",
		Password: "",
		Role: "",
	};

	componentDidMount() {
		// Axios.get(
		// 	"https://jsonplaceholder.typicode.com/Dashboard?_limit=10"
		// ).then(res => this.setState({ Dashboard: res.data }));
	}

	updateUsername = (username) => {
		this.setState({ Username: username });
	};

	updatePassword = (password) => {
		this.setState({ Password: password });
	};

	updateRole = (role) => {
		this.setState({ Role: role });
	};

	// Delete Todo
	delTodo = (id) => {
		this.setState({
			Dashboard: [
				...this.state.Dashboard.filter((todo) => todo.id !== id),
			],
		});
	};

	// Add Todo
	SideBar = (title) => {
		const newTodo = {
			id: uuid.v4(),
			title,
			completed: false,
		};
		this.setState({ Dashboard: [...this.state.Dashboard, newTodo] });
	};

	render() {
		console.log("from app: ", this.state);
		return (
			<Router>
				<div className="App">
					<Route
						exact
						path="/"
						component={() => (
							<Login
								updateUsername={this.updateUsername}
								updatePassword={this.updatePassword}
								updateRole={this.updateRole}
							/>
						)}
					/>
					<div className="con">
						<Switch>
							<Route
								path="/dashboard"
								render={(props) => (
									<React.Fragment>
										{/* <SideBar SideBar={this.SideBar} /> */}
										<Dashboard
											Dashboard={this.state.Dashboard}
											Username={this.state.Username}
											Password={this.state.Password}
											Role={this.state.Role}
										/>
									</React.Fragment>
								)}
							/>
							<Route path="/signup" component={Signup} />
							<Route path="/about" component={About} />
							<Route path="/account" component={Account} />
							<Route path="/allroles" component={AllRoles} />
							<Route path="/customers" component={Customers} />
							<Route path="/suppliers" component={Suppliers} />
							<Route path="/billing" component={Billing} />
							<Route path="/events" component={Events} />
							<Route path="/products" component={Products} />
							<Route
								path="/feedback_review"
								component={FeedbackReview}
							/>
							<Route
								path="/product_review"
								component={ProductReview}
							/>
							<Route path="/reports" component={Report} />
							<Route path="/invoices" component={Invoices} />
							<Route path="/orders" component={Orders} />
							<Route
								path="/suppliers_winery"
								component={SuppliersWinery}
							/>
							<Route
								path="/suppliers_winery_detail"
								component={WineryDetail}
							/>
							<Route path="/sup_events" component={Sup_Events} />
							<Route
								path="/sup_products"
								component={Sup_Products}
							/>
						</Switch>
						{/* <Header /> */}
					</div>
				</div>
			</Router>
		);
	}
}

export default App;
