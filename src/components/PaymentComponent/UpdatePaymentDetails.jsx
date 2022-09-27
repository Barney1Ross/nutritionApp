import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button, FloatingLabel, Card, Row, Col } from "react-bootstrap";
import PaymentService from "../../services/PaymentService";


const UpdatePaymentDetails = () => {
	const navigate = useNavigate();
    const { paymentId } = useParams();

    const [payment, setPayment] = useState("");
    const [created_At, setCreated_At] = useState("");
    const [updated_At, setUpdated_At] = useState("");
   


	useEffect(() => {
		PaymentService.getPaymentById(paymentId).then((resp) => {
			let updatePayment = resp.data;
			setPayment(updatePayment.payment);
			setCreated_At(updatePayment.created_At);
			setUpdated_At(updatePayment.updated_At);
		});
	}, [paymentId]);

	const handleSubmit = (e) => {
        e.preventDefault();
        const newPayment = {
            payment: payment,
            created_At: created_At,
            updated_At: updated_At
        };
        console.log(newPayment);

		PaymentService.updatePayment(paymentId,newPayment)
			.then((res) => {
				console.log(res);
				console.log("Payment Details Updated successfully");
				//navigate(`/getPayments/${paymentId}`);
			})
			.catch((err) => {
                console.log(err.response.data);
                // setCustomerNameError(err.response.data.customerName);

                if (err.response.status === 409) {
                    alert("Payment Details exists already");
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
					 <FloatingLabel controlId="paymentId" label="Payment Id" className="mb-3">
						<Form.Control type="text" placeholder="Payment ID" disabled value={paymentId} />
					</FloatingLabel> 

					<FloatingLabel controlId="payment" label="Payment Details" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Payment Details"
                            required
                            value={payment}
                            onChange={(e) => setPayment(e.target.value)}
                        />
                    </FloatingLabel>
                    <Card.Text style={{ color: "red", fontSize: "14px" }}>{ }</Card.Text>

                    <FloatingLabel controlId="created_At" label="Created At" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Created At"
                            required
                            value={created_At}
                            onChange={(e) => setCreated_At(e.target.value)}
                        />
                    </FloatingLabel>
                    <Card.Text style={{ color: "red", fontSize: "14px" }}>{ }</Card.Text>

                    <FloatingLabel controlId="updated_At" label="updated_At" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Updated At"
                            required
                            value={updated_At}
                            onChange={(e) => setUpdated_At(e.target.value)}
                        />
                    </FloatingLabel>
                    <Card.Text style={{ color: "red", fontSize: "14px" }}>{}</Card.Text>
                    
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
export default UpdatePaymentDetails;
