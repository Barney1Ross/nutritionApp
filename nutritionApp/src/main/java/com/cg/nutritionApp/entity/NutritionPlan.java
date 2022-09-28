package com.cg.nutritionApp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table
public class NutritionPlan {

	@Id
	@Column
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int nutriPlanId;
	@Column
	@NotBlank(message = "nutriPlanName cannot be blank")
	private String nutriPlanName;
	@Column
	private String planDescription;
	@Column
	private Float nutriPlanPrice;
	@Column
	private Float created_At;
	@Column
	private Float updated_At;

	public int getNutriPlanId() {
		return nutriPlanId;
	}

	public void setNutriPlanId(int nutriPlanId) {
		this.nutriPlanId = nutriPlanId;
	}

	public String getNutriPlanName() {
		return nutriPlanName;
	}

	public void setNutriPlanName(String nutriPlanName) {
		this.nutriPlanName = nutriPlanName;
	}

	public Float getNutriPlanPrice() {
		return nutriPlanPrice;
	}

	public void setNutriPlanPrice(Float nutriPlanPrice) {
		this.nutriPlanPrice = nutriPlanPrice;
	}

	public Float getCreated_At() {
		return created_At;
	}

	public void setCreated_At(Float created_At) {
		this.created_At = created_At;
	}

	public Float getUpdated_At() {
		return updated_At;
	}

	public void setUpdated_At(Float updated_At) {
		this.updated_At = updated_At;
	}

	public String getPlanDescription() {
		return planDescription;
	}

	public void setPlanDescription(String planDescription) {
		this.planDescription = planDescription;
	}

	public NutritionPlan() {

	}

	public NutritionPlan(String nutriPlanName, String planDescription, Float nutriPlanPrice, Float created_At,
			Float updated_At) {
		super();
		this.nutriPlanName = nutriPlanName;
		this.planDescription = planDescription;
		this.nutriPlanPrice = nutriPlanPrice;
		this.created_At = created_At;
		this.updated_At = updated_At;
	}

}
