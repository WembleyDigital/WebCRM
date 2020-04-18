import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	withRouter
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
		eventOnHide: true
	};

	onChange = value => {
		this.setState({ searchKeyWord: value });
	};

	createProduct = event => {
		this.setState({ eventOnHide: false });
	};

	cancelCreateProduct = event => {
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
											controlId="formGridProductYear"
										>
											<Form.Label size="sm">
												Product Year
											</Form.Label>
											<Form.Control
												placeholder={this.state.Address}
												size="sm"
											/>
										</Form.Group>
										<Form.Group
											as={Form.col}
											controlId="formGridCostOfPrice"
										>
											<Form.Label size="sm">
												Cost of Price
											</Form.Label>
											<Form.Control
												placeholder={this.state.Address}
												size="sm"
											/>
										</Form.Group>
										<Form.Group
											as={Form.col}
											controlId="formGridPrice"
										>
											<Form.Label size="sm">
												Price
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
											controlId="formGridCurrentStock"
										>
											<Form.Label size="sm">
												Current Stock
											</Form.Label>
											<Form.Control
												placeholder={this.state.City}
												size="sm"
											/>
										</Form.Group>
										<Form.Group
											as={Form.col}
											controlId="formGridThreshold"
										>
											<Form.Label size="sm">
												Threshold
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
											controlId="formGridVolume"
										>
											<Form.Label size="sm">
												Volume
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
											controlId="formGridBottlesPerCase"
										>
											<Form.Label size="sm">
												Bottles Per Case
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
											controlId="formGridAlcohol"
										>
											<Form.Label size="sm">
												Alcohol
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
											controlId="formGridStandartDerinks"
										>
											<Form.Label size="sm">
												Standart Derinks
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
											controlId="formGridSightRating"
										>
											<Form.Label size="sm">
												Rating (Sight)
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
											controlId="formGridNoseRating"
										>
											<Form.Label size="sm">
												Rating (Nose)
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
											controlId="formGridPalateRating"
										>
											<Form.Label size="sm">
												Rating (Palate)
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
										{" "}
										<Form.Group
											controlId="formGridFoodPairing"
											md="5"
											className="food_pairing"
										>
											<Form.Label size="sm">
												Food Pairing (Choose Multiple)
											</Form.Label>
											<Form.Control
												as="select"
												multiple
												placeholder={
													this.state.Postcode
												}
												size="sm"
											>
												<option>1</option>
												<option>2</option>
												<option>3</option>
												<option>4</option>
												<option>5</option>
											</Form.Control>
										</Form.Group>
									</Form.Row>
									<Form.Row>
										<Form.Group
											controlId="formGridWinemakerReview"
											className="winemaker_review"
										>
											<Form.Label size="sm">
												Winemaker Review
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
						<Modal.Header>
							<Modal.Title id="contained-modal-title-vcenter">
								Upload Product Certifications or Documents
							</Modal.Title>
						</Modal.Header>
						<Modal.Body>
							<div className="upload_documents">
								<Form>
									<Form.Row>
										<Form.Group
											className="formUploadHealthCert"
											controlId="formGridUpHealthCert"
										>
											<FormFile id="formcheck-api-regular">
												<Form.File.Label>
													Upload Health Certification
												</Form.File.Label>
												<Form.File.Input
													type="file"
													acept="image/*"
												/>
											</FormFile>
										</Form.Group>
										<Form.Group
											className="formUploadProductAwardDoc"
											controlId="formGridUpProductAwardDoc"
										>
											<FormFile id="formcheck-api-regular">
												<Form.File.Label>
													Upload Product Award Doc
												</Form.File.Label>
												<Form.File.Input
													type="file"
													acept="image/*"
												/>
											</FormFile>
										</Form.Group>
										<Form.Group
											className="formUploadBottlingCertificate"
											controlId="formGridUpBottlingCertificate"
										>
											<FormFile id="formcheck-api-regular">
												<Form.File.Label>
													Upload Bottling Certificate
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
											className="formUploadAnalysisCertification"
											controlId="formGridUpAnalysisCertification"
										>
											<FormFile id="formcheck-api-regular">
												<Form.File.Label>
													Upload Analysis
													Certification
												</Form.File.Label>
												<Form.File.Input
													type="file"
													acept="image/*"
												/>
											</FormFile>
										</Form.Group>
										<Form.Group
											className="formUploadFrontend/backendLabel"
											controlId="formGridUpFrontend/backendLabel"
										>
											<FormFile id="formcheck-api-regular">
												<Form.File.Label>
													Upload Frontend / Backend
													Label
												</Form.File.Label>
												<Form.File.Input
													type="file"
													acept="image/*"
												/>
											</FormFile>
										</Form.Group>
									</Form.Row>
								</Form>
							</div>
						</Modal.Body>
						<Modal.Footer>
							<Button
								variant="light"
								onClick={this.cancelCreateProduct}
							>
								Close
							</Button>
							<Button onClick={this.cancelCreateProduct}>
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
