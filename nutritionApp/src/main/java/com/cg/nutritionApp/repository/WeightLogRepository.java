package com.cg.nutritionApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.cg.nutritionApp.entity.WeightLog;

public interface WeightLogRepository extends JpaRepository<WeightLog, Integer>{

}
