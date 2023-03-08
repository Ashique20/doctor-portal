import Navber from "./pages/shared/Navber";
import {Routes,Route} from "react-router-dom"
import Home from "./pages/home/Home";
import About from "./pages/About";
import Login from "./pages/login/Login";



function App() {
  return (
    <div >
   
   <Navber></Navber>
    
    <Routes>
     <Route path="/" element={<Home></Home>}></Route>
     <Route path="about" element={<About></About>}></Route>
     <Route path="login" element={<Login></Login>}></Route>
    </Routes>
    </div>
  );
}

export default App;
