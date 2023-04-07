import { Route, Routes } from "react-router-dom";
import HomeSlider from "./Sliders/homeslide";
import Register from "./Views/Register";
import Auth from "./context/requiredAuth";
import Unauthorized from "./Views/Unauthorized";

function App() {
  return (
    <div className="App">
 <Routes>
  <Route exact path="/home" element ={<Register/>}></Route>
  <Route path="/unauthorized" element={<Unauthorized />} />
  
 </Routes>
    </div>
  )

}

export default App;
