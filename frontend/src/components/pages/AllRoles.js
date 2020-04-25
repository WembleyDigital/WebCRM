import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	withRouter,
} from "react-router-dom";
import SideBar from "./SideBar";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import SearchField from "react-search-field";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import "../../styles/AllRoles.scss";

class AllRoles extends Component {
	state = {
		searchKeyWord: "",
		roleOnHide: true,
	};

	onChange = (value) => {
		this.setState({ searchKeyWord: value });
	};

	createRole = (role) => {
		this.setState({ roleOnHide: false });
	};

	cancelCreateRole = (role) => {
		this.setState({ roleOnHide: true });
	};

	render() {
		return (
			<div>
				<SideBar
					SideBar={this.SideBar}
					menuOpen={!this.state.roleOnHide}
				/>
				<div className="content">
					<Modal
						size="lg"
						aria-labelledby="contained-modal-title-vcenter"
						centered
						show={!this.state.roleOnHide}
						// onHide={this.cancelCreateEvent}
					>
						<Modal.Header>
							<Modal.Title id="contained-modal-title-vcenter">
								Create a role
							</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<div className="create_event">
								<Form>
									<Form.Row>
										<Form.Group
											className="formEventName"
											controlId="formGridEventName"
										>
											<Form.Label as={Form.col} size="sm">
												Event Name
											</Form.Label>
											<Form.Control
												type="Name"
												as={Form.col}
												placeholder={this.state.Name}
												size="sm"
												onChange={this.handleNameChange}
											/>
										</Form.Group>
										<Form.Group
											className="formEventDate"
											controlId="formGridEventDate"
										>
											<Form.Label as={Form.col} size="sm">
												Event Date
											</Form.Label>
											<Form.Control
												type="Date"
												as={Form.col}
												placeholder={this.state.Name}
												size="sm"
												onChange={this.handleNameChange}
											/>
										</Form.Group>
										<Form.Group
											className="formMaximumPeople"
											controlId="formGridMaximumPeople"
										>
											<Form.Label as={Form.col} size="sm">
												Maximum People
											</Form.Label>
											<Form.Control
												type="Maximum People"
												as={Form.col}
												placeholder={this.state.Name}
												size="sm"
												onChange={this.handleNameChange}
											/>
										</Form.Group>
									</Form.Row>
									<Form.Row>
										<Form.Group
											controlId="formGridDescription"
											className="event_description"
										>
											<Form.Label size="sm">
												Facilities
											</Form.Label>
											<Form.Control
												as="textarea"
												rows="4"
												placeholder={
													this.state.Postcode
												}
												size="lg"
											/>
										</Form.Group>
									</Form.Row>
								</Form>
							</div>
						</Modal.Body>
						<Modal.Footer>
							<Button
								variant="light"
								onClick={this.cancelCreateRole}
							>
								Close
							</Button>
							<Button onClick={this.cancelCreateRole}>
								Submit
							</Button>
						</Modal.Footer>
					</Modal>
					<div className="header">
						<h1 style={{ textAlign: "left" }}>All Roles</h1>
						<Button
							variant="primary"
							size="lg"
							style={{ float: "right", marginRight: "2em" }}
							onClick={this.createRole}
						>
							Create Role
						</Button>
					</div>{" "}
					<div className="body">
						<SearchField
							placeholder="Search..."
							onChange={this.onChange}
							value={this.state.searchKeyWord}
							searchText=""
							classNames="search-field"
						/>

						<Table striped bordered hover responsive variant="dark">
							<thead>
								<tr>
									<th>Username</th>
									<th>Role</th>
									<th>Email</th>
									<th>Create Date</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>1.1.1</td>
									<td>
										<Button variant="info">Edit</Button>
										<Button variant="info">View</Button>
									</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Jacob</td>
									<td>Thornton</td>
									<td>@fat</td>
									<td>
										<Button variant="info">Edit</Button>
										<Button variant="info">View</Button>
									</td>
								</tr>
								<tr>
									<td>3</td>
									<td>Larry</td>
									<td>the Bird</td>
									<td>@twitter</td>
									<td>
										<Button variant="info">Edit</Button>
										<Button variant="info">View</Button>
									</td>
								</tr>
								<tr>
									<td>1</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>1.1.1</td>
									<td>
										<Button variant="info">Edit</Button>
										<Button variant="info">View</Button>
									</td>
								</tr>
								<tr>
									<td>1</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>1.1.1</td>
									<td>
										<Button variant="info">Edit</Button>
										<Button variant="info">View</Button>
									</td>
								</tr>
								<tr>
									<td>1</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>1.1.1</td>
									<td>
										<Button variant="info">Edit</Button>
										<Button variant="info">View</Button>
									</td>
								</tr>
								<tr>
									<td>1</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>1.1.1</td>
									<td>
										<Button variant="info">Edit</Button>
										<Button variant="info">View</Button>
									</td>
								</tr>
								<tr>
									<td>1</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>1.1.1</td>
									<td>
										<Button variant="info">Edit</Button>
										<Button variant="info">View</Button>
									</td>
								</tr>
								<tr>
									<td>1</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>1.1.1</td>
									<td>
										<Button variant="info">Edit</Button>
										<Button variant="info">View</Button>
									</td>
								</tr>
								<tr>
									<td>1</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>1.1.1</td>
									<td>
										<Button variant="info">Edit</Button>
										<Button variant="info">View</Button>
									</td>
								</tr>
								<tr>
									<td>1</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>1.1.1</td>
									<td>
										<Button variant="info">Edit</Button>
										<Button variant="info">View</Button>
									</td>
								</tr>
								<tr>
									<td>1</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>1.1.1</td>
									<td>
										<Button variant="info">Edit</Button>
										<Button variant="info">View</Button>
									</td>
								</tr>
							</tbody>
						</Table>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(AllRoles);
