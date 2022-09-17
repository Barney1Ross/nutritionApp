package com.cg.nutritionApp.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.cg.nutritionApp.entity.DietPlan;
import com.cg.nutritionApp.exceptions.DietPlanException;
import com.cg.nutritionApp.repository.DietPlanRepository;

@Service
public class DietPlanService {

	@Autowired
	DietPlanRepository dietPlanRepository;

	// saving the dietPlans ~ create object
	public String saveDietPlan(DietPlan dietPlan) {
		dietPlanRepository.save(dietPlan);
		return "diet plan details has been saved";
	}

	// getting all the dietPlans ~ read objects
	public List<DietPlan> getAllDietPlans() {

		List<DietPlan> dietPlans = new ArrayList<DietPlan>();
		dietPlanRepository.findAll().forEach(diet -> dietPlans.add(diet));
		return dietPlans;
	}

	// fetching single dietPlan as per dietPlanid ~read single object
	public ResponseEntity<DietPlan> getDietPlanById(@PathVariable int dietPlanid) {
		DietPlan dietPlan = null;
		try {
			dietPlan = dietPlanRepository.findById(dietPlanid)
					.orElseThrow(() -> new DietPlanException("dietPlan does not exist with id :" + dietPlanid));
			return ResponseEntity.ok(dietPlan);
		} catch (DietPlanException e) {

			System.out.println(e.getMessage());
			e.printStackTrace();
		}
		return ResponseEntity.ok(dietPlan);
	}

	// updating dietPlan details according to dietPlanId
	public ResponseEntity<DietPlan> updateDietPlan(@PathVariable int dietPlanId, @RequestBody DietPlan dietPlanDetails) {
			DietPlan dietPlan = null;
			try {
				dietPlan = dietPlanRepository.findById(dietPlanId)
						.orElseThrow(() -> new DietPlanException("Diet Plan does not exist with id :" + dietPlanId));
				
				
				dietPlan.setFoodType(dietPlanDetails.getFoodType());
				dietPlan.setSlots(dietPlanDetails.getSlots());
				dietPlan.setProteinRatio(dietPlanDetails.getProteinRatio());
				dietPlan.setCarbsRatio(dietPlanDetails.getCarbsRatio());
				dietPlan.setFatRatio(dietPlanDetails.getFatRatio());
				dietPlan.setTotal(dietPlanDetails.getTotal());
				
				DietPlan updatedDietPlan = dietPlanRepository.save(dietPlan);
				return ResponseEntity.ok(updatedDietPlan);
				
			} catch (DietPlanException e) {
				
				System.out.println(e.getMessage());
				e.printStackTrace();
			}
			
			DietPlan updatedDietPlan = dietPlanRepository.save(dietPlan);
			return ResponseEntity.ok(updatedDietPlan);

		}

	// deleting dietPlan by dietPlanid
	public ResponseEntity<Map<String, Boolean>> deleteDietPlan(@PathVariable int dietPlanId) {
		DietPlan dietPlan;
		try {
			dietPlan = dietPlanRepository.findById(dietPlanId)
					.orElseThrow(() -> new DietPlanException("Diet plan does not exist with id :" + dietPlanId));
			dietPlanRepository.delete(dietPlan);
		} catch (DietPlanException e) {
			System.out.println(e.getLocalizedMessage());;
		}

		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

}
