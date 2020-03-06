import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	withRouter
} from "react-router-dom";

import SideBar from "./SideBar";

import "../../style/Account.css";

class Account extends Component {
	state = {};
	render() {
		return (
			<div>
				<SideBar SideBar={this.SideBar} />
				<div className="content">
					<div className="account_profile">
						<h1>Block for account profile</h1>
					</div>
					<h1 className="title">My Detail</h1>
					<div className="account_detail">
						<h1>Block for detail</h1>
					</div>
					<h1 className="title">Contact</h1>
					<div className="account_contact">
						<h1>Block for contact</h1>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Account);
