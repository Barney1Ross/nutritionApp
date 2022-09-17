package com.cg.nutritionApp.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.cg.nutritionApp.entity.Customer;
import com.cg.nutritionApp.exceptions.CustomerException;
import com.cg.nutritionApp.repository.CustomerRepository;

@Service
public class CustomerService {

	@Autowired
	CustomerRepository customerRepository;

	// saving customer details
	public Customer saveCustomer(Customer customer) {

		return customerRepository.save(customer);
	}

	// fetching all customers and their data
	public List<Customer> getAllCustomers() {

		return customerRepository.findAll();

	}

	// fetching a single customer by custId
	public ResponseEntity<Customer> getCustomerById(@PathVariable int custId) {
		Customer cust = null;
		try {
			cust = customerRepository.findById(custId)
					.orElseThrow(() -> new CustomerException("Customer does not exist with id :" + custId));
			return ResponseEntity.ok(cust);
		} catch (CustomerException e) {
			System.out.println(e.getLocalizedMessage());
			;
		}
		return ResponseEntity.ok(cust);
	}

	// updating customer details according to custId
	public ResponseEntity<Customer> updateCustomer(@PathVariable int custId, @RequestBody Customer custDetails) {
		Customer cust = null;
		try {
			cust = customerRepository.findById(custId)
					.orElseThrow(() -> new CustomerException("Customer does not exist with id :" + custId));

			cust.setCustIdentification(custDetails.getCustIdentification());
			cust.setCustName(custDetails.getCustName());
			cust.setContact(custDetails.getContact());
			cust.setCustGender(custDetails.getCustGender());
			cust.setDob(custDetails.getDob());
			cust.setPhoto(custDetails.getPhoto());
			cust.setCustEmail(custDetails.getCustEmail());
			cust.setRole(custDetails.getRole());
			cust.setStatus(custDetails.getStatus());
			cust.setCustWeight(custDetails.getCustWeight());
			cust.setCustHeight(custDetails.getCustHeight());
			cust.setDiateryOrientation(custDetails.getDiateryOrientation());
			cust.setIntensity(custDetails.getIntensity());
			cust.setGoal(custDetails.getGoal());
			cust.setWorkOutTime(custDetails.getWorkOutTime());
			cust.setWakeUpTime(custDetails.getWakeUpTime());
			cust.setSleepTime(custDetails.getSleepTime());
			cust.setMedicalConditon(custDetails.getMedicalConditon());
			cust.setAllergicTo(custDetails.getAllergicTo());
			cust.setLoginName(custDetails.getLoginName());
			cust.setCustPassword(custDetails.getCustPassword());

			Customer updatedCustomer = customerRepository.save(cust);
			return ResponseEntity.ok(updatedCustomer);
		} catch (CustomerException e) {

			e.printStackTrace();
		}
		Customer updatedCustomer = customerRepository.save(cust);
		return ResponseEntity.ok(updatedCustomer);

	}

	// deleting customer and details by custId
	public ResponseEntity<Map<String, Boolean>> deleteCustomer(@PathVariable int custId) {
		Customer cust;
		try {
			cust = customerRepository.findById(custId)
					.orElseThrow(() -> new CustomerException("Customer does not exist with id :" + custId));
			customerRepository.delete(cust);
		} catch (CustomerException e) {
			e.getMessage();
		}

		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
