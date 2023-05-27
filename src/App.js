import Navber from "./pages/shared/Navber";
import { Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home";
import About from "./pages/About";
import Calender from "./pages/Calender/Calender";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/Register";
import Auth from "./pages/RequireAuth/RequireAuth";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashBoard from "./pages/shared/DashBoard/DashBoard";
import MyAppointment from "./pages/shared/DashBoard/MyAppointment";
import MyReview from "./pages/shared/DashBoard/MyReview";
import Users from "./pages/shared/DashBoard/Users";
import AddDoctor from "./pages/shared/DashBoard/AddDoctor";
import ManageDoctors from "./pages/shared/DashBoard/ManageDoctors";
import Payment from "./pages/shared/DashBoard/Payment";






function App() {
  return (
    <div className="max-w-7xl mx-auto px-12">

      <Navber></Navber>
      
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="about" element={<Auth>
          <About></About>
        </Auth>}></Route>
        <Route path="login" element={<SignIn></SignIn>}></Route>
        <Route path="appointment" element={<Auth><Calender></Calender></Auth>}></Route>
        <Route path="dashboard" element={<Auth><DashBoard></DashBoard></Auth>}>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path="review" element={<MyReview></MyReview>}></Route>
          <Route path="users" element={<Users></Users>}></Route>
          <Route path="AddDoctor" element={<AddDoctor></AddDoctor>}></Route>
          <Route path="ManageDoctor" element={<ManageDoctors></ManageDoctors>}></Route>
          <Route path="payment/:id" element={<Payment></Payment>}></Route>
        </Route>
        <Route path="signup" element={<SignUp></SignUp>}></Route>
        
      </Routes>

      <ToastContainer />
    </div>

  );
}

export default App;
