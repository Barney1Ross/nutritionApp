package com.cg.nutritionApp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cg.nutritionApp.entity.WeightLog;
import com.cg.nutritionApp.service.WeightLogService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class WeightLogController {

	@Autowired
	WeightLogService weightLogService;

	// request to save weight log
	@PostMapping("/weightLogs")
	private String saveDietPlan(@RequestBody WeightLog weightLog) {
		weightLogService.saveWeightLog(weightLog);
		return "weight log saved with id : " + weightLog.getWeightId();
	}

	// request to fetch all diet plans
	@GetMapping("/weightLogs")
	public List<WeightLog> getAllWeightLogs() {
		return weightLogService.getAllWeightLogs();
	}

	// request to fetch weight log by weightLogId
	@GetMapping("/weightLogs/{weightLogId}")
	public ResponseEntity<WeightLog> getWeightLog(@PathVariable("weightLogId") int weightLogId) {
		return weightLogService.getWeightLogById(weightLogId);
	}

	// request to update weight log by weightLogId
	@PutMapping("/weightLogs/{weightLogId}")
	public ResponseEntity<WeightLog> updateWeightLog(@PathVariable("weightLogId") int weightLogId,
			@RequestBody WeightLog weightDetails) {
		return weightLogService.updateWeightLog(weightLogId, weightDetails);
	}

	// request to delete weight log by weightLogId
	@DeleteMapping("/weightLogs/{weightLogId}")
	private void deleteWeightLog(@PathVariable("weightLogId") int weightLogId) {
		weightLogService.deleteWeightLog(weightLogId);
	}
}
