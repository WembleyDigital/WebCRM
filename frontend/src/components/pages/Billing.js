import React, { Component } from "react";

import SideBar from "./SideBar";
import Button from "react-bootstrap/Button";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import "../../styles/Billing.scss";

class Billing extends Component {
  state = {
    currentPanel: "detail"
  };
  render() {
    return (
      <div>
        <SideBar SideBar={this.SideBar} />
        <div className="content">
          <div className="header">
            <h1 style={{ textAlign: "left" }}>Billing</h1>
          </div>
          <div className="body">
            <Tabs defaultActiveKey="bank_detail" id="billing_panel_tabs">
              <Tab eventKey="bank_detail" title="Bank Detail">
                <div className="billing_panel">
                  <div className="billing_card">
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
                  <div className="billing_card">
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
                </div>
              </Tab>
              <Tab eventKey="profile" title="Profile">
                <p>Meanwhile</p>
              </Tab>
              <Tab eventKey="contact" title="Contact">
                <p>Meanwhile1</p>
              </Tab>
            </Tabs>
          </div>
        </div>
      </div>
    );
  }
}

export default Billing;
