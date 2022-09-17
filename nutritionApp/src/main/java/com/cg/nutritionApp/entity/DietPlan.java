package com.cg.nutritionApp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class DietPlan {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private int dietPlanId;
	@Column
	private String foodType;
	@Column
	private String slots;
	@Column
	private Float proteinRatio;
	
	public Float getProteinRatio() {
		return proteinRatio;
	}

	public void setProteinRatio(Float proteinRatio) {
		this.proteinRatio = proteinRatio;
	}

	public Float getCarbsRatio() {
		return carbsRatio;
	}

	public void setCarbsRatio(Float carbsRatio) {
		this.carbsRatio = carbsRatio;
	}

	public Float getFatRatio() {
		return fatRatio;
	}

	public void setFatRatio(Float fatRatio) {
		this.fatRatio = fatRatio;
	}

	public Float getTotal() {
		return total;
	}

	public void setTotal(Float total) {
		this.total = total;
	}

	@Column
	private Float carbsRatio;
	@Column
	private Float fatRatio;
	@Column
	private Float total;

	public int getDietPlanId() {
		return dietPlanId;
	}

	public void setDietPlanId(int dietPlanId) {
		this.dietPlanId = dietPlanId;
	}

	public String getFoodType() {
		return foodType;
	}

	public void setFoodType(String foodType) {
		this.foodType = foodType;
	}

	

	public String getSlots() {
		return slots;
	}

	public void setSlots(String slots) {
		this.slots = slots;
	}

	

}
