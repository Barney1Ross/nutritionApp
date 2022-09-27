/* eslint-disable */
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getUserInfo } from './components/UserComponent/UserInfo';

import AddDietPlan from './components/DietPlanComponent/AddDietPlan';
import AddNutritionPlan from './components/NutritionPlanComponent/AddNutritionPlan';
import AddPaymentDetails from './components/PaymentComponent/AddPaymentDetails';
import AddUser from './components/UserComponent/AddUser';
import AddWeightLog from './components/WeightLogComponent/AddWeightLog';

import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import NavbarComponent from './components/Navbar/NavbarComponent';

import UpdateUser from './components/UserComponent/UpdateUser';
import UpdateDietPlan from './components/DietPlanComponent/UpdateDietPlan';
import UpdateNutritionPlan from './components/NutritionPlanComponent/UpdateNutritionPlan';
import UpdatePaymentDetails from './components/PaymentComponent/UpdatePaymentDetails';
import UpdateWeightLog from './components/WeightLogComponent/UpdateWeightLog';

import GetUserById from './components/UserComponent/GetUserById';

import GetNutritionPlanById from './components/NutritionPlanComponent/GetNutritionPlanById';
import GetDietPlanById from './components/DietPlanComponent/GetDietPlanById';
import GetPaymentById from './components/PaymentComponent/GetPaymentById';
import GetWeightLogById from './components/WeightLogComponent/GetWeightLogById';

import GetDietPlans from './components/DietPlanComponent/GetDietPlans';
import GetNutritionPlans from './components/NutritionPlanComponent/GetNutritionPlans';
import GetPayments from './components/PaymentComponent/GetPayments';
import GetWeightLogs from './components/WeightLogComponent/GetWeightLogs';

import Login from './components/UserComponent/Login';



function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("");

  useEffect(() => {
    if (getUserInfo() != null) {
      setIsLoggedIn(true);
      setRole(getUserInfo().role);

    }
  }, [isLoggedIn, role]);
  return (
    <div className="App">
      <BrowserRouter>
        <NavbarComponent isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} role={role} />
        <Routes>
          {isLoggedIn ? (
            <>

              <Route exact path="/home" element={<Home />} />
              {/* <Route exact path="/profile" element={<GetUserById />} /> */}
              {/* <Route exact path="/profile" element={<GetUserById setIsLoggedIn={setIsLoggedIn} />}/> */}


              <Route exact path="/addDietPlan" element={<AddDietPlan />} />
              <Route exact path="/addNutritionPlan" element={<AddNutritionPlan />} />
              <Route exact path="/addPayment" element={<AddPaymentDetails />} />
              <Route exact path="/addWeightLog" element={<AddWeightLog />} />

              <Route exact path="/getDietPlans" element={<GetDietPlans />} />
              <Route exact path="/getNutritionPlans" element={<GetNutritionPlans />} />
              <Route exact path="/getWeightLogs" element={<GetWeightLogs />} />
              <Route exact path="/getPayments" element={<GetPayments />} />

              <Route exact path="/getNutritionPlanById/:nutriPlanId" element={<GetNutritionPlanById />} />
              <Route exact path="/getDietPlanById/:dietPlanId" element={<GetDietPlanById />} />
              <Route exact path="/getPaymentById/:paymentId" element={<GetPaymentById />} />
              <Route exact path="/getWeightLogById/:weightId" element={<GetWeightLogById />} />

              <Route exact path="/updateUser/:userId" element={<UpdateUser />} />
              <Route exact path="/updateDietPlan/:dietPlanId" element={<UpdateDietPlan />} />
              <Route exact path="/updateNutritionPlan/:nutriPlanId" element={<UpdateNutritionPlan />} />
              <Route exact path="/updatePayment/:paymentId" element={<UpdatePaymentDetails />} />
              <Route exact path="/updateWeightLog/:weightId" element={<UpdateWeightLog />} />

            </>
          ) : (
            <>
              <Route exact path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
              <Route exact path="/addUser" element={<AddUser />} />
            </>
          )

          }

        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
