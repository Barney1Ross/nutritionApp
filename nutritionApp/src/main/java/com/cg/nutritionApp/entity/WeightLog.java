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
	private Float weight;
	@Column
	private Float created_At;
	@Column
	private Float updated_At;

	public int getWeightId() {
		return weightId;
	}

	public void setWeightId(int weightId) {
		this.weightId = weightId;
	}

	public Float getWeight() {
		return weight;
	}

	public void setWeight(Float weight) {
		this.weight = weight;
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

	public WeightLog() {

	}

	public WeightLog(Float weight, Float created_At, Float updated_At) {
		super();
		this.weight = weight;
		this.created_At = created_At;
		this.updated_At = updated_At;
	}

}
