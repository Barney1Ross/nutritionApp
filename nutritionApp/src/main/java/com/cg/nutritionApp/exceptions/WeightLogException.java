package com.cg.nutritionApp.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class WeightLogException extends Exception {

	private static final long serialVersionUID = 1L;

	public WeightLogException(String message) {
		super(message);
	}
}
