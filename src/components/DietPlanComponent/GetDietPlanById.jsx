import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {Row, Col, Card, Button, Form } from "react-bootstrap";
import DietPlanService from "../../services/DietPlanService";

export default function GetDietPlanById(){
    const navigate = useNavigate();
    const {dietPlanId } = useParams();

    const [foodType, setFoodType] = useState("");
    const [slots, setSlots] = useState("");
    const [proteinRatio, setProteinRatio] = useState("");
    const [carbsRatio, setCarbsRatio] = useState("");
    const [fatRatio, setFatRatio] = useState("");
    const [total, setTotal] = useState("");
   


	useEffect(() => {
		DietPlanService.getDietPlanById(dietPlanId).then((resp) => {
			let dietPlan = resp.data;
			setFoodType(dietPlan.foodType);
			setSlots(dietPlan.slots);
			setProteinRatio(dietPlan.proteinRatio);
			setCarbsRatio(dietPlan.carbsRatio);
			setFatRatio(dietPlan.fatRatio);
            setTotal(dietPlan.total);
		});
	}, [dietPlanId]);

    const handleBack = (e) => {
        e.preventDefault();
        navigate("/getDietPlans");
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
								<h2>Diet Plan Details</h2>
							</Card.Title>
							<hr />
							<Card.Text>Food Type: {foodType}</Card.Text>
							<Card.Text>Slots: {slots}</Card.Text>
							<Card.Text>Protein Ratio: {proteinRatio}</Card.Text>
							<Card.Text>Carbs Ratio: {carbsRatio}</Card.Text>
							<Card.Text>Fat Ratio: {fatRatio}</Card.Text>
                            <Card.Text>Total: {total}</Card.Text> 
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