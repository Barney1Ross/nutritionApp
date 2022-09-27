/* eslint-disable */
import axios from "axios";

const NutritionPlan_API_BASE_URL = "http://localhost:8415/nutriPlans";

class NutriPlanService {

    constructor() {

    }

    addNutritionPlan(nutritionPlan) {
        return axios.post(NutritionPlan_API_BASE_URL, nutritionPlan);
    }

    getNutritionPlans(){
        return axios.get(NutritionPlan_API_BASE_URL);
    }

    getNutritionPlanById(nutriPlanId) {
        return axios.get(NutritionPlan_API_BASE_URL + "/" + nutriPlanId);
    }

    updateNutritionPlan(nutriPlanId, nutritionPlan) {
        return axios.put(NutritionPlan_API_BASE_URL+ "/" +nutriPlanId, nutritionPlan)
    }

    deleteNutritionPlanById(nutriPlanId) {
        return axios.delete(NutritionPlan_API_BASE_URL + "/" + nutriPlanId)
    }

}

export default new NutriPlanService();
