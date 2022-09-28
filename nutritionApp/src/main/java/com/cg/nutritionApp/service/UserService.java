package com.cg.nutritionApp.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;

import com.cg.nutritionApp.entity.NutriAppUser;
import com.cg.nutritionApp.exceptions.UserException;
import com.cg.nutritionApp.repository.UserRepository;



@Service
public class UserService {

	@Autowired
	UserRepository userRepository;

	// saving user details
	public NutriAppUser saveUser(NutriAppUser user) {

		return userRepository.save(user);
	}

	// fetching all users and their data
	public List<NutriAppUser> getAllUsers() {
		return userRepository.findAll();

	}

	// fetching a single user by userId
	public NutriAppUser getUser(int userId) throws UserException {
		try {
			NutriAppUser user = userRepository.findById(userId).get();
			return user;
		} catch (Exception e) {
			throw new UserException("Id is not present, enter correct Id");
		}
	}

	// updating user details according to userId
	public ResponseEntity<NutriAppUser> updateUser(@PathVariable int userId, @RequestBody NutriAppUser userDetails) {
		NutriAppUser user = null;
		try {
			user = userRepository.findById(userId)
					.orElseThrow(() -> new UserException("User does not exist with id :" + userId));

//			user.setUserIdentification(userDetails.getUserIdentification());
			user.setFullName(userDetails.getFullName());
			user.setContact(userDetails.getContact());
			user.setUserGender(userDetails.getUserGender());
//			user.setDob(userDetails.getDob());
//			user.setPhoto(userDetails.getPhoto());
			user.setUserEmail(userDetails.getUserEmail());
			user.setRole(userDetails.getRole());
//			user.setStatus(userDetails.getStatus());
//			user.setUserWeight(userDetails.getUserWeight());
//			user.setUserHeight(userDetails.getUserHeight());
//			user.setDiateryOrientation(userDetails.getDiateryOrientation());
//			user.setIntensity(userDetails.getIntensity());
//			user.setGoal(userDetails.getGoal());
//			user.setWorkOutTime(userDetails.getWorkOutTime());
//			user.setWakeUpTime(userDetails.getWakeUpTime());
//			user.setSleepTime(userDetails.getSleepTime());
//			user.setMedicalConditon(userDetails.getMedicalConditon());
			user.setAllergicTo(userDetails.getAllergicTo());
			user.setLoginName(userDetails.getLoginName());
			user.setUserPassword(userDetails.getUserPassword());
//			user.setDietPlan(userDetails.getDietPlan());
//			user.setNutriPlan(userDetails.getNutriPlan());

			NutriAppUser updatedUser = userRepository.save(user);
			return ResponseEntity.ok(updatedUser);

		} catch (UserException e) {
			System.out.println(e.getMessage());
		}
		NutriAppUser updatedUser = userRepository.save(user);
		return ResponseEntity.ok(updatedUser);

	}

	// deleting user and details by userId
	public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable int userId) {
		NutriAppUser user;
		try {
			user = userRepository.findById(userId)
					.orElseThrow(() -> new UserException("user does not exist with id :" + userId));
			userRepository.delete(user);
		} catch (UserException e) {
			e.getMessage();
		}

		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}

	// boolean method to check login credentials for user entity
	public boolean login(int userId, String loginName, String pass) {
		NutriAppUser user = userRepository.findById(userId).get();
		if (user.equals(null)) {
			System.out.println("User doesn't exist!!! ");
			return false;
		} else {
			if ( user.getLoginName().equals(loginName) && user.getUserPassword().equals(pass)) {
				System.out.println("Login succesful for user with id : " + userId);
				return true;
			} else {
				System.out.println("Wrong credentials!!!");
				return false;
			}
		}
	}
	
	public NutriAppUser loginUser(NutriAppUser user) throws UserException {
		NutriAppUser user1 = userRepository.findByLoginName(user.getLoginName());
		if (user1 != null) {
			if (user.getUserPassword().equals(user1.getUserPassword())) {
				return user1;
			} else {
				throw new UserException("Wrong Password");
			}
		} else {
			throw new UserException("Wrong Username or Password");
		}
	}
 
}
