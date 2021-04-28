import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button, Dropdown, DropdownButton, FormControl } from "react-bootstrap";

export const Navbar1 = () => {
	return (
		<div className="container">
			<Navbar bg="light" expand="lg">
				<Navbar.Brand href="#home">
					<i className="fab fa-instagram fa-2x d-inline-block align-top" width="30" height="30" />
					React Bootstrap
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<Nav.Link href="#home">Home</Nav.Link>
						<Nav.Link href="#link">Clases</Nav.Link>
						<Nav.Link href="#link">Contacto</Nav.Link>
					</Nav>
					<DropdownButton inline id="dropdown-basic-button" title="Dropdown button">
						<Dropdown.Item href="#/action-1">Action</Dropdown.Item>
						<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
						<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
					</DropdownButton>
				</Navbar.Collapse>
			</Navbar>
			<script src="https://kit.fontawesome.com/3b05315429.js" crossOrigin="anonymous" />
		</div>
	);
};
