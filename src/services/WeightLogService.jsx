/* eslint-disable */
import axios from "axios";

const WeightLog_API_BASE_URL = "http://localhost:8415/weightLogs";

class WeightLogService {

    constructor() {

    }

    addWeightLog(weightLog) {
        return axios.post(WeightLog_API_BASE_URL, weightLog);
    }

    getWeightLogs(){
        return axios.get(WeightLog_API_BASE_URL);
    }

    getWeightLogById(weightId) {
        return axios.get(WeightLog_API_BASE_URL + "/" + weightId);
    }

    updateWeightLog(weightId, weightLog) {
        return axios.put(WeightLog_API_BASE_URL + "/" +weightId, weightLog)
    }

    deleteWeightLogById(weightId) {
        return axios.delete(WeightLog_API_BASE_URL + "/" + weightId)
    }

}

export default new WeightLogService();
