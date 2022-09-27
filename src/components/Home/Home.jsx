import React from "react";
//import {getUserInfo} from '../UserComponent/UserInfo';
const Home = () => {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				minHeight: "85vh",
				backgroundImage: "url(https://thumbs.dreamstime.com/z/mobile-phone-searching-online-app-recipe-nutrition-diet-grocery-shopping-192988787.jpg)",
				backgroundSize: "cover",
				opacity: "0.95"
			}}
		>

			{/* <h1 style={{ color: "black", marginTop: "20vh", fontSize: "50px", fontWeight: "bold" }}>
				Welcome, {getUserInfo().loginName}!
			</h1> */}

		</div>
	);
};

export default Home;
