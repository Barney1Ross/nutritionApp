import React from "react";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NutritionPlanService from "../../services/NutritionPlanService";


function NutritionPlanAdmin({ nutritionPlan, setNutritionPlan }) {
	const navigate = useNavigate();

	const handleDelete = () => {
		NutritionPlanService.deleteNutritionPlanById(nutritionPlan.nutriPlanId)
			.then((res) => {
				let updatedNutriPlans = res.data;
				alert("Nutrition Plan Deleted Successfully");
				setNutritionPlan(updatedNutriPlans);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleUpdate = () => {
		navigate(`/updateNutritionPlan/${nutritionPlan.nutriPlanId}`);
	};
	const handleView = () => {
		navigate(`/getNutritionPlanById/${nutritionPlan.nutriPlanId}`);
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
				<Card.Title>Id :{nutritionPlan.nutriPlanId} {nutritionPlan.nutriPlanName} </Card.Title>
				<Card.Text>
					<b>Nutrition Plan Name : </b> {nutritionPlan.nutriPlanName}
				</Card.Text>
				<Card.Text>
					<b>Plan Description :</b> {nutritionPlan.planDescription}
				</Card.Text>
				<Card.Text>
					<b>Plan Price : </b> {nutritionPlan.nutriPlanPrice}
				</Card.Text>
				<Card.Text>
					<b>Created_At : </b> {nutritionPlan.created_At}
				</Card.Text>
				<Card.Text>
					<b>Updated_At: </b> {nutritionPlan.updated_At}
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

export default NutritionPlanAdmin;
