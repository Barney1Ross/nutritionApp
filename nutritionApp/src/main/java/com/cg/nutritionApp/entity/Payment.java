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
public class Payment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column
	private int paymentId;
	@Column
	@NotBlank(message = "payment cannot be empty")
	private String payment;
	@Column
	private Float created_At;
	@Column
	private Float updated_At;

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

	public int getPaymentId() {
		return paymentId;
	}

	public void setPaymentId(int paymentId) {
		this.paymentId = paymentId;
	}

	public String getPayment() {
		return payment;
	}

	public void setPayment(String payment) {
		this.payment = payment;
	}

	public Payment() {

	}

	public Payment(String payment, Float created_At, Float updated_At) {
		super();
		this.payment = payment;
		this.created_At = created_At;
		this.updated_At = updated_At;
	}
}
