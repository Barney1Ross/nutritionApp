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

import com.cg.nutritionApp.entity.DietPlan;
import com.cg.nutritionApp.service.DietPlanService;

@CrossOrigin(origins = "http://localhost:3000")

@RestController
public class DietPlanController {

	@Autowired
	DietPlanService dietPlanService;

	// request to save diet plans
	@PostMapping("/dietPlans")
	private String saveDietPlan(@Valid @RequestBody DietPlan dietPlan) {
		dietPlanService.saveDietPlan(dietPlan);
		return "diet plan saved with id : " + dietPlan.getDietPlanId();
	}

	// request to fetch all diet plans
	@GetMapping("/dietPlans")
	public List<DietPlan> getAlldietPlans() {
		return dietPlanService.getAllDietPlans();
	}

	// request to fetch diet plan by dietPlanId
	@GetMapping("/dietPlans/{dietPlanId}")
	public ResponseEntity<DietPlan> getDietPlan(@PathVariable("dietPlanId") int dietPlanId) {
		return dietPlanService.getDietPlanById(dietPlanId);
	}

	// request to update diet plan by dietPlanId
	@PutMapping("/dietPlans/{dietPlanId}")
	public ResponseEntity<DietPlan> updateDietPlan(@PathVariable("dietPlanId") int dietPlanId, @RequestBody DietPlan dietPlanDetails) {
		System.out.println("id"+ dietPlanId + "details "+ dietPlanDetails.getFoodType());
		return dietPlanService.updateDietPlan(dietPlanId, dietPlanDetails);
	}

	// request to delete diet plan by dietPlanId
	@DeleteMapping("/dietPlans/{dietPlanId}")
	private void deleteDietPlan(@PathVariable("dietPlanId") int dietPlanId) {
		dietPlanService.deleteDietPlan(dietPlanId);
	}
	
	//fetching allocated dietPlan according to userId by sending request through url 
//	@GetMapping("/dietPlanUser/{userId}")
//	public DietPlan getDietPlanUser(@PathVariable("userId") int userId) {
//		return dietPlanService.getDietPlanForUser(userId);
//	}

}
