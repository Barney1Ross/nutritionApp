import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {Row, Col, Card, Button, Form } from "react-bootstrap";
import PaymentService from "../../services/PaymentService";

export default function GetPaymentById(){
    const navigate = useNavigate();
    const {paymentId } = useParams();

    const [payment, setPayment] = useState("");
    const [created_At, setCreated_At] = useState("");
    const [updated_At, setUpdated_At] = useState("");

    useEffect(() => {
		PaymentService.getPaymentById(paymentId).then((resp) => {
			let paymentStat = resp.data;
			setPayment(paymentStat.payment);
			setCreated_At(paymentStat.created_At);
			setUpdated_At(paymentStat.updated_At);
		});
	}, [paymentId]);

    const handleBack = (e) => {
        e.preventDefault();
        navigate("/getPayments");
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
					<Form >
						<Card.Body>
							<Card.Title>
								<h2>Payment Details</h2>
							</Card.Title>
							<hr />
							<Card.Text>Payment Status: {payment}</Card.Text>
							<Card.Text>Created At: {created_At}</Card.Text>
							<Card.Text>Updated At: {updated_At}</Card.Text> 
							<Row>
								<Col>
									<Button variant="contained" onClick={handleBack}>
										Back
									</Button>
								</Col>
							</Row>
						</Card.Body>
					</Form>
				</Card>
			</div>
		</div>
	);
};