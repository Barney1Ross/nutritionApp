package com.cg.nutritionApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.cg.nutritionApp.entity.NutritionPlan;

public interface NutritionPlanRepository extends JpaRepository<NutritionPlan, Integer>{

}
