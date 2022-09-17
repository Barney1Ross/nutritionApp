package com.cg.nutritionApp.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.nutritionApp.entity.Payment;
import com.cg.nutritionApp.repository.PaymentRepository;

@Service
public class PaymentService {

	@Autowired
	PaymentRepository paymentRepository;

	public List<Payment> getAllPaymentStats() {

		// fetching all the payments 
		List<Payment> payments = new ArrayList<Payment>();
		paymentRepository.findAll().forEach(pay -> payments.add(pay));
		return payments;
	}

	// fetching single nutrition plan as per id
	public Payment getPaymentStat(int paymentId) {
		return paymentRepository.findById(paymentId).get();
	}

	// saving the payment status
	public String savePaymentStatus(Payment payment) {
		paymentRepository.save(payment);
		return "payment detail has been saved";
	}

	// deleting nutrition plan by nutriPlanid
	public String removePayment(int paymentId) {
		paymentRepository.deleteById(paymentId);
		return "payment removed for id : " + paymentId;
	}
}
