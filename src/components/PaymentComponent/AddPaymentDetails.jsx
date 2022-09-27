import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Form, Button, FloatingLabel, Card, Row, Col } from "react-bootstrap";
import PaymentService from "../../services/PaymentService";

const AddPaymentDetails = () => {
    const navigate = useNavigate();

    const [payment, setPayment] = useState("");
    const [created_At, setCreated_At] = useState("");
    const [updated_At, setUpdated_At] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        const newPayment = {
            payment: payment,
            created_At: created_At,
            updated_At: updated_At
        };
        console.log(newPayment);

        PaymentService.addPayementDetails(newPayment)
            .then((res) => {
                console.log(res);
                console.log("Payment Details Added Successfully");
                navigate("/getPayments");
            })
            .catch((err) => {
                console.log(err.response.data);

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
        <div style={{ display: "flex", justifyContent: "center", minHeight: "85vh", backgroundImage:"url(https://images.photocase.com/a/an22sooc/43dcexuw/photocase43dcexuw2.jpg)", opacity: "0.95" }}>
            <Card style={{ width: "60%", padding: "20px", margin: "10px", opacity: "0.95" }}>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <FloatingLabel controlId="payment" label="Payment Status" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Enter Payment Status"
                            required
                            value={payment}
                            onChange={(e) => setPayment(e.target.value)}
                        />
                    </FloatingLabel>
                    <Card.Text style={{ color: "red", fontSize: "14px" }}>{}</Card.Text>
                    
                    <FloatingLabel controlId="created_At" label="Created At" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Created At"
                            required
                            value={created_At}
                            onChange={(e) => setCreated_At(e.target.value)}
                        />
                    </FloatingLabel>
                    <Card.Text style={{ color: "red", fontSize: "14px" }}>{}</Card.Text>

                    <FloatingLabel controlId="updated_At" label="Updated At" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Updated At"
                            required
                            value={updated_At}
                            onChange={(e) => setUpdated_At(e.target.value)}
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
export default AddPaymentDetails;
