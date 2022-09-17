package com.cg.nutritionApp.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class PaymentException extends Exception {

	private static final long serialVersionUID = 1L;

	public PaymentException() {
		super();
	}

	public PaymentException(String errMsg) {
		super(errMsg);
	}
}
