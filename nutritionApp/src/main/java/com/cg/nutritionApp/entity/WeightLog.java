package com.cg.nutritionApp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class WeightLog {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private int weightId;
	@Column
	private int custId;
	@Column
	private float weight;
	@Column
	private float created_At;
	@Column
	private float updated_At;

	public int getWeightId() {
		return weightId;
	}

	public void setWeightId(int weightId) {
		this.weightId = weightId;
	}

	public float getWeight() {
		return weight;
	}

	public void setWeight(float weight) {
		this.weight = weight;
	}

	public float getCreated_At() {
		return created_At;
	}

	public void setCreated_At(float created_At) {
		this.created_At = created_At;
	}

	public float getUpdated_At() {
		return updated_At;
	}

	public void setUpdated_At(float updated_At) {
		this.updated_At = updated_At;
	}

	public int getCustId() {
		return custId;
	}

	public void setCustId(int custId) {
		this.custId = custId;
	}
}
