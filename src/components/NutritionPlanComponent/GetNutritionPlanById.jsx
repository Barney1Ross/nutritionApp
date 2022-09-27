import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {Row, Col, Card, Button, Form } from "react-bootstrap";
import NutritionPlanService from "../../services/NutritionPlanService";

export default function GetNutritionPlanById(){
    const navigate = useNavigate();
    const {nutriPlanId } = useParams();

    const [nutriPlanName, setNutriPlanName] = useState("");
    const [planDescription, setPlanDescription] = useState("");
    const [nutriPlanPrice, setNutriPlanPrice] = useState("");
    const [created_At, setCreated_At] = useState("");
    const [updated_At, setUpdated_At] = useState("");

    useEffect(() => {
		NutritionPlanService.getNutritionPlanById(nutriPlanId).then((resp) => {
			let nutritionPlan = resp.data;
			setNutriPlanName(nutritionPlan.nutriPlanName);
			setPlanDescription(nutritionPlan.planDescription);
			setNutriPlanPrice(nutritionPlan.nutriPlanPrice);
			setCreated_At(nutritionPlan.created_At);
			setUpdated_At(nutritionPlan.updated_At);
		});
	}, [nutriPlanId]);

    const handleBack = (e) => {
        e.preventDefault();
        navigate("/getNutritionPlans");
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
								<h2>Nutrition Plan Details</h2>
							</Card.Title>
							<hr />
							<Card.Text>Name: {nutriPlanName}</Card.Text>
							<Card.Text>Description: {planDescription}</Card.Text>
							<Card.Text>Price: {nutriPlanPrice}</Card.Text>
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