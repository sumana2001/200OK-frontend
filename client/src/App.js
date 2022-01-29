import Body from "./Pages/Body/Body";
import Header from "./Pages/Header/Header";
import './Resources/css/Main.css';
import Forms from "./Pages/Forms/Forms";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Updatehospital from "./Pages/UpdateHospital/UpdateHospital";

function App() {
  const margin={
    marginTop:'80px',
  };
  return (
    <div className="App">
      <div style={margin}>
        <BrowserRouter>
          <Header />            
          <Routes>
            <Route path="/" element={<Body />}></Route>
            <Route path="/addhospital" element={<Forms />}></Route>
            <Route path="/updatehospital" element={<Updatehospital />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
