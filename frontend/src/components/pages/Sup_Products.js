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
import FormFile from "react-bootstrap/FormFile";
import "../../styles/Products.scss";

class Products extends Component {
	state = {
		searchKeyWord: "",
		eventOnHide: true,
	};

	onChange = (value) => {
		this.setState({ searchKeyWord: value });
	};

	createProduct = (event) => {
		this.setState({ eventOnHide: false });
	};

	cancelCreateProduct = (event) => {
		this.setState({ eventOnHide: true });
	};

	render() {
		return (
			<div>
				<SideBar
					SideBar={this.SideBar}
					menuOpen={!this.state.eventOnHide}
				/>
				<div className="content">
					<Modal
						size="lg"
						aria-labelledby="contained-modal-title-vcenter"
						centered
						show={!this.state.eventOnHide}
						// onHide={this.cancelCreateEvent}
					>
						<Modal.Header>
							<Modal.Title id="contained-modal-title-vcenter">
								Create a product
							</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<div className="create_product">
								<Form>
									<Form.Row>
										<Form.Group
											className="formProductName"
											controlId="formGridProductName"
										>
											<Form.Label as={Form.col} size="sm">
												Product Name
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
											className="formBarcode"
											controlId="formGridBarcode"
										>
											<Form.Label as={Form.col} size="sm">
												Barcode
											</Form.Label>
											<Form.Control
												as={Form.col}
												placeholder={this.state.Name}
												size="sm"
												onChange={this.handleNameChange}
											/>
										</Form.Group>
										<Form.Group
											className="formUploadImage"
											controlId="formGridUploadImage"
										>
											<FormFile id="formcheck-api-regular">
												<Form.File.Label>
													Upload Image
												</Form.File.Label>
												<Form.File.Input
													type="file"
													acept="image/*"
												/>
											</FormFile>
										</Form.Group>
									</Form.Row>
									<Form.Row>
										<Form.Group
											as={Form.col}
											controlId="formGridAddress1"
										>
											<Form.Label size="sm">
												Address 1
											</Form.Label>
											<Form.Control
												placeholder={this.state.Address}
												size="sm"
											/>
										</Form.Group>
										<Form.Group
											as={Form.col}
											controlId="formGridAddress2"
										>
											<Form.Label size="sm">
												Address 2
											</Form.Label>
											<Form.Control
												placeholder={this.state.Address}
												size="sm"
											/>
										</Form.Group>
										<Form.Group
											as={Form.col}
											controlId="formGridCity"
										>
											<Form.Label size="sm">
												City
											</Form.Label>
											<Form.Control
												placeholder={this.state.City}
												size="sm"
											/>
										</Form.Group>
									</Form.Row>
									<Form.Row>
										<Form.Group
											as={Form.col}
											controlId="formGridState"
										>
											<Form.Label size="sm">
												State
											</Form.Label>
											<Form.Control
												as="select"
												value="Choose..."
												placeholder={this.state.State}
												size="sm"
												// onSelect={this.handleSelectState}
											>
												<option>Victoria</option>
												<option>New South Wales</option>
												<option>Tasmania</option>
												<option>Queensland</option>
												<option>
													Western Australia
												</option>
												<option>South Australia</option>
											</Form.Control>
										</Form.Group>
										<Form.Group
											as={Form.col}
											controlId="formGridPostcode"
										>
											<Form.Label size="sm">
												Postcode
											</Form.Label>
											<Form.Control
												placeholder={
													this.state.Postcode
												}
												size="sm"
											/>
										</Form.Group>
									</Form.Row>
									<Form.Row>
										<Form.Group
											as={Form.col}
											controlId="formGridStartTime"
										>
											<Form.Label size="sm">
												Time start from
											</Form.Label>
											<Form.Control
												placeholder={
													this.state.Postcode
												}
												size="sm"
											/>
										</Form.Group>
										<Form.Group
											as={Form.col}
											controlId="formGridFinishTime"
										>
											<Form.Label size="sm">
												Time finish at
											</Form.Label>
											<Form.Control
												placeholder={
													this.state.Postcode
												}
												size="sm"
											/>
										</Form.Group>
										<Form.Group
											as={Form.col}
											controlId="formGridDressCode"
										>
											<Form.Label size="sm">
												Dress code
											</Form.Label>
											<Form.Control
												placeholder={
													this.state.Postcode
												}
												size="sm"
											/>
										</Form.Group>
									</Form.Row>
									<Form.Row>
										<Form.Group
											as={Form.col}
											controlId="formGridFacilities"
										>
											<Form.Label size="sm">
												Facilities
											</Form.Label>
											<Form.Control
												placeholder={
													this.state.Postcode
												}
												size="sm"
											/>
										</Form.Group>
										<Form.Group
											as={Form.col}
											controlId="formGridEmail"
										>
											<Form.Label size="sm">
												Email
											</Form.Label>
											<Form.Control
												placeholder={
													this.state.Postcode
												}
												size="sm"
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
								onClick={this.cancelCreateEvent}
							>
								Close
							</Button>
							<Button onClick={this.cancelCreateEvent}>
								Submit
							</Button>
						</Modal.Footer>
					</Modal>
					<div className="header">
						<h1 style={{ textAlign: "left" }}>Products List</h1>
						<Button
							variant="primary"
							size="lg"
							style={{ float: "right", marginRight: "2em" }}
							onClick={this.createProduct}
						>
							Create A Product
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
									<th>Name</th>
									<th>Category</th>
									<th>Volumn</th>
									<th>Food Pairing</th>
									<th>Price per bottle</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td>1</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>1.1.1</td>
									<td>1.1.1</td>
									<td>
										<Button variant="info">
											<p>View</p>
										</Button>
										<Button variant="info">
											<p>More</p>
										</Button>
									</td>
								</tr>
								<tr>
									<td>2</td>
									<td>Jacob</td>
									<td>Thornton</td>
									<td>@fat</td>
									<td>1.1.1</td>
									<td>
										<Button variant="info">
											<p>View</p>
										</Button>
										<Button variant="info">
											<p>More</p>
										</Button>
									</td>
								</tr>
								<tr>
									<td>3</td>
									<td>Larry</td>
									<td>the Bird</td>
									<td>@twitter</td>
									<td>1.1.1</td>
									<td>
										<Button variant="info">
											<p>View</p>
										</Button>
										<Button variant="info">
											<p>More</p>
										</Button>
									</td>
								</tr>
								<tr>
									<td>1</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>1.1.1</td>
									<td>1.1.1</td>
									<td>
										<Button variant="info">
											<p>View</p>
										</Button>
										<Button variant="info">
											<p>More</p>
										</Button>
									</td>
								</tr>
								<tr>
									<td>1</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>1.1.1</td>
									<td>1.1.1</td>
									<td>
										<Button variant="info">
											<p>View</p>
										</Button>
										<Button variant="info">
											<p>More</p>
										</Button>
									</td>
								</tr>
								<tr>
									<td>1</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>1.1.1</td>
									<td>1.1.1</td>
									<td>
										<Button variant="info">
											<p>View</p>
										</Button>
										<Button variant="info">
											<p>More</p>
										</Button>
									</td>
								</tr>
								<tr>
									<td>1</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>1.1.1</td>
									<td>1.1.1</td>
									<td>
										<Button variant="info">
											<p>View</p>
										</Button>
										<Button variant="info">
											<p>More</p>
										</Button>
									</td>
								</tr>
								<tr>
									<td>1</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>1.1.1</td>
									<td>1.1.1</td>
									<td>
										<Button variant="info">
											<p>View</p>
										</Button>
										<Button variant="info">
											<p>More</p>
										</Button>
									</td>
								</tr>
								<tr>
									<td>1</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>1.1.1</td>
									<td>1.1.1</td>
									<td>
										<Button variant="info">
											<p>View</p>
										</Button>
										<Button variant="info">
											<p>More</p>
										</Button>
									</td>
								</tr>
								<tr>
									<td>1</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>1.1.1</td>
									<td>1.1.1</td>
									<td>
										<Button variant="info">
											<p>View</p>
										</Button>
										<Button variant="info">
											<p>More</p>
										</Button>
									</td>
								</tr>
								<tr>
									<td>1</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>1.1.1</td>
									<td>1.1.1</td>
									<td>
										<Button variant="info">
											<p>View</p>
										</Button>
										<Button variant="info">
											<p>More</p>
										</Button>
									</td>
								</tr>
								<tr>
									<td>1</td>
									<td>Mark</td>
									<td>Otto</td>
									<td>1.1.1</td>
									<td>1.1.1</td>
									<td>
										<Button variant="info">
											<p>View</p>
										</Button>
										<Button variant="info">
											<p>More</p>
										</Button>
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

export default withRouter(Products);
