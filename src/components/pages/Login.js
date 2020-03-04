import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import "../../style/Login.css";
import Col from "react-bootstrap/Col";

class Login extends Component {
	state = {
		username: "",
		password: "",
		modalShow: false
	};

	handleUsernameChange = event => {
		this.setState({ username: event.target.value });
	};

	handlePasswordChange = event => {
		this.setState({ password: event.target.value });
	};

	handleLoginClick = event => {
		event.preventDefault();
		if (this.state.username === "asdf" && this.state.password === "zxcv") {
			this.props.history.push("/");
		} else {
			this.setState({ modalShow: true });
		}
	};

	handleClose = event => {
		this.setState({ modalShow: !this.state.modalShow });
	};

	render() {
		return (
			<div className="Login">
				<span
					style={{
						fontFamily: "Dancing Script",
						fontSize: "10em",
						fontStyle: "normal",
						fontVariant: "normal",
						fontWeight: "700",
						lineHeight: "26.4px",
						textShadow: "30px 30px #bfbfbf",
						cursor: "default"
					}}
					className="Login-title"
				>
					<link
						rel="stylesheet"
						type="text/css"
						href="//fonts.googleapis.com/css?family=Dancing+Script"
					/>
					GoCellar Web CRM System
				</span>
				<div className="Login-interface">
					<Form className="Login-item">
						<Form.Group as={Form.Row}>
							<Form.Label column sm="3">
								Email address
							</Form.Label>
							<Col sm="8">
								<Form.Control
									type="username"
									placeholder="Enter username"
									onChange={this.handleUsernameChange}
								/>
							</Col>
						</Form.Group>
						<Form.Group as={Form.Row}>
							<Form.Label column sm="3">
								Password
							</Form.Label>
							<Col sm="8">
								<Form.Control
									type="password"
									placeholder="Password"
									md="4"
									onChange={this.handlePasswordChange}
								/>
							</Col>
						</Form.Group>
						<Form.Text
							className="text-muted"
							style={{ margin: "1em auto 0 auto" }}
						>
							We'll never share your password with anyone else.
						</Form.Text>
						<Form.Group controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Check me out" />
						</Form.Group>{" "}
						<Button
							variant="primary"
							type="submit"
							onClick={this.handleLoginClick}
						>
							Login
						</Button>
					</Form>
					<Modal
						show={this.state.modalShow}
						onHide={this.handleClose}
						centered
					>
						<Modal.Header closeButton>
							<Modal.Title>Log in failed</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							It seems like the username or password is incorrect.
						</Modal.Body>
						<Modal.Footer>
							<a href="/help">Need help logging in?</a>
							<Button variant="danger" onClick={this.handleClose}>
								Close
							</Button>
						</Modal.Footer>
					</Modal>
				</div>
			</div>
		);
	}
}

export default Login;
