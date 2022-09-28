package com.cg.nutritionApp.controller;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.cg.nutritionApp.entity.NutriAppUser;
import com.cg.nutritionApp.exceptions.UserException;
import com.cg.nutritionApp.service.UserService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class UserController {

	@Autowired
	private UserService userService;

	// request to save diet plans
	@PostMapping("/users")
	private String saveUser(@Valid @RequestBody NutriAppUser user) {
		userService.saveUser(user);
		return "User details saved with id : " + user.getUserId();
	}

	// request to fetch all diet plans
	@GetMapping("/users")
	public List<NutriAppUser> getAllUsers() {
		return userService.getAllUsers();
	}

	// request to fetch diet plan by dietPlanId
	@GetMapping("/users/{userId}")
	public ResponseEntity<NutriAppUser> getUser(@PathVariable("userId") int userId) throws UserException {
		return new ResponseEntity<NutriAppUser> (userService.getUser(userId), HttpStatus.OK);
	}

	// request to update diet plan by dietPlanId
	@PutMapping("/users/{userId}")
	public ResponseEntity<NutriAppUser> updateUser(@PathVariable("userId") int userId,
			@RequestBody NutriAppUser userDetails) {
		return userService.updateUser(userId, userDetails);
	}

	// request to delete diet plan by dietPlanId
	@DeleteMapping("/users/{userId}")
	private void deleteUser(@PathVariable("userId") int userId) {
		userService.deleteUser(userId);
	}

	// URL request for authentication
	@GetMapping("/login/{userId}/{loginName}/{password}")
	public String loginMethod(@PathVariable("userId") int userId, @PathVariable("loginName") String loginName,
			@PathVariable("password") String password) {
		boolean b =userService.login(userId, loginName, password);
		if(b) {
			return "login successful!!";
		}else {return "Wrong credentials";}

	}
	// post mapping to handle HTTP post requests for login purpose
	@PostMapping("/users/login")
	public ResponseEntity<NutriAppUser> userLogin(@RequestBody NutriAppUser user, HttpSession session) throws UserException{
		NutriAppUser user1 = userService.loginUser(user);
		session.setAttribute("user", user1);
		return new ResponseEntity<>(user1, HttpStatus.OK);
	}
	
	@GetMapping("/users/logout")
	public ResponseEntity<String> logout(HttpSession session) {
		if (session.getAttribute("users") != null) {
			session.invalidate();
			return new ResponseEntity<>("Logout Successfully", HttpStatus.OK);
		} else {
			return new ResponseEntity<>("You are not logged in", HttpStatus.BAD_REQUEST);
		}
	}

}
