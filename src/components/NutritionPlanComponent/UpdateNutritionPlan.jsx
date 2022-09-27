import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Form, Button, FloatingLabel, Card, Row, Col } from "react-bootstrap";
import NutritionPlanService from "../../services/NutritionPlanService";


const UpdateNutritionPlan = () => {
	const navigate = useNavigate();
    const { nutriPlanId } = useParams();

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

	const handleSubmit = (e) => {
        e.preventDefault();
        const newNutritionPlan = {
            nutriPlanName: nutriPlanName,
            planDescription: planDescription,
            nutriPlanPrice: nutriPlanPrice,
            created_At: created_At,
            updated_At: updated_At
        };
        console.log(newNutritionPlan);

		NutritionPlanService.updateNutritionPlan(nutriPlanId,newNutritionPlan)
			.then((res) => {
				console.log(res);
				console.log("Nutrition Plan Updated successfully");
				//navigate(`/getNutritionPlans/${nutriPlanId}`);
			})
			.catch((err) => {
                console.log(err.response.data);
                // setCustomerNameError(err.response.data.customerName);

                if (err.response.status === 409) {
                    alert("Nutrition Plan Name exists already");
                }
            });
	};
	const handleCancel = (e) => {
        e.preventDefault();
        navigate("/home");
    };

	return (
		<div style={{ display: "flex", justifyContent: "center", minHeight: "85vh" }}>
			<Card style={{ width: "60%", padding: "20px", margin: "10px" }}>
				<Form onSubmit={(e) => handleSubmit(e)}>
					 <FloatingLabel controlId="nutriPlanId" label="Nutrition Plan Id" className="mb-3">
						<Form.Control type="text" placeholder="Nutrition Plan ID" disabled value={nutriPlanId} />
					</FloatingLabel> 

					<FloatingLabel controlId="nutriPlanName" label="Plan Name" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Nutrition Plan Name"
                            required
                            value={nutriPlanName}
                            onChange={(e) => setNutriPlanName(e.target.value)}
                        />
                    </FloatingLabel>
                    <Card.Text style={{ color: "red", fontSize: "14px" }}>{ }</Card.Text>

                    <FloatingLabel controlId="planDescription" label="Plan Description" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Plan Description"
                            required
                            value={planDescription}
                            onChange={(e) => setPlanDescription(e.target.value)}
                        />
                    </FloatingLabel>
                    <Card.Text style={{ color: "red", fontSize: "14px" }}>{ }</Card.Text>

                    <FloatingLabel controlId="nutriPlanPrice" label="Plan Price" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Plan Price"
                            required
                            value={nutriPlanPrice}
                            onChange={(e) => setNutriPlanPrice(e.target.value)}
                        />
                    </FloatingLabel>
                    <Card.Text style={{ color: "red", fontSize: "14px" }}>{ }</Card.Text>
 
                    <FloatingLabel controlId="created_At" label="Created At" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Created At"
                            required
                            value={created_At}
                            onChange={(e) => setCreated_At(e.target.value)}
                        />
                    </FloatingLabel>
                    <Card.Text style={{ color: "red", fontSize: "14px" }}>{ }</Card.Text>

                    <FloatingLabel controlId="updated_At" label="updated_At" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Updated At"
                            required
                            value={updated_At}
                            onChange={(e) => setUpdated_At(e.target.value)}
                        />
                    </FloatingLabel>
                    <Card.Text style={{ color: "red", fontSize: "14px" }}>{}</Card.Text>
                    
                    <Row>
                        <Col>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Col>
                        <Col>
                            <Button variant="danger" onClick={handleCancel}>
                                Cancel
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </Card>
        </div>
	);
};
export default UpdateNutritionPlan;
