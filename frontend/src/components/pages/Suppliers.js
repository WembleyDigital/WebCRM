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
import { MdChat, MdEmail } from "react-icons/md";

class Suppliers extends Component {
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
            <h1 style={{ textAlign: "left" }}>Suppliers</h1>
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
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>1.1.1</td>
                  <td>1.1.1</td>
                  <td>
                    <Button variant="info">
                      <MdEmail />
                    </Button>
                    <Button variant="info">
                      <MdChat />
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
                      <MdEmail />
                    </Button>
                    <Button variant="info">
                      <MdChat />
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
                      <MdEmail />
                    </Button>
                    <Button variant="info">
                      <MdChat />
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
                      <MdEmail />
                    </Button>
                    <Button variant="info">
                      <MdChat />
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
                      <MdEmail />
                    </Button>
                    <Button variant="info">
                      <MdChat />
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
                      <MdEmail />
                    </Button>
                    <Button variant="info">
                      <MdChat />
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
                      <MdEmail />
                    </Button>
                    <Button variant="info">
                      <MdChat />
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
                      <MdEmail />
                    </Button>
                    <Button variant="info">
                      <MdChat />
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
                      <MdEmail />
                    </Button>
                    <Button variant="info">
                      <MdChat />
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
                      <MdEmail />
                    </Button>
                    <Button variant="info">
                      <MdChat />
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
                      <MdEmail />
                    </Button>
                    <Button variant="info">
                      <MdChat />
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
                      <MdEmail />
                    </Button>
                    <Button variant="info">
                      <MdChat />
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

export default withRouter(Suppliers);
