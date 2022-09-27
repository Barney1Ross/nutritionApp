/* eslint-disable */
import React, { useState, useEffect } from "react";
import { Button, Container } from "react-bootstrap";
import WeightLogService from "../../services/WeightLogService";
import WeightLogAdmin from "./WeightLogAdmin";

const GetWeightLogs = () => {
	const [weightLogs, setWeightLogs] = useState([]);

	useEffect(() => {
		WeightLogService.getWeightLogs().then((res) => {
			setWeightLogs(res.data);
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
					backgroundImage: "url(https://images.photocase.com/6/6cvgh43s/6kynh7nq/photocase6kynh7nq2.jpg)",
					opacity:"0.95"
				}}
			>
				{/* <Button
					style={{ margin: "5px", width: "60%", opacity:"0.95" }}
					variant="light"
					href="/addWeightLog"
				>
					Add Weight Log
				</Button> */}
				<Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-evenly" }}>
					{weightLogs.map((weightLog) => (
						<WeightLogAdmin key={weightLog.weightId} weightLog={weightLog} setWeightLogs={setWeightLogs} />
					))}
				</Container>
			</Container>
		</>
	);
};
export default GetWeightLogs;
