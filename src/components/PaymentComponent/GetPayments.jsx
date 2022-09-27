/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import PaymentService from "../../services/PaymentService";
import PaymentAdmin from "./PaymentAdmin";

const GetPayments = () => {
	const [payments, setPayments] = useState([]);

	useEffect(() => {
		PaymentService.getPayments().then((res) => {
			setPayments(res.data);
		});
	}, []);

	return (
		<>
			<Container
				style={{
					display: "flex",
					flexDirection: "column",
					padding: "10px",
					alignItems: "center",
					minHeight: "85vh",
					backgroundImage:"url(https://images.photocase.com/a/an22sooc/hqffmaxy/photocasehqffmaxy2.jpg)",
					opacity: "0.85"
				}}
			>
				{/* <Button
					style={{ margin: "5px", width: "60%", opacity:"0.95" }}
					variant="light"
					href="/addPayment"
				>
					Add Payemtnt Details
				</Button> */}
				<Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
					{payments.map((payment) => (
						<PaymentAdmin key={payment.paymentId} payment={payment} setPayments={setPayments} />
					))}
				</Container>
			</Container>
		</>
	);
};
export default GetPayments;
