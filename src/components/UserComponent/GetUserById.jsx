import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../../services/UserService";
import { Form, Button, Card, Row, Col } from "react-bootstrap";
import { getUserInfo, removeUserInfo } from "./UserInfo";

function GetUserById({ setIsLoggedIn }) {
	const [user, setUser] = useState("");
	const userId = getUserInfo().userId;

	const navigate = useNavigate();

	useEffect(() => {
		UserService.getUserById(userId).then((resp) => {
			setUser(resp.data);
		});
	}, [userId]);
	const handleSubmit = () => {
		navigate(`/updateUser/${userId}`);
	};
	const handleDelete = () => {
		UserService.deleteUserById(userId).then((res) => {
			removeUserInfo();
			setIsLoggedIn(false);
			alert("Deleted Successfully");
			navigate("/");
		});
	};

	return (
		<div
			style={{
				backgroundColor: "#8EC5FC",
				backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
			}}
		>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					minHeight: "85vh",
					fontSize: "18px",
					fontWeight: "bold",
				}}
			>
				<Card
					style={{
						width: "30rem",
						padding: "40px",
						margin: "30px",
						backgroundColor: "#FFDEE9",
						backgroundImage: "linear-gradient(0deg, #FFDEE9 0%, #B5FFFC 100%)",
					}}
				>
					<Form onSubmit={(e) => handleSubmit(e)}>
						<Card.Body>
							<Card.Title>
								<h2>Profile Details</h2>
							</Card.Title>
							<hr />
							<Card.Text>Name: {user.loginName}</Card.Text>
							<Card.Text>Email Address: {user.userEmail}</Card.Text>
							<Card.Text>Password: {user.userPassword}</Card.Text>
							{/* <Card.Text>Mobile No: {user.number}</Card.Text>
							<Card.Text>Address: {user.address}</Card.Text> */}
							<Row>
								<Col>
									<Button variant="primary" type="submit">
										Update
									</Button>
								</Col>
								<Col>
									<Button variant="danger" onClick={handleDelete}>
										Delete
									</Button>
								</Col>
							</Row>
						</Card.Body>
					</Form>
				</Card>
			</div>
		</div>
	);
}
export default GetUserById;
