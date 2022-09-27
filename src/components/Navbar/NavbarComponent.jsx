/* eslint-disable */
import Container from "react-bootstrap/Container";
import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import { Cart, PersonFill } from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";
import { removeUserInfo } from "../UserComponent/UserInfo";


function NavbarComponent({ isLoggedIn, setIsLoggedIn, role }) {
	const navigate = useNavigate();

	const handleLogout = () => {
		setIsLoggedIn(false);
		removeUserInfo();
		navigate("/");
	};

	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Container>
				<Navbar.Brand onClick={isLoggedIn ? () => navigate("/home") : undefined}>
					Nutrition App
				</Navbar.Brand>

				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				{(
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link>
								<NavDropdown title="Diet Plan" id="collapsible-nav-dropdown">
									<NavDropdown.Item onClick={() => navigate("/addDietPlan")}>Add Diet Plan</NavDropdown.Item>
									<NavDropdown.Item onClick={() => navigate("/getDietPlans")}>View Diet Plans</NavDropdown.Item>
									
								</NavDropdown>
							</Nav.Link>

							<Nav.Link>
								<NavDropdown title="Nutrition Plan" id="collapsible-nav-dropdown2">
									<NavDropdown.Item onClick={() => navigate("/addNutritionPlan")}>Add Nutrition Plan</NavDropdown.Item>
									<NavDropdown.Item onClick={() => navigate("/getNutritionPlans")}>View Nutrition Plan</NavDropdown.Item>
								</NavDropdown>
							</Nav.Link>

							<Nav.Link>
								<NavDropdown title="Weight Log" id="collapsible-nav-dropdown3">
									<NavDropdown.Item onClick={() => navigate("/addWeightLog")}>Add Weight Log</NavDropdown.Item>
									<NavDropdown.Item onClick={() => navigate("/getWeightLogs")}>View Weight Log</NavDropdown.Item>
								</NavDropdown>
							</Nav.Link>

							<Nav.Link>
								<NavDropdown title="Payment Details" id="collapsible-nav-dropdown4">
									<NavDropdown.Item onClick={() => navigate("/addPayment")}>Add Payment Details</NavDropdown.Item>
									<NavDropdown.Item onClick={() => navigate("/getPayments")}>View Payment Status</NavDropdown.Item>
								</NavDropdown>
							</Nav.Link>

						</Nav>
						<Nav>
							{/* {
								<Nav.Link onClick={() => navigate("/cart")}>
									<Button variant="outline-primary">
										<Cart size={20} />
										Cart
									</Button>
								</Nav.Link>
							} */}
							<NavDropdown title={<PersonFill size={25} />} id="collapsible-nav-dropdown">
								<NavDropdown.Item disabled> Welcome </NavDropdown.Item>
								<NavDropdown.Item onClick={() => navigate("/profile")}>Profile</NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
							</NavDropdown>
						</Nav>
					</Navbar.Collapse>
				)}
			</Container>
		</Navbar>
	);
}

export default NavbarComponent;
