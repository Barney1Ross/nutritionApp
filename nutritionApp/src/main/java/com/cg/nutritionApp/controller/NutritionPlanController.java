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

import com.cg.nutritionApp.entity.NutritionPlan;
import com.cg.nutritionApp.service.NutritionPlanService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class NutritionPlanController {

	@Autowired
	NutritionPlanService nutriPlanService;

	// request to save diet plans
	@PostMapping("/nutriPlans")
	private String saveNutriPlan(@Valid @RequestBody NutritionPlan nutriPlan) {
		nutriPlanService.saveNutriPlan(nutriPlan);
		return "nutrition plan saved with id : " + nutriPlan.getNutriPlanId();
	}

	// request to fetch all nutrition plans

	@GetMapping("/nutriPlans")
	public List<NutritionPlan> getAllNutriPlans() {
		return nutriPlanService.getAllNutriPlans();
	}

	// request to fetch nutrition plan by nutriPlanid
	@GetMapping("/nutriPlans/{nutriPlanId}")
	public ResponseEntity<NutritionPlan> getNutriPlan(@PathVariable("nutriPlanId") int nutriPlanId) {
		return nutriPlanService.getNutriPlanById(nutriPlanId);
	}

	@PutMapping("/nutriPlans/{nutriPlanId}")
	public ResponseEntity<NutritionPlan> updateNutritionPlan(@PathVariable("nutriPlanId") int nutriPlanId,
			@RequestBody NutritionPlan nutriPlanDetails) {
		return nutriPlanService.updateNutritionPlan(nutriPlanId, nutriPlanDetails);
	}

	// request to delete nutrition plan by nutriPlanid
	@DeleteMapping("/nutriPlans/{nutriPlanId}")
	private void deleteNutriPlan(@PathVariable("nutriPlanId") int nutriPlanId) {
		nutriPlanService.deleteNutriPlan(nutriPlanId);
	}

}
