import React from 'react';
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <>
   <div className="inputsectionconainer">
   
   
     <nav className="nabar-logo">
        <p><i className="fa-sharp fa-solid fa-envelope-circle-check"></i></p>
        <div className="nav-links">
        
            <ul>
                <li className="moneyADd">
                   Balance: 0  
                </li>
                <li>
                    <Link to="/paymens">
                    <button className="btn-head">Add Money</button>
                    </Link>     
                </li>     
            </ul>
        </div>
     </nav>
   </div>
   
  
    </>
  )
}

export default Navbar
