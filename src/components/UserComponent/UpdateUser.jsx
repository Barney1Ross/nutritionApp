import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button, FloatingLabel, Card, Row, Col } from "react-bootstrap";
import UserService from "../../services/UserService";


const UpdateUser = () => {
	const navigate = useNavigate();
    const { userId } = useParams();

    const [fullName, setFullName] = useState("");
    const [contact, setContact] = useState("");
    const [userGender, setUserGender] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [allergicTo, setAllergicTo] = useState("");
    const [loginName, setLoginName] = useState("");
    const [userPassword, setUserPassword] = useState("");
   


	useEffect(() => {
		UserService.getUserById(userId).then((resp) => {
			let updatedUser = resp.data;
			setFullName(updatedUser.fullName);
			setContact(updatedUser.contact);
			setUserGender(updatedUser.userGender);
            setUserEmail(updatedUser.userEmail);
            setAllergicTo(updatedUser.allergicTo);
            setLoginName(updatedUser.loginName);
            setUserPassword(updatedUser.setUserPassword);
		});

	}, [userId]);

	const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            fullName: fullName,
            contact: contact,
            userGender: userGender,
            userEmail: userEmail,
            allergicTo: allergicTo,
            loginName : loginName,
            userPassword: userPassword
        };
        console.log(newUser);

		UserService.updateUser(userId, newUser)
			.then((res) => {
				console.log(res);
				console.log("User Details Updated successfully");
				//navigate(`/getWeightLogs/${weightId}`);
			})
			.catch((err) => {
                console.log(err.response.data);
                // setCustomerNameError(err.response.data.customerName);

                if (err.response.status === 409) {
                    alert("Something went wrong");
                }
            });
	};
	const handleCancel = (e) => {
        e.preventDefault();
        navigate("/home");
    };

	return (
		<div style={{ display: "flex", justifyContent: "center", minHeight: "85vh" }}>
			<Card style={{ width: "60%", padding: "20px", margin: "10px" }}>
				<Form onSubmit={(e) => handleSubmit(e)}>
					 <FloatingLabel controlId="userId" label="User Id" className="mb-3">
						<Form.Control type="text" placeholder="User Id" disabled value={userId} />
					</FloatingLabel> 

                    <FloatingLabel controlId="fullName" label="Full Name" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Enter Full Name"
                            required
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                        />
                    </FloatingLabel>
                    <Card.Text style={{ color: "red", fontSize: "14px" }}>{ }</Card.Text>

                    <FloatingLabel controlId="contact" label="contact" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Enter Contact No."
                            required
                            value={contact}
                            onChange={(e) => setContact(e.target.value)}
                        />
                    </FloatingLabel>
                    <Card.Text style={{ color: "red", fontSize: "14px" }}>{}</Card.Text>

                    <FloatingLabel controlId="userGender" label="Gender" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Gender"
                            required
                            value={userGender}
                            onChange={(e) => setUserGender(e.target.value)}
                        />
                    </FloatingLabel>
                    <Card.Text style={{ color: "red", fontSize: "14px" }}>{}</Card.Text>

                    <FloatingLabel controlId="userEmail" label="Email Id" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Email Id"
                            required
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                        />
                    </FloatingLabel>
                    <Card.Text style={{ color: "red", fontSize: "14px" }}>{ }</Card.Text>

                    <FloatingLabel controlId="allergicTo" label="Allergic To" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Allergic To"
                            required
                            value={allergicTo}
                            onChange={(e) => setAllergicTo(e.target.value)}
                        />
                    </FloatingLabel>
                    <Card.Text style={{ color: "red", fontSize: "14px" }}>{}</Card.Text>
                    
                    <FloatingLabel controlId="loginName" label="Login Id" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="login Id"
                            required
                            value={loginName}
                            onChange={(e) => setLoginName(e.target.value)}
                        />
                    </FloatingLabel>
                    <Card.Text style={{ color: "red", fontSize: "14px" }}>{ }</Card.Text>

                    <FloatingLabel controlId="userPassword" label="Password" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Password"
                            required
                            value={userPassword}
                            onChange={(e) => setUserPassword(e.target.value)}
                        />
                    </FloatingLabel>
                    <Card.Text style={{ color: "red", fontSize: "14px" }}>{ }</Card.Text>
                    
                    <Row>
                        <Col>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Col>
                        <Col>
                            <Button variant="danger" onClick={handleCancel}>
                                Cancel
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </div>
	);
};
export default UpdateUser;
