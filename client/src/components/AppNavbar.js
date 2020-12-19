import React, { useState } from "react";
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
} from "reactstrap";
import RegisterModal from "./auth/RegisterModal";
import Logout from "./auth/Logout";

const AppNavbar = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div>
			<Navbar
				color="dark"
				light
				expand="md"
				dark
				style={{ marginBottom: "2rem" }}
			>
				<NavbarBrand href="/">Shopping List</NavbarBrand>
				<NavbarToggler onClick={toggle} />
				<Collapse isOpen={isOpen} navbar>
					<Nav className="ml-auto" navbar>
						<NavItem>
							<RegisterModal />
						</NavItem>
						<NavItem>
							<Logout />
						</NavItem>
					</Nav>
				</Collapse>
			</Navbar>
		</div>
	);
};

export default AppNavbar;
