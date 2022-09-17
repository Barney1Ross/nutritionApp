package com.cg.nutritionApp.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table
public class Payment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private int paymentId;
	@Column
	private int custId;
	@Column
	private int dietPlanId;
	@Column
	private boolean payment;
	@Column
	private float created_At;
	@Column
	private float updated_At;

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

	public int getPaymentId() {
		return paymentId;
	}

	public void setPaymentId(int paymentId) {
		this.paymentId = paymentId;
	}

	public boolean getPayment() {
		return payment;
	}

	public void setPayment(boolean payment) {
		this.payment = payment;
	}

	public int getDietPlanId() {
		return dietPlanId;
	}

	public void setDietPlanId(int dietPlanId) {
		this.dietPlanId = dietPlanId;
	}

	public int getCustId() {
		return custId;
	}

	public void setCustId(int custId) {
		this.custId = custId;
	}

}
