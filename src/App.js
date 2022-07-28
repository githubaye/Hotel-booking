//import pages in App.js

// import { BrowserRouter,  Route } from "react-router-dom";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Home from "./booking/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import TopNav from "./components/TopNav";




function App() {
  return (
    <BrowserRouter>
    <TopNav/>
      <Routes>
        <Route exact path="/" element={<Home />}/>
          <Route  exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
        
      </Routes>

    </BrowserRouter>
  );
}
export default App;
