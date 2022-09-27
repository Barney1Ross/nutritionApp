import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import NutritionPlanService from "../../services/NutritionPlanService";
import NutritionPlanAdmin from "./NutritionPlanAdmin";

const GetNutritionPlans = () => {
	const [nutritionPlans, setNutritionPlans] = useState([]);

	useEffect(() => {
		NutritionPlanService.getNutritionPlans().then((res) => {
			setNutritionPlans(res.data);
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
					backgroundImage:"url(https://images.photocase.com/o/ocjuafav/ff3xwvnq/photocaseff3xwvnq2.jpg)",
					opacity: "0.95"
				}}
			>
				{/* <Button
					style={{ margin: "5px", width: "60%" }}
					variant="light"
					href="/addNutritionPlan"
				>
					Add Nutrition Plan
				</Button> */}
				<Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
					{nutritionPlans.map((nutritionPlan) => (
						<NutritionPlanAdmin key={nutritionPlan.nutriPlanId} nutritionPlan={nutritionPlan} setNutritionPlans={setNutritionPlans} />
					))}
				</Container>
			</Container>
		</>
	);
};
export default GetNutritionPlans;
