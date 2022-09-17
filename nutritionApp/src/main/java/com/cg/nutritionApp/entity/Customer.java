package com.cg.nutritionApp.entity;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToOne;
import javax.persistence.Table;

@Entity
@Table
public class Customer {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private int custId;
	
	@Column
	private String custIdentification;
	@Column
	private String custName;
	@Column
	private String contact;
	@Column
	private String custGender;
	@Column
	private String dob;
	@Column
	private String photo;
	@Column
	private String custEmail;
	@Column
	private String role;
	@Column
	private String status;
	@Column
	private Float custWeight;
	@Column
	private Float custHeight;
	@Column
	private String diateryOrientation;
	@Column
	private Double intensity;
	@Column
	private String goal;
	@Column
	private String workOutTime;
	@Column
	private String wakeUpTime;
	@Column
	private String sleepTime;
	@Column
	private String medicalConditon;
	@Column
	private String allergicTo;
	@Column
	private String loginName;
	@Column
	private String custPassword;
	
	@OneToOne(cascade = CascadeType.ALL)
	private DietPlan dietPlan;

	public DietPlan getDietPlan() {
		return dietPlan;
	}
	
	@OneToOne(cascade = CascadeType.ALL)
	private NutritionPlan nutriPlan;

	public NutritionPlan getNutriPlan() {
		return nutriPlan;
	}

	public void setNutriPlan(NutritionPlan nutriPlan) {
		this.nutriPlan = nutriPlan;
	}

	public void setDietPlan(DietPlan dietPlan) {
		this.dietPlan = dietPlan;
	}

	public String getCustIdentification() {
		return custIdentification;
	}

	public void setCustIdentification(String custIdentification) {
		this.custIdentification = custIdentification;
	}

	public String getContact() {
		return contact;
	}

	public void setContact(String contact) {
		this.contact = contact;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getPhoto() {
		return photo;
	}

	public void setPhoto(String photo) {
		this.photo = photo;
	}

	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getDiateryOrientation() {
		return diateryOrientation;
	}

	public void setDiateryOrientation(String diateryOrientation) {
		this.diateryOrientation = diateryOrientation;
	}

	public Double getIntensity() {
		return intensity;
	}

	public void setIntensity(Double intensity) {
		this.intensity = intensity;
	}

	public String getGoal() {
		return goal;
	}

	public void setGoal(String goal) {
		this.goal = goal;
	}

	public String getWorkOutTime() {
		return workOutTime;
	}

	public void setWorkOutTime(String workOutTime) {
		this.workOutTime = workOutTime;
	}

	public String getWakeUpTime() {
		return wakeUpTime;
	}

	public void setWakeUpTime(String wakeUpTime) {
		this.wakeUpTime = wakeUpTime;
	}

	public String getSleepTime() {
		return sleepTime;
	}

	public void setSleepTime(String sleepTime) {
		this.sleepTime = sleepTime;
	}

	public String getMedicalConditon() {
		return medicalConditon;
	}

	public void setMedicalConditon(String medicalConditon) {
		this.medicalConditon = medicalConditon;
	}

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

	public int getCustId() {
		return custId;
	}

	public void setCustId(int custId) {
		this.custId = custId;
	}

	public String getCustName() {
		return custName;
	}

	public void setCustName(String custName) {
		this.custName = custName;
	}

	public String getCustEmail() {
		return custEmail;
	}

	public void setCustEmail(String custEmail) {
		this.custEmail = custEmail;
	}

	public String getCustGender() {
		return custGender;
	}

	public void setCustGender(String custGender) {
		this.custGender = custGender;
	}

	public String getCustPassword() {
		return custPassword;
	}

	public void setCustPassword(String custPassword) {
		this.custPassword = custPassword;
	}

	public Float getCustWeight() {
		return custWeight;
	}

	public void setCustWeight(Float custWeight) {
		this.custWeight = custWeight;
	}

	public Float getCustHeight() {
		return custHeight;
	}

	public void setCustHeight(Float custHeight) {
		this.custHeight = custHeight;
	}



	
	
}
