import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import PaymentService from "../../services/PaymentService";


function PaymentAdmin({ payment, setPayment }) {
	const navigate = useNavigate();

	const handleDelete = () => {
		PaymentService.deletePaymentById(payment.paymentId)
			.then((res) => {
				let updatedPaymentStat = res.data;
				alert("Payment Details Deleted Successfully");
				setPayment(updatedPaymentStat);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleUpdate = () => {
		navigate(`/updatePayment/${payment.paymentId}`);
	};
	const handleView = () => {
		navigate(`/getPaymentById/${payment.paymentId}`);
	};

	return (
		<Card
			style={{
				width: "400px",
				margin: "10px",
				alignItems: "center",
				boxShadow: "0px 0px 10px 1px ",
				padding: "10px",
                opacity: "0.93"
			}}
		>
			{/* <Card.Img height={200} variant="top"   /> */}
			<Card.Body>
				<Card.Title>{payment.payment}</Card.Title>
				<Card.Text>
					<b>Payment Status : </b> {payment.payment}
				</Card.Text>
				<Card.Text>
					<b>Created_At : </b> {payment.created_At}
				</Card.Text>
				<Card.Text>
					<b>Updated_At: </b> {payment.updated_At}
				</Card.Text>
			</Card.Body>
			<Button variant="warning" style={{ width: "80%", margin: "5px" }} onClick={handleUpdate}>
				Update
			</Button>
			<Button variant="info" style={{ width: "80%", margin: "5px" }} onClick={handleView}>
				View
			</Button>
			<Button variant="danger" style={{ width: "80%", margin: "5px" }} onClick={handleDelete}>
				Delete
			</Button>
		</Card>
	);
}

export default PaymentAdmin;
