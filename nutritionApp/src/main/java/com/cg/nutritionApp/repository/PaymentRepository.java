package com.cg.nutritionApp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.cg.nutritionApp.entity.Payment;

public interface PaymentRepository extends JpaRepository<Payment, Integer>{

}
