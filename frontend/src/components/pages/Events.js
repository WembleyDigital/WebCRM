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

import "../../styles/Events.scss";

class Events extends Component {
	state = {
		searchKeyWord: "",
		event_data: [],
		wineries: [],
	};

	onChange = (value) => {
		this.setState({ searchKeyWord: value });
	};

	async componentDidMount() {
		try {
			/* fetch event list and save it to state as event_data*/
			var url =
				"https://dy4v35a040.execute-api.ap-southeast-2.amazonaws.com/latest/home/event";
			var response = await fetch(url);
			var data = await response.json();
			await this.setState({ event_data: data.date });
			/* fetch winery list and save it to state as wineries*/
			var url =
				"https://dy4v35a040.execute-api.ap-southeast-2.amazonaws.com/latest/home/winery";
			var response = await fetch(url);
			var data = await response.json();
			await this.setState({ wineries: data });
		} catch (err) {
			console.log(err);
		}
	}

	render() {
		console.log(this.state.event_data);
		return (
			<div>
				<SideBar SideBar={this.SideBar} />
				<div className="content">
					<div className="header">
						<h1 style={{ textAlign: "left" }}>Events</h1>
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
									<th>Event Name</th>
									<th>Event Org</th>
									<th>Event Date</th>
									<th>Start From</th>
									<th>Maximum Population</th>
									<th>Actions</th>
								</tr>
							</thead>
							<tbody>
								{this.state.event_data.map((item, key) => (
									<tr key={key}>
										<td>{item.title}</td>
										<td>
											{this.state.wineries
												.filter(
													(winery) =>
														item.winery_id ===
														winery.id
												)
												.map(
													(winery) =>
														winery.Alphabetical_Index
												)}
										</td>
										<td>{item.eventDate}</td>
										<td>{item.startPeriod}</td>
										<td>{item.maximum_population}</td>
										<td>
											<Button
												className="event_btn"
												variant="info"
												size="sm"
												onClick={this.handleEventView}
											>
												<p>View</p>
											</Button>
											<Button
												className="event_btn"
												variant="info"
												size="sm"
											>
												<p>More</p>
											</Button>
										</td>
									</tr>
								))}
							</tbody>
						</Table>
					</div>
				</div>
			</div>
		);
	}
}

export default withRouter(Events);
