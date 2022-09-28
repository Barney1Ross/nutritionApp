package com.cg.nutritionApp.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.cg.nutritionApp.entity.Payment;
import com.cg.nutritionApp.exceptions.PaymentException;
import com.cg.nutritionApp.repository.PaymentRepository;

@Service
public class PaymentService {

	@Autowired
	PaymentRepository paymentRepository;

	// saving the payment status
	public String savePaymentStatus(Payment payment) {
		paymentRepository.save(payment);
		return "payment detail has been saved";
	}

	// fetching all the payments
	public List<Payment> getAllPaymentStats() {
		return paymentRepository.findAll();
	}

	// fetching single nutrition plan as per id
	public ResponseEntity<Payment> getPaymentById(int paymentId) {
		Payment pay = null;
		try {
			pay = paymentRepository.findById(paymentId)
					.orElseThrow(() -> new PaymentException("Payment for paymentId " + paymentId + " does not exist."));
		} catch (PaymentException e) {
			System.out.println(e.getMessage());
		}
		return ResponseEntity.ok(pay);
	}

	// updating payment status after fetching by paymentId
	public ResponseEntity<Payment> updatePayment(int paymentId, Payment paymentDetails) {
		Payment pay = null;
		try {
			pay = paymentRepository.findById(paymentId)
					.orElseThrow(() -> new PaymentException("Payment does not exist with id :" + paymentId));

			pay.setPayment(paymentDetails.getPayment());
			pay.setCreated_At(paymentDetails.getCreated_At());
			pay.setUpdated_At(paymentDetails.getUpdated_At());

			Payment updatedPayment = paymentRepository.save(pay);
			return ResponseEntity.ok(updatedPayment);

		} catch (PaymentException e) {

			System.out.println(e.getMessage());
		}

		Payment updatedPayment = paymentRepository.save(pay);
		return ResponseEntity.ok(updatedPayment);

	}

	// deleting payment details by paymentId
	public ResponseEntity<Map<String, Boolean>> deletePayment(int paymentId) {

		Payment pay;
		try {
			pay = paymentRepository.findById(paymentId)
					.orElseThrow(() -> new PaymentException("Payment does not exist with id :" + paymentId));
			paymentRepository.delete(pay);

		} catch (PaymentException e) {
			System.out.println(e.getMessage());
		}
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);

	}

}
