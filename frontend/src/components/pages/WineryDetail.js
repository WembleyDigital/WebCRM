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
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Form from "react-bootstrap/Form";

import "../../styles/AllRoles.scss";

class WineryDetail extends Component {
  state = {
    searchKeyWord: ""
  };

  onChange = value => {
    this.setState({ searchKeyWord: value });
  };

  render() {
    return (
      <div>
        <SideBar SideBar={this.SideBar} />
        <div className="content">
          <div className="header">
            <h1 style={{ textAlign: "left" }}>WineryDetail</h1>
          </div>{" "}
          <div className="body">
            <Tabs defaultActiveKey="Winery_Detail" id="winery_detail_tabs">
              <Tab eventKey="Winery_Detail" title="Winery Detail">
                <div className="winery_detail">
                  <Form>
                    <h1>Profile</h1>
                    <Form.Row>
                      <Form.Group className="formName" controlId="formGridName">
                        <Form.Label size="sm">Company Name</Form.Label>
                        <Form.Control
                          type="Name"
                          placeholder={this.state.Name}
                          readOnly={!this.state.inEditMode}
                          size="sm"
                          onChange={this.handleNameChange}
                        />
                      </Form.Group>
                      <Form.Group className="formABN" controlId="formGridABN">
                        <Form.Label size="sm">ABN</Form.Label>
                        <Form.Control
                          type="ABN"
                          placeholder={this.state.ABN}
                          readOnly={!this.state.inEditMode}
                          size="sm"
                          onChange={this.handleABNChange}
                        />
                      </Form.Group>
                      <Form.Group className="formACN" controlId="formGridACN">
                        <Form.Label size="sm">ACN</Form.Label>
                        <Form.Control
                          type="ACN"
                          placeholder={this.state.ACN}
                          readOnly={!this.state.inEditMode}
                          size="sm"
                          onChange={this.handleACNChange}
                        />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Form.col} controlId="formGridDescription">
                        <Form.Label size="lg">Description</Form.Label>
                        <Form.Control
                          placeholder={this.state.Description}
                          readOnly={!this.state.inEditMode}
                          size="lg"
                        />
                      </Form.Group>
                    </Form.Row>
                    <h1>Address</h1>
                    <Form.Row>
                      <Form.Group as={Form.col} controlId="formGridAddress1">
                        <Form.Label size="lg">Address 1</Form.Label>
                        <Form.Control
                          placeholder={this.state.Address1}
                          readOnly={!this.state.inEditMode}
                          size="lg"
                        />
                      </Form.Group>
                      <Form.Group as={Form.col} controlId="formGridAddress2">
                        <Form.Label size="lg">Address 2</Form.Label>
                        <Form.Control
                          placeholder={this.state.Address2}
                          readOnly={!this.state.inEditMode}
                          size="lg"
                        />
                      </Form.Group>
                      <Form.Group as={Form.col} controlId="formGridState">
                        <Form.Label size="lg">State</Form.Label>
                        <Form.Control
                          as="select"
                          value="Choose..."
                          placeholder={this.state.State}
                          readOnly={!this.state.inEditMode}
                          size="lg"
                          // onSelect={this.handleSelectState}
                        >
                          <option>Victoria</option>
                          <option>New South Wales</option>
                          <option>Tasmania</option>
                          <option>Queensland</option>
                          <option>Western Australia</option>
                          <option>South Australia</option>
                        </Form.Control>
                      </Form.Group>

                      <Form.Group as={Form.col} controlId="formGridPostcode">
                        <Form.Label size="lg">Postcode</Form.Label>
                        <Form.Control
                          placeholder={this.state.Postcode}
                          readOnly={!this.state.inEditMode}
                          size="lg"
                        />
                      </Form.Group>
                    </Form.Row>
                    <h1>Contact</h1>
                    <Form.Row>
                      <Form.Group
                        className="formPhoneNumber"
                        controlId="formGridPhoneNumber"
                      >
                        <Form.Label size="sm">Phone Number</Form.Label>
                        <Form.Control
                          type="PhoneNumber"
                          placeholder={this.state.PhoneNumber}
                          readOnly={!this.state.inEditMode}
                          size="sm"
                          onChange={this.handlePhoneNumberChange}
                        />
                      </Form.Group>
                      <Form.Group
                        className="formEmail"
                        controlId="formGridEmail"
                      >
                        <Form.Label size="sm">Email</Form.Label>
                        <Form.Control
                          type="Email"
                          placeholder={this.state.Email}
                          readOnly={!this.state.inEditMode}
                          size="sm"
                          onChange={this.handleEmailChange}
                        />
                      </Form.Group>
                    </Form.Row>
                    {this.state.inEditMode ? (
                      <Button
                        variant="primary"
                        // type="submit"
                        className="account_detail_btn"
                        onClick={this.handleDetailSubmit}
                        size="lg"
                      >
                        Submit
                      </Button>
                    ) : null}
                  </Form>
                </div>
              </Tab>
              <Tab eventKey="Bank_Detail" title="Bank Detail">
                {" "}
                <div className="bank_card">
                  <h1>
                    Bank Card{" "}
                    <Button
                      variant="outline-danger"
                      size="lg"
                      style={{ float: "right" }}
                    >
                      Edit
                    </Button>{" "}
                  </h1>{" "}
                  <p>Name: Azure Estate Wines</p>
                  <p>BSB: 123123123123</p>
                  <p>Account Number: 123123123123</p>
                  <p>SWIFT: WDGEVC</p>
                </div>
              </Tab>
              <Tab eventKey="Products" title="Products">
                {" "}
                <div className="products">
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
              </Tab>
              <Tab eventKey="Orders" title="Orders"></Tab>
              <Tab eventKey="Invoices" title="Invoices"></Tab>
              <Tab eventKey="Reports" title="Reports"></Tab>
              <Tab eventKey="Agreements" title="Agreements"></Tab>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(WineryDetail);
