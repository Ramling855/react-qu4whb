import React from "react";
import "./style.css";
import Theatre from './Theatre'
import Login from './Login'
import Show from './Show'
import Success from './Success'
import {
  BrowserRouter ,
  
  Routes,
  Route,
} from "react-router-dom";

export default function App() {
  return (
    
    <div><BrowserRouter>
      <Routes>
<Route path='/' element={<Login/>}/>
<Route path='/show' element={<Show/>}/>
<Route path='/Theatre' element={<Theatre/>}/>
<Route path='/Success' element={<Success/>}/>
      </Routes>
      
      </BrowserRouter>
    </div>
    
  );
}
