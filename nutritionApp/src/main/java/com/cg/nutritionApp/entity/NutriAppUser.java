package com.cg.nutritionApp.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

@Entity
@Table
public class NutriAppUser {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private int userId;

//	@Column
//	private String userIdentification;
	@Column
	@NotBlank(message = "fullName cannot be blank.")
	private String fullName;
	@Column
	private String contact;
	@Column
	private String userGender;
//	@Column
//	@NotEmpty(message = "dob cannot be blank if unknown state NA.")
//	private String dob;
//	@Column
//	private String photo;
	@Column
	@Email(message = "userEmail cannot be blank.")
	private String userEmail;
	@Column
	@NotEmpty(message = "role cannot be empty.")
	private String role;
//	@Column
//	private String status;
//	@Column
//	private Float userWeight;
//	@Column
//	private Float userHeight;
//	@Column
//	private String diateryOrientation;
//	@Column
//	private Double intensity;
//	@Column
//	private String goal;
//	@Column
//	private String workOutTime;
//	@Column
//	private String wakeUpTime;
//	@Column
//	private String sleepTime;
//	@Column
//	private String medicalConditon;
	@Column
	@NotEmpty(message = "allergicTo cannot be blank if unknown state NA")
	private String allergicTo;
	@Column
	@NotBlank(message = "loginName cannot be empty")
	private String loginName;
	@Column
	@NotBlank(message = "password cannot be empty")
	private String userPassword;

//	@OneToOne(cascade = CascadeType.ALL)
//	private DietPlan dietPlan;
//
//	public DietPlan getDietPlan() {
//		return dietPlan;
//	}
//
//	@OneToOne(cascade = CascadeType.ALL)
//	private NutritionPlan nutriPlan;
//
//	public NutritionPlan getNutriPlan() {
//		return nutriPlan;
//	}

//	public void setNutriPlan(NutritionPlan nutriPlan) {
//		this.nutriPlan = nutriPlan;
//	}
//
//	public void setDietPlan(DietPlan dietPlan) {
//		this.dietPlan = dietPlan;
//	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

//	public String getDob() {
//		return dob;
//	}
//
//	public void setDob(String dob) {
//		this.dob = dob;
//	}
//
//	public String getPhoto() {
//		return photo;
//	}
//
//	public void setPhoto(String photo) {
//		this.photo = photo;
//	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

//	public String getStatus() {
//		return status;
//	}
//
//	public void setStatus(String status) {
//		this.status = status;
//	}
//
//	public String getDiateryOrientation() {
//		return diateryOrientation;
//	}
//
//	public void setDiateryOrientation(String diateryOrientation) {
//		this.diateryOrientation = diateryOrientation;
//	}
//
//	public Double getIntensity() {
//		return intensity;
//	}
//
//	public void setIntensity(Double intensity) {
//		this.intensity = intensity;
//	}
//
//	public String getGoal() {
//		return goal;
//	}
//
//	public void setGoal(String goal) {
//		this.goal = goal;
//	}
//
//	public String getWorkOutTime() {
//		return workOutTime;
//	}
//
//	public void setWorkOutTime(String workOutTime) {
//		this.workOutTime = workOutTime;
//	}
//
//	public String getWakeUpTime() {
//		return wakeUpTime;
//	}
//
//	public void setWakeUpTime(String wakeUpTime) {
//		this.wakeUpTime = wakeUpTime;
//	}
//
//	public String getSleepTime() {
//		return sleepTime;
//	}
//
//	public void setSleepTime(String sleepTime) {
//		this.sleepTime = sleepTime;
//	}
//
//	public String getMedicalConditon() {
//		return medicalConditon;
//	}
//
//	public void setMedicalConditon(String medicalConditon) {
//		this.medicalConditon = medicalConditon;
//	}

	public String getAllergicTo() {
		return allergicTo;
	}

	public void setAllergicTo(String allergicTo) {
		this.allergicTo = allergicTo;
	}

	public String getLoginName() {
		return loginName;
	}

	public void setLoginName(String loginName) {
		this.loginName = loginName;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

//	public String getUserIdentification() {
//		return userIdentification;
//	}
//
//	public void setUserIdentification(String userIdentification) {
//		this.userIdentification = userIdentification;
//	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getUserGender() {
		return userGender;
	}

	public void setUserGender(String userGender) {
		this.userGender = userGender;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

//	public Float getUserWeight() {
//		return userWeight;
//	}
//
//	public void setUserWeight(Float userWeight) {
//		this.userWeight = userWeight;
//	}
//
//	public Float getUserHeight() {
//		return userHeight;
//	}
//
//	public void setUserHeight(Float userHeight) {
//		this.userHeight = userHeight;
//	}

	public String getUserPassword() {
		return userPassword;
	}

	public void setUserPassword(String userPassword) {
		this.userPassword = userPassword;
	}

	public NutriAppUser() {

	}

	public NutriAppUser(String userIdentification, String fullName, String contact, String userGender, String dob,
			String photo, String userEmail, String role, String status, Float userWeight, Float userHeight,
			String diateryOrientation, Double intensity, String goal, String workOutTime, String wakeUpTime,
			String sleepTime, String medicalConditon, String allergicTo, String loginName, String userPassword,
			DietPlan dietPlan, NutritionPlan nutriPlan) {
		super();
		//this.userIdentification = userIdentification;
		this.fullName = fullName;
		this.contact = contact;
		this.userGender = userGender;
		//this.dob = dob;
		//.photo = photo;
		this.userEmail = userEmail;
		this.role = role;
		//this.status = status;
		//this.userWeight = userWeight;
		//this.userHeight = userHeight;
		//this.diateryOrientation = diateryOrientation;
		//this.intensity = intensity;
		//this.goal = goal;
		//this.workOutTime = workOutTime;
		//this.wakeUpTime = wakeUpTime;
		//this.sleepTime = sleepTime;
		//this.medicalConditon = medicalConditon;
		this.allergicTo = allergicTo;
		this.loginName = loginName;
		this.userPassword = userPassword;
		//this.dietPlan = dietPlan;
		//this.nutriPlan = nutriPlan;
	}

}
