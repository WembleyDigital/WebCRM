import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
import SideBar from "./SideBar";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "../../style/Dashboard.css";

class Dashboard extends Component {
	render() {
		// return this.props.Dashboard.map(todo => (
		// <TodoItem
		// 	key={todo.id}
		// 	todo={todo}
		// 	markComplete={this.props.markComplete}
		// 	delTodo={this.props.delTodo}
		// />
		// ));
		return (
			<div className="Dashboard">
				<SideBar SideBar={this.SideBar} />
				<div className="content">
					<Card
						className="card-sm-1"
						style={{ width: "35rem", height: "10rem" }}
					>
						<Card.Img
							border="dark"
							variant="top"
							src="holder.js/100px180"
						/>
						<Card.Body style={{ textAlign: "right" }}>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
					<Card
						className="card-sm-1"
						style={{ width: "35rem", height: "10rem" }}
					>
						<Card.Img variant="top" src="holder.js/100px180" />
						<Card.Body style={{ textAlign: "right" }}>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
					<Card
						className="card-sm-1"
						style={{ width: "35rem", height: "10rem" }}
					>
						<Card.Img variant="top" src="holder.js/100px180" />
						<Card.Body style={{ textAlign: "right" }}>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>{" "}
					<Card
						className="card-md"
						style={{ width: "115rem", height: "40rem" }}
					>
						<Card.Img variant="top" src="holder.js/100px180" />
						<Card.Body style={{ textAlign: "right" }}>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>{" "}
					<Card
						className="card-sm-2"
						style={{ width: "30rem", height: "15rem" }}
					>
						<Card.Img
							border="dark"
							variant="top"
							src="holder.js/100px180"
						/>
						<Card.Body style={{ textAlign: "right" }}>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
					<Card
						className="card-sm-2"
						style={{ width: "30rem", height: "15rem" }}
					>
						<Card.Img
							border="dark"
							variant="top"
							src="holder.js/100px180"
						/>
						<Card.Body style={{ textAlign: "right" }}>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
					<Card
						className="card-sm-2"
						style={{ width: "30rem", height: "15rem" }}
					>
						<Card.Img
							border="dark"
							variant="top"
							src="holder.js/100px180"
						/>
						<Card.Body style={{ textAlign: "right" }}>
							<Card.Title>Card Title</Card.Title>
							<Card.Text>
								Some quick example text to build on the card
								title and make up the bulk of the card's
								content.
							</Card.Text>
							<Button variant="primary">Go somewhere</Button>
						</Card.Body>
					</Card>
				</div>
			</div>
		);
	}
}

// PropTypes
// Dashboard.propTypes = {
// 	Dashboard: PropTypes.array.isRequired,
// 	markComplete: PropTypes.func.isRequired,
// 	delTodo: PropTypes.func.isRequired
// };

export default Dashboard;
