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

import "../../styles/AllRoles.scss";

class AllRoles extends Component {
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
            <h1 style={{ textAlign: "left" }}>All Roles</h1>
            <Button
              variant="primary"
              size="lg"
              style={{ float: "right", marginRight: "2em" }}
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