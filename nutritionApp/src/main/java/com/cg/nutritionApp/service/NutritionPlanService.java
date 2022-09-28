package com.cg.nutritionApp.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.cg.nutritionApp.entity.NutritionPlan;
import com.cg.nutritionApp.exceptions.NutritionPlanException;
import com.cg.nutritionApp.repository.NutritionPlanRepository;

@Service
public class NutritionPlanService {

	@Autowired
	NutritionPlanRepository nutriPlanRepository;

	// saving the nutrition plan
	public String saveNutriPlan(NutritionPlan nutriPlan) {
		nutriPlanRepository.save(nutriPlan);
		return "nutrition plan details has been saved";
	}

	// fetching all the nutrition plans
	public List<NutritionPlan> getAllNutriPlans() {
		return nutriPlanRepository.findAll();
	}

	// fetching single nutrition plan as per id
	public ResponseEntity<NutritionPlan> getNutriPlanById(int nutriPlanId) {
		NutritionPlan nutriPlan = null;
		try {
			nutriPlan = nutriPlanRepository.findById(nutriPlanId)
					.orElseThrow(() -> new NutritionPlanException("Nutrition Plan does not exist with id :" + nutriPlanId));
			return ResponseEntity.ok(nutriPlan);
		} catch (NutritionPlanException e) {

			System.out.println(e.getMessage());			
		}
		return ResponseEntity.ok(nutriPlan);
	}

	// updating nutritionPlan after getting by nutriPlanId
	public ResponseEntity<NutritionPlan> updateNutritionPlan(int nutriPlanId, NutritionPlan nutriPlanDetails) {
		NutritionPlan nutriPlan = null;
		try {
			nutriPlan = nutriPlanRepository.findById(nutriPlanId)
					.orElseThrow(() -> new NutritionPlanException("Nutrition Plan does not exist with id :" + nutriPlanId));

			nutriPlan.setNutriPlanName(nutriPlanDetails.getNutriPlanName());
			nutriPlan.setPlanDescription(nutriPlanDetails.getPlanDescription());
			nutriPlan.setNutriPlanPrice(nutriPlanDetails.getNutriPlanPrice());
			nutriPlan.setCreated_At(nutriPlanDetails.getCreated_At());
			nutriPlan.setUpdated_At(nutriPlanDetails.getUpdated_At());

			NutritionPlan updatedNutriPlan = nutriPlanRepository.save(nutriPlan);
			return ResponseEntity.ok(updatedNutriPlan);

		} catch (NutritionPlanException e) {

			System.out.println(e.getMessage());
		}

		NutritionPlan updatedNutriPlan = nutriPlanRepository.save(nutriPlan);
		return ResponseEntity.ok(updatedNutriPlan);

	}

	// deleting nutrition plan by nutriPlanid
	public ResponseEntity<Map<String, Boolean>> deleteNutriPlan(int nutriPlanId) {
		NutritionPlan nutriPlan;
		try {
			nutriPlan = nutriPlanRepository.findById(nutriPlanId)
					.orElseThrow(() -> new NutritionPlanException("Nutrition plan does not exist with id :" + nutriPlanId));
			nutriPlanRepository.delete(nutriPlan);
		} catch (NutritionPlanException e) {
			System.out.println(e.getMessage());;
		}

		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
}
