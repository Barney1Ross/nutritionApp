package com.cg.nutritionApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cg.nutritionApp.entity.NutritionPlan;
import com.cg.nutritionApp.service.NutritionPlanService;

@RestController
public class NutritionPlanController {

	@Autowired
	NutritionPlanService nutriPlanService;

	// request to fetch all nutrition plans
	@GetMapping("/nutriPlans")
	public List<NutritionPlan> getAllNutriPlans() {
		return nutriPlanService.getAllNutriPlans();
	}

	// request to fetch nutrition plan by nutriPlanid
	@GetMapping("/nutriPlans/{nutriPlanId}")
	public NutritionPlan getNutriPlan(@PathVariable("nutriPlanId") int nutriPlanId) {
		return nutriPlanService.getNutriPlanById(nutriPlanId);
	}

	// request to delete nutrition plan by nutriPlanid
	@DeleteMapping("/nutriPlans/{nutriPlanId}")
	private void deleteNutriPlan(@PathVariable("nutriPlanId") int nutriPlanId) {
		nutriPlanService.deleteNutriPlan(nutriPlanId);
	}

	// request to save diet plans
	@PostMapping("/nutriPlans")
	private String saveNutriPlan(@RequestBody NutritionPlan nutriPlan) {
		nutriPlanService.saveNutriPlan(nutriPlan);
		return "diet plan saved with id : " + nutriPlan.getNutriPlanId();
	}

}
