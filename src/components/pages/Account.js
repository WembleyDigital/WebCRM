import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	withRouter
} from "react-router-dom";

import SideBar from "./SideBar";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";

import "../../styles/Account.css";

class Account extends Component {
	state = {};
	render() {
		return (
			<div>
				<SideBar SideBar={this.SideBar} />
				<div className="content">
					<div className="account_profile">
						<Image
							// variant="top"
							className="profileImg"
							style={{
								width: "200px",
								height: "200px",
								display: "inline-block",
								marginLeft: "3em",
								marginRight: "3em"
							}}
							src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png"
							roundedCircle
						/>
						<div className="profileUser">
							<h1 className="profileUserName">User Name</h1>
							<Button
								variant="outline-info"
								className="profileChange"
								size="lg"
							>
								Change profile information
							</Button>
						</div>
					</div>
					<h1 className="title">My Detail</h1>
					<div className="account_detail">
						<h1>Name: Username</h1>
						<h1>Authority: Admin</h1>
						<h1>Address: XXX Street</h1>
						<h1>City: Melbourne</h1>
						<h1>State: VIC</h1>
						<h1>Postcode: 3130</h1>
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
