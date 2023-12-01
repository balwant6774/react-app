import React from 'react';
import Navbar from './componets/Navbar';
import Input from "./componets/Inputs";
import {Routes,Route} from "react-router-dom";
import Paymens from './componets/Paymens';
import Enlihsgmail from './componets/Enlihsgmail';
import Loginform from './Loginform';


  
const App = () => {
  return (
    <>
    
    <div>
      
     
    
    <Navbar/>
     <Routes>
      <Route  path="/"  element={<Loginform/> }/>  
      <Route  path="/input"  element={<Input/> }/>  
      <Route  path="/paymens"  element={<Paymens/>}/> 
      <Route  path="/enlishgmail"  element={<Enlihsgmail/>}/> 
    </Routes>

    
      
    </div>
    
    
       </>    
    
  )
}

export default App;
