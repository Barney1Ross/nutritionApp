import { React, useState } from "react";
import { useNavigate } from "react-router-dom";
import { setUserInfo } from "./UserInfo";
import UserService from "../../services/UserService";

const initialData = { loginName: "", userPassword: "" };

const Login = ({ setIsLoggedIn }) => {
	const navigate = useNavigate();

	const [formData, setFormData] = useState(initialData);

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	// Handle login
	const handleLogin = async (e) => {
		e.preventDefault();

		// Send login request to server
		UserService.login(formData)
			.then((res) => {
				setUserInfo({ ...res.data, userId: res.data.userId });

				if (res.data.role === "user") {
					setIsLoggedIn(true);
					alert(" User Login Successfully");
					navigate("/home");
				}
				if (res.data.role === "admin") {
					setIsLoggedIn(true);
					alert("Admin Login Successfully");
					navigate("/home");
				}
			})
			.catch((error) => {
				alert("Invalid Username or Password");
			});
	};

	return (
		<div
			style={{
				backgroundColor: "#8EC5FC",
				backgroundImage: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
			}}
		>
			<div
				className="container"
				style={{
					minHeight: "85vh",
				}}
			>
				<div className="row">
					<div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
						<div className="card border-0 shadow rounded-3 my-5">
							<div className="card-body p-4 p-sm-5">
								<h5 className="card-title text-center mb-5 fw-light fs-5">Login</h5>
								<form>
									<div className="form-floating mb-3">
										<input
											type="text"
											value={formData.loginName}
											className="form-control"
											id="loginName"
											placeholder="jhonDoe69"
											name="loginName"
											onChange={handleChange}
											required={true}
										/>
										<label htmlFor="floatingInput">User/Login Name</label>
									</div>
									<div className="form-floating mb-3">
										<input
											type="password"
											value={formData.userPassword}
											className="form-control"
											id="userPassword"
											name="userPassword"
											placeholder="userPassword"
											onChange={handleChange}
											required={true}
										/>
										<label htmlFor="floatingPassword">Password</label>
									</div>
									<div className="d-grid">
										<button
											className="btn btn-primary btn-login text-uppercase fw-bold"
											type="submit"
											onClick={handleLogin}
										>
											Login
										</button>
									</div>
									<hr className="my-4" />
								</form>
							</div>
						</div>
						<div className="">
							<p className="text-center">
								Don't have an account? <a href="/addUser">Register</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Login;
