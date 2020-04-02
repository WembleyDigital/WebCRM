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

import "../../styles/AllRoles.scss";

class SuppliersWinery extends Component {
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
            <h1 style={{ textAlign: "left" }}>Suppliers - Winery</h1>
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
                  <th>ABN</th>
                  <th>State</th>
                  <th>Email</th>
                  <th>Phone Number</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Azur Estate Wines</td>
                  <td>12345678813</td>
                  <td>SA</td>
                  <td>xxxxx@xxx.com</td>
                  <td>0421231232</td>
                  <td>
                    <Button
                      variant="info"
                      onClick={e =>
                        this.handleViewWinery(
                          e,
                          "Azur Estate Wines",
                          "/suppliers_winery_detail"
                        )
                      }
                    >
                      View
                    </Button>
                    <Button variant="info">More</Button>
                  </td>
                </tr>
                <tr>
                  <td>Azur Estate Wines</td>
                  <td>12345678813</td>
                  <td>SA</td>
                  <td>xxxxx@xxx.com</td>
                  <td>0421231232</td>
                  <td>
                    <Button variant="info">View</Button>
                    <Button variant="info">More</Button>
                  </td>
                </tr>
                <tr>
                  <td>Azur Estate Wines</td>
                  <td>12345678813</td>
                  <td>SA</td>
                  <td>xxxxx@xxx.com</td>
                  <td>0421231232</td>
                  <td>
                    <Button variant="info">View</Button>
                    <Button variant="info">More</Button>
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

export default withRouter(SuppliersWinery);
