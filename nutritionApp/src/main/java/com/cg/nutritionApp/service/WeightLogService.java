package com.cg.nutritionApp.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.cg.nutritionApp.entity.WeightLog;
import com.cg.nutritionApp.exceptions.WeightLogException;
import com.cg.nutritionApp.repository.WeightLogRepository;

@Service
public class WeightLogService {

	@Autowired
	WeightLogRepository weightLogRepository;

	// saving weight log details
	public String saveWeightLog(WeightLog weightLog) {
		weightLogRepository.save(weightLog);
		return "weight log has been saved";
	}

	// fetching all the weight logs
	public List<WeightLog> getAllWeightLogs() {
		return weightLogRepository.findAll();
	}

	// fetching single weight log by id
	public ResponseEntity<WeightLog> getWeightLogById(int weightLogId) {
		WeightLog wtl = null;

		try {
			wtl = weightLogRepository.findById(weightLogId)
					.orElseThrow(() -> new WeightLogException("Weight Log does not exist with id :" + weightLogId));
			return ResponseEntity.ok(wtl);

		} catch (WeightLogException e) {
			System.out.println(e.getMessage());
		}

		return ResponseEntity.ok(wtl);
	}

	// updating weight log by weightLogid
	public ResponseEntity<WeightLog> updateWeightLog(int weightLogId, WeightLog weightDetails) {
		WeightLog weightLog = null;
		try {
			weightLog = weightLogRepository.findById(weightLogId)
					.orElseThrow(() -> new WeightLogException("Weight Log does not exist with id : " + weightLogId));
			weightLog.setWeight(weightDetails.getWeight());
			weightLog.setCreated_At(weightDetails.getCreated_At());
			weightLog.setUpdated_At(weightDetails.getUpdated_At());

			WeightLog updatedWeightLog = weightLogRepository.save(weightLog);
			return ResponseEntity.ok(updatedWeightLog);

		} catch (WeightLogException e) {
			System.out.println(e.getMessage());
		}
		WeightLog updatedWeightLog = weightLogRepository.save(weightLog);
		return ResponseEntity.ok(updatedWeightLog);
	}

	// deleting weight log by weightLogid
	public ResponseEntity<Map<String, Boolean>> deleteWeightLog(int weightLogId) {

		WeightLog weightLog;
		try {
			weightLog = weightLogRepository.findById(weightLogId)
					.orElseThrow(() -> new WeightLogException("Weight log does not exist with id :" + weightLogId));
			weightLogRepository.delete(weightLog);

		} catch (WeightLogException e) {
			System.out.println(e.getMessage());
		}
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);

	}

}
