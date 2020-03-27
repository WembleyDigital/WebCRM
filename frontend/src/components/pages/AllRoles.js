import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";
import SideBar from "./SideBar";

class AllRoles extends Component {
  state = {};
  render() {
    return (
      <div>
        <SideBar SideBar={this.SideBar} />
        <div className="content">
          <h1 style={{ textAlign: "left", margin: "3em" }}>All Roles</h1>
        </div>
      </div>
    );
  }
}

export default withRouter(AllRoles);
