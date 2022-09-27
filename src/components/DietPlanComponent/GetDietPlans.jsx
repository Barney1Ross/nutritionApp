/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import DietPlanService from "../../services/DietPlanService";
import DietPlanAdmin from "./DietPlanAdmin";
const GetDietPlans = () => {
	const [dietPlans, setDietPlans] = useState([]);

	useEffect(() => {
		DietPlanService.getDietPlans().then((res) => {
			setDietPlans(res.data);
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
					backgroundImage: "url(https://images.photocase.com/k/ksne8lyi/msd6e2xd/photocasemsd6e2xd2.jpg)",
					opacity: "0.95"
				}}
			>
				{/* <Button
					style={{ margin: "5px", width: "60%", opacity:"0.93" }}
					variant="light"
					href="/addDietPlan"
				>
					Add Diet Plan
				</Button> */}
				<Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
					{dietPlans.map((dietPlan) => (
						<DietPlanAdmin key={dietPlan.dietPlanId} dietPlan={dietPlan} setDietPlans={setDietPlans} />
					))}
				</Container>
			</Container>
		</>
	);
};
export default GetDietPlans;
