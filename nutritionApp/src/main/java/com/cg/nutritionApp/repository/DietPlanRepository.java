package com.cg.nutritionApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.cg.nutritionApp.entity.DietPlan;

public interface DietPlanRepository extends JpaRepository<DietPlan, Integer>{

}
