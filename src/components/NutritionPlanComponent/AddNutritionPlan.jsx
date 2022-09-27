import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Form, Button, FloatingLabel, Card, Row, Col } from "react-bootstrap";
import NutritionPlanService from "../../services/NutritionPlanService";

const AddNutritionPlan = () => {
    const navigate = useNavigate();

    const [nutriPlanName, setNutriPlanName] = useState("");
    const [planDescription, setPlanDescription] = useState("");
    const [nutriPlanPrice, setNutriPlanPrice] = useState("");
    const [created_At, setCreated_At] = useState("");
    const [updated_At, setUpdated_At] = useState("");


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

        NutritionPlanService.addNutritionPlan(newNutritionPlan)
            .then((res) => {
                console.log(res);
                console.log("Nutrition Plan Added Successfully");
                navigate("/getNutritionPlans");
            })
            .catch((err) => {
                console.log(err.response.data);

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
        <div style={{ display: "flex", justifyContent: "center", minHeight: "85vh", backgroundImage:"url(https://images.photocase.com/0/0u5c3dyr/4a3wv3ah/photocase4a3wv3ah2.jpg)", opacity: "0.95" }}>
            <Card style={{ width: "60%", padding: "20px", margin: "10px", opacity: "0.95" }}>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <FloatingLabel controlId="nutriPlanName" label="Nutrition Plan Name" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Enter Nutrition Plan Name"
                            required
                            value={nutriPlanName}
                            onChange={(e) => setNutriPlanName(e.target.value)}
                        />
                    </FloatingLabel>
                    <Card.Text style={{ color: "red", fontSize: "14px" }}>{ }</Card.Text>
                    <FloatingLabel controlId="planDescription" label="Plan Description" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Enter Plan Description"
                            required
                            value={planDescription}
                            onChange={(e) => setPlanDescription(e.target.value)}
                        />
                    </FloatingLabel>
                    <Card.Text style={{ color: "red", fontSize: "14px" }}>{ }</Card.Text>

                    <FloatingLabel controlId="nutriPlanPrice" label="Nutrition Plan Price" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Enter Nutrition Plan Price"
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

                    <FloatingLabel controlId="updated_At" label="Updated At" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Updated At"
                            required
                            value={updated_At}
                            onChange={(e) => setUpdated_At(e.target.value)}
                        />
                    </FloatingLabel>
                    <Card.Text style={{ color: "red", fontSize: "14px" }}>{ }</Card.Text>

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
export default AddNutritionPlan;
