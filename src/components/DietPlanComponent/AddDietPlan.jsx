import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Form, Button, FloatingLabel, Card, Row, Col } from "react-bootstrap";
import DietPlanService from "../../services/DietPlanService";

const AddDietPlan = () => {
    const navigate = useNavigate();

    const [foodType, setFoodType] = useState("");
    const [slots, setSlots] = useState("");
    const [proteinRatio, setProteinRatio] = useState("");
    const [carbsRatio, setCarbsRatio] = useState("");
    const [fatRatio, setFatRatio] = useState("");
    const [total, setTotal] = useState("");
   

    const handleSubmit = (e) => {
        e.preventDefault();
        const newDietPlan = {
            foodType: foodType,
            slots: slots,
            proteinRatio: proteinRatio,
            carbsRatio: carbsRatio,
            fatRatio: fatRatio,
            total : total
        };
        console.log(newDietPlan);

        DietPlanService.addDietPlan(newDietPlan)
            .then((res) => {
                console.log(res);
                console.log("Diet Plan Added Successfully");
                navigate("/home");
            })
            .catch((err) => {
                console.log(err.response.data);
                // setCustomerNameError(err.response.data.customerName);

                if (err.response.status === 409) {
                    alert("Diet Plan Name exists already");
                }
            });
    };
    const handleCancel = (e) => {
        e.preventDefault();
        navigate("/home");
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", minHeight: "85vh", backgroundImage: "url(https://images.photocase.com/k/ksne8lyi/msd6e2xd/photocasemsd6e2xd2.jpg)", opacity: "0.95"}}>
            <Card style={{ width: "60%", padding: "20px", margin: "10px" , opacity: "0.95"}}>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <FloatingLabel controlId="foodType" label="Food Type" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Enter Food Type"
                            required
                            value={foodType}
                            onChange={(e) => setFoodType(e.target.value)}
                        />
                    </FloatingLabel>
                    <Card.Text style={{ color: "red", fontSize: "14px" }}>{ }</Card.Text>
                    <FloatingLabel controlId="slots" label="Slots" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Enter Slots"
                            required
                            value={slots}
                            onChange={(e) => setSlots(e.target.value)}
                        />
                    </FloatingLabel>
                    <Card.Text style={{ color: "red", fontSize: "14px" }}>{ }</Card.Text>

                    <FloatingLabel controlId="proteinRatio" label="Protein Ratio" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Enter Protein Ratio"
                            required
                            value={proteinRatio}
                            onChange={(e) => setProteinRatio(e.target.value)}
                        />
                    </FloatingLabel>
                    <Card.Text style={{ color: "red", fontSize: "14px" }}>{ }</Card.Text>

                    <FloatingLabel controlId="carbsRatio" label="Carbs Ratio" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Enter Carbs Ratio"
                            required
                            value={carbsRatio}
                            onChange={(e) => setCarbsRatio(e.target.value)}
                        />
                    </FloatingLabel>
                    <Card.Text style={{ color: "red", fontSize: "14px" }}>{ }</Card.Text>

                    <FloatingLabel controlId="fatRatio" label="Fat Ratio" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Enter Fat Ratio"
                            required
                            value={fatRatio}
                            onChange={(e) => setFatRatio(e.target.value)}
                        />
                    </FloatingLabel>
                    <Card.Text style={{ color: "red", fontSize: "14px" }}>{}</Card.Text>
                    
                    <FloatingLabel controlId="total" label="Total" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Total"
                            required
                            value={total}
                            onChange={(e) => setTotal(e.target.value)}
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
export default AddDietPlan;
