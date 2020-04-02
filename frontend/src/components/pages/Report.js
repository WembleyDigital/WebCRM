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

class Reports extends Component {
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
            <h1 style={{ textAlign: "left" }}>Reports</h1>
          </div>{" "}
          <div className="body">
            <Tabs defaultActiveKey="Sales_report" id="report_tabs">
              <Tab eventKey="Sales_report" title="Sales Report">
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
                      <th>Period</th>
                      <th>Create Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>1.1.1</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>Download</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>Download</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>Download</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>Download</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>Download</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>Download</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>Download</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>Download</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>Download</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>Download</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>Download</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>Download</p>
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Tab>
              <Tab eventKey="Revenue_report" title="Revenue Report">
                <Table striped bordered hover responsive variant="dark">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Period</th>
                      <th>Create Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>1.1.1</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>Download</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>Download</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>Download</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>Download</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>Download</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>Download</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>Download</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>Download</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>Download</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>Download</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>Download</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>Download</p>
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Tab>
              <Tab eventKey="Income_report" title="Income Report">
                <Table striped bordered hover responsive variant="dark">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Period</th>
                      <th>Create Date</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>1.1.1</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>Download</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>Download</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>Download</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>Download</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>Download</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>Download</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>Download</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>Download</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>Download</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>Download</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>Download</p>
                        </Button>
                      </td>
                    </tr>
                    <tr>
                      <td>1</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>
                        <Button variant="info">
                          <p>View</p>
                        </Button>
                        <Button variant="info">
                          <p>Download</p>
                        </Button>
                      </td>
                    </tr>
                  </tbody>
                </Table>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Reports);
