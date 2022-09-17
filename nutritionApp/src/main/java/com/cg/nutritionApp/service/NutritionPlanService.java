package com.cg.nutritionApp.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cg.nutritionApp.entity.NutritionPlan;
import com.cg.nutritionApp.repository.NutritionPlanRepository;

@Service
public class NutritionPlanService {

	@Autowired
	NutritionPlanRepository nutriPlanRepository;

	public List<NutritionPlan> getAllNutriPlans() {

		// fetching all the nutrition plans
		List<NutritionPlan> nutriPlans = new ArrayList<NutritionPlan>();
		nutriPlanRepository.findAll().forEach(nutri -> nutriPlans.add(nutri));
		return nutriPlans;
	}

	// fetching single nutrition plan as per id
	public NutritionPlan getNutriPlanById(int nutriPlanId) {
		return nutriPlanRepository.findById(nutriPlanId).get();
	}

	// saving the nutrition plan
	public String saveNutriPlan(NutritionPlan nutriPlan) {
		nutriPlanRepository.save(nutriPlan);
		return "nutrition plan details has been saved";
	}

	// deleting nutrition plan by nutriPlanid
	public String deleteNutriPlan(int nutriPlanId) {
		nutriPlanRepository.deleteById(nutriPlanId);
		return "deleted nutrition plan with id : " + nutriPlanId;
	}
}
