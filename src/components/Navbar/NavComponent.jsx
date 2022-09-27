// import Container from "react-bootstrap/Container";
// import { Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
// import { Cart, PersonFill } from "react-bootstrap-icons";
// import { useNavigate } from "react-router-dom";
// import { getUserInfo, removeUserInfo } from "../User/UserInfo";

// function NavComponent({ isLoggedIn, setIsLoggedIn, role }) {
// 	const navigate = useNavigate();

// 	const handleLogout = () => {
// 		setIsLoggedIn(false);
// 		removeUserInfo();
// 		navigate("/");
// 	};

// 	return (
// 		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
// 			<Container>
// 				<Navbar.Brand onClick={isLoggedIn ? () => navigate("/home") : undefined}>
// 					LensCart
// 				</Navbar.Brand>
// 				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
// 				{isLoggedIn ? (
// 					<Navbar.Collapse id="responsive-navbar-nav">
// 						<Nav className="me-auto">
// 							<Nav.Link
// 								onClick={() => {
// 									switch (role) {
// 										case "user":
// 											navigate("/getAllDietPlans");
// 											break;
// 										case "admin":
// 											navigate("/getAllDietPlans");
// 											break;
// 										default:
// 											alert("Please Login First");
// 									}
// 								}}
// 							>
// 								Diet Plans
// 							</Nav.Link>
// 							<Nav.Link
// 								onClick={() => {
// 									switch (role) {
// 										case "user":
// 											navigate("/showallglasses");
// 											break;
// 										case "admin":
// 											navigate("/showallglassesadmin");
// 											break;
// 										default:
// 											alert("Please Login First");
// 									}
// 								}}
// 							>
// 								Glasses
// 							</Nav.Link>
// 							<Nav.Link
// 								onClick={() => {
// 									switch (role) {
// 										case "user":
// 											navigate("/showallsunglasses");
// 											break;
// 										case "admin":
// 											navigate("/showallsunglassesadmin");
// 											break;
// 										default:
// 											alert("Please Login First");
// 									}
// 								}}
// 							>
// 								Sun Glasses
// 							</Nav.Link>
// 							<Nav.Link
// 								onClick={() => {
// 									switch (role) {
// 										case "user":
// 											navigate("/showalllenses");
// 											break;
// 										case "admin":
// 											navigate("/showalllensesadmin");
// 											break;
// 										default:
// 											alert("Please Login First");
// 									}
// 								}}
// 							>
// 								Contact Lenses
// 							</Nav.Link>
// 						</Nav>
// 						<Nav>
// 							{role === "user" && (
// 								<Nav.Link onClick={() => navigate("/cart")}>
// 									<Button variant="outline-primary">
// 										<Cart size={20} />
// 										Cart
// 									</Button>
// 								</Nav.Link>
// 							)}
// 							<NavDropdown title={<PersonFill size={20} />} id="collasible-nav-dropdown">
// 								<NavDropdown.Item disabled>
// 									Welcome {getUserInfo().loginName},
// 								</NavDropdown.Item>
// 								<NavDropdown.Item onClick={() => navigate("/profile")}>Profile</NavDropdown.Item>
// 								<NavDropdown.Divider />
// 								<NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
// 							</NavDropdown>
// 						</Nav>
// 					</Navbar.Collapse>
// 				) : undefined}
// 			</Container>
// 		</Navbar>
// 	);
// }

// export default NavComponent;
