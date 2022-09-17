package com.cg.nutritionApp.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class DietPlanException extends Exception {

	private static final long serialVersionUID = 1L;

	public DietPlanException(String message) {
		super(message);
	}
}
