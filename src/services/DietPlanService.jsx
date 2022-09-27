/* eslint-disable */
import axios from "axios";

const DietPLan_API_BASE_URL = "http://localhost:8415/dietPlans";

class DietPlanService {

	constructor() {

	}

	addDietPlan(dietPlan) {
		return axios.post(DietPLan_API_BASE_URL, dietPlan);
	}

	getDietPlans(){
        return axios.get(DietPLan_API_BASE_URL);
    }

	getDietPlanById(dietPlanId) {
		return axios.get(DietPLan_API_BASE_URL + "/" + dietPlanId);
	}

	updateDietPlan(dietPlanId, dietPlan) {
		return axios.put(DietPLan_API_BASE_URL+ "/" + dietPlanId, dietPlan)
	}

	deleteDietPlanById(dietPlanId) {
		return axios.delete(DietPLan_API_BASE_URL + "/" + dietPlanId)
	}

}

export default new DietPlanService();
