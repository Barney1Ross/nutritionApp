package com.cg.nutritionApp.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cg.nutritionApp.entity.Payment;
import com.cg.nutritionApp.service.PaymentService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class PaymentController {

	@Autowired
	PaymentService paymentService;

	// request to save payments
	@PostMapping("/payments")
	private String savePayment(@Valid @RequestBody Payment payment) {
		paymentService.savePaymentStatus(payment);
		return "Payment status has been saved with id : " + payment.getPaymentId();
	}

	// request to fetch all payment details
	@GetMapping("/payments")
	public List<Payment> getAllPayments() {
		return paymentService.getAllPaymentStats();
	}

	// request to fetch payment status by paymentId
	@GetMapping("/payments/{paymentId}")
	public ResponseEntity<Payment> getpayment(@PathVariable("paymentId") int paymentId) {
		return paymentService.getPaymentById(paymentId);
	}

	// request to update payment status by paymentId
	@PutMapping("/payments/{paymentId}")
	public ResponseEntity<Payment> updatePayment(@PathVariable("paymentId") int paymentId,
			@RequestBody Payment paymentDetails) {
		return paymentService.updatePayment(paymentId, paymentDetails);
	}

	// request to remove payment details by paymentId
	@DeleteMapping("/payments/{paymentId}")
	private void deletePayment(@PathVariable("paymentId") int paymentId) {
		paymentService.deletePayment(paymentId);
	}
}
