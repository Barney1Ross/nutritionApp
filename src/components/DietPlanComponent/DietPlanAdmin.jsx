import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import DietPlanService from "../../services/DietPlanService";


function DietPlanAdmin({ dietPlan, setDietPlan }) {
	const navigate = useNavigate();

	const handleDelete = () => {
		DietPlanService.deleteDietPlanById(dietPlan.dietPlanId)
			.then((res) => {
				let updatedDietPlans = res.data;
				alert("Diet Plan Deleted Successfully");
				setDietPlan(updatedDietPlans);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleUpdate = () => {
		navigate(`/updateDietPlan/${dietPlan.dietPlanId}`);
	};

	const handleView = () => {
		navigate(`/getDietPlanById/${dietPlan.dietPlanId}`);
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
				<Card.Title>{dietPlan.foodType}</Card.Title>
				<Card.Text>
					<b>Food Type: </b> {dietPlan.foodType}
				</Card.Text>
				<Card.Text>
					<b>Slots :</b> {dietPlan.slots}
				</Card.Text>
				<Card.Text>
					<b>Protein Ratio : </b> {dietPlan.proteinRatio}
				</Card.Text>
				<Card.Text>
					<b>Carbs Ratio : </b>
					{dietPlan.carbsRatio}
				</Card.Text>
				<Card.Text>
					<b>Fat Ratio: </b> {dietPlan.fatRatio}
				</Card.Text>
			</Card.Body>
			<Button variant="warning" style={{ width: "80%", margin: "5px" }} onClick={handleUpdate}>
				Update
			</Button>
			<Button variant="Info" style={{ width: "80%", margin: "5px" }} onClick={handleView}>
				View
			</Button>
			<Button variant="danger" style={{ width: "80%", margin: "5px" }} onClick={handleDelete}>
				Delete
			</Button>
		</Card>
	);
}

export default DietPlanAdmin;
