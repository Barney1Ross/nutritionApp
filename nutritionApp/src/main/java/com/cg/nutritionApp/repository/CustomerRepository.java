package com.cg.nutritionApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.cg.nutritionApp.entity.Customer;

public interface CustomerRepository extends JpaRepository<Customer, Integer>{

}
