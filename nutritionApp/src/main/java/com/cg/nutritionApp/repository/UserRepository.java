package com.cg.nutritionApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.cg.nutritionApp.entity.NutriAppUser;

public interface UserRepository extends JpaRepository<NutriAppUser, Integer>{

	public NutriAppUser findByLoginName(String loginName);
	
}
