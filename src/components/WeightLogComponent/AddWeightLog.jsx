import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { Form, Button, FloatingLabel, Card, Row, Col } from "react-bootstrap";
import WeightLogService from "../../services/WeightLogService";

const AddWeightLog = () => {
    const navigate = useNavigate();

    const [weight, setWeight] = useState("");
    const [created_At, setCreated_At] = useState("");
    const [updated_At, setUpdated_At] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        const newWeightLog = {
            weight: weight,
            created_At: created_At,
            updated_At: updated_At
        };
        console.log(newWeightLog);

        WeightLogService.addWeightLog(newWeightLog)
            .then((res) => {
                console.log(res);
                console.log("Weight Log Details Added Successfully");
                navigate("/getWeightLogs");
            })
            .catch((err) => {
                console.log(err.response.data);

                if (err.response.status === 409) {
                    alert("Something went wrong");
                }
            });
    };
    const handleCancel = (e) => {
        e.preventDefault();
        navigate("/home");
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", minHeight: "85vh", backgroundImage: "url(https://images.photocase.com/g/gjkfcq2x/ewjmqied/photocaseewjmqied2.jpg)", opacity: "0.95" }}>
            <Card style={{ width: "60%", padding: "20px", margin: "10px", opacity:"0.95" }}>
                <Form onSubmit={(e) => handleSubmit(e)}>
                    <FloatingLabel controlId="weight" label="Weight" className="mb-3">
                        <Form.Control
                            type="text"
                            placeholder="Enter Weight"
                            required
                            value={weight}
                            onChange={(e) => setWeight(e.target.value)}
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
export default AddWeightLog;
