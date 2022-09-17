package com.cg.nutritionApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cg.nutritionApp.entity.Customer;
import com.cg.nutritionApp.service.CustomerService;

@RestController
public class CustomerController {

	@Autowired
	private CustomerService customerService;

	// request to save diet plans
	@PostMapping("/customer")
	private String saveCustomer(@RequestBody Customer customer) {
		customerService.saveCustomer(customer);
		return "diet plan saved with id : " + customer.getCustId();
	}

	// request to fetch all diet plans
	@GetMapping("/customer")
	public List<Customer> getAllCustomers() {
		return customerService.getAllCustomers();
	}

	// request to fetch diet plan by dietPlanId
	@GetMapping("/customer/{custId}")
	public ResponseEntity<Customer> getCustomer(@PathVariable("custId") int custId) {
		return customerService.getCustomerById(custId);
	}

	// request to update diet plan by dietPlanId
	@PutMapping("/customer/{custId}")
	public ResponseEntity<Customer> updateCustomer(@PathVariable("custId") int custId,
			@RequestBody Customer customerDetails) {
		return customerService.updateCustomer(custId, customerDetails);
	}

	// request to delete diet plan by dietPlanId
	@DeleteMapping("/customer/{custId}")
	private void deleteCustomer(@PathVariable("custId") int custId) {
		customerService.deleteCustomer(custId);
	}


}
