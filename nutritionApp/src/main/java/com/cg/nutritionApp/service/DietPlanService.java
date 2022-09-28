package com.cg.nutritionApp.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.cg.nutritionApp.entity.DietPlan;
import com.cg.nutritionApp.entity.NutriAppUser;
import com.cg.nutritionApp.exceptions.DietPlanException;
import com.cg.nutritionApp.repository.DietPlanRepository;
import com.cg.nutritionApp.repository.UserRepository;

@Service
public class DietPlanService {

	@Autowired
	DietPlanRepository dietPlanRepository;
	@Autowired
	UserRepository userRepository;

	// saving the dietPlans ~ create object
	public String saveDietPlan(DietPlan dietPlan) {
		dietPlanRepository.save(dietPlan);
		return "diet plan details has been saved";
	}

	// getting all the dietPlans ~ read objects
	public List<DietPlan> getAllDietPlans() {
		return dietPlanRepository.findAll();
		
	}

	// fetching single dietPlan as per dietPlanid ~read single object
	public ResponseEntity<DietPlan> getDietPlanById(int dietPlanId) {
		DietPlan dietPlan = null;
		try {
			dietPlan = dietPlanRepository.findById(dietPlanId)
					.orElseThrow(() -> new DietPlanException("dietPlan does not exist with id :" + dietPlanId));
			return ResponseEntity.ok(dietPlan);
		} catch (DietPlanException e) {

			System.out.println(e.getMessage());			
		}
		return ResponseEntity.ok(dietPlan);
	}

	// updating dietPlan details according to dietPlanId
	public ResponseEntity<DietPlan> updateDietPlan(int dietPlanId, DietPlan dietPlanDetails) {
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
			}
			
			DietPlan updatedDietPlan = dietPlanRepository.save(dietPlan);
			return ResponseEntity.ok(updatedDietPlan);

		}

	// deleting dietPlan by dietPlanid
	public ResponseEntity<Map<String, Boolean>> deleteDietPlan(int dietPlanId) {
		DietPlan dietPlan;
		try {
			dietPlan = dietPlanRepository.findById(dietPlanId)
					.orElseThrow(() -> new DietPlanException("Diet plan does not exist with id :" + dietPlanId));
			dietPlanRepository.delete(dietPlan);
		} catch (DietPlanException e) {
			System.out.println(e.getMessage());;
		}

		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

	// fetching dietPlan for user 
//	@SuppressWarnings("deprecation")
//	public DietPlan getDietPlanForUser (int userId) {
//		NutriAppUser user = userRepository.getById(userId);
//		return user.getDietPlan();
//	}
}
