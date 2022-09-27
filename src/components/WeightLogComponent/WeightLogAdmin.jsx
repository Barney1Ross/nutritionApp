import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import WeightLogService from "../../services/WeightLogService";


function WeightLogAdmin({ weightLog, setWeightLog }) {
	const navigate = useNavigate();

	const handleDelete = () => {
		WeightLogService.deleteWeightLogById(weightLog.weightId)
			.then((res) => {
				let updatedWeightLog = res.data;
				alert("Weight Log Deleted Successfully");
				setWeightLog(updatedWeightLog);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleUpdate = () => {
		navigate(`/updateWeightLog/${weightLog.weightId}`);
	};
	const handleView = () => {
		navigate(`/getWeightLogById/${weightLog.weightId}`);
	};

	return (
		<Card
			style={{
				width: "400px",
				margin: "10px",
				alignItems: "center",
				boxShadow: "0px 0px 10px 1px ",
				padding: "10px",
                opacity: "0.95"
			}}
		>
			{/* <Card.Img height={200} variant="top"   /> */}
			<Card.Body>
				<Card.Title>{weightLog.weightLog}</Card.Title>
				<Card.Text>
					<b>Weight : </b> {weightLog.weight}
				</Card.Text>
				<Card.Text>
					<b>Created_At : </b> {weightLog.created_At}
				</Card.Text>
				<Card.Text>
					<b>Updated_At: </b> {weightLog.updated_At}
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

export default WeightLogAdmin;
