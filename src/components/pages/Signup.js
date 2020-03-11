import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	withRouter
} from "react-router-dom";

class Signup extends Component {
	state = {};
	render() {
		return (
			<div>
				<h1>This is the sign up page</h1>
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
						size="lg"
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
						size="lg"
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
		);
	}
}

export default Signup;
