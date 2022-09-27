/* eslint-disable */
import axios from "axios";

const Payment_API_BASE_URL = "http://localhost:8415/payments";

class PaymentService {

    constructor() {

    }

    addPayementDetails(payment) {
        return axios.post(Payment_API_BASE_URL, payment);
    }

    getPayments(){
        return axios(Payment_API_BASE_URL);
    }

    getPaymentById(paymentId) {
        return axios.get(Payment_API_BASE_URL + "/" + paymentId);
    }

    updatePayment(paymentId, payment) {
        return axios.put(Payment_API_BASE_URL+ "/" +paymentId, payment)
    }

    deletePaymentById(paymentId) {
        return axios.delete(Payment_API_BASE_URL + "/" + paymentId)
    }

}

export default new PaymentService();
