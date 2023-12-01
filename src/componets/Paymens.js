import React, { useState } from 'react'


const Paymens = () => {
const [alert,setalert] = useState(false)


  const submittfuntion = () =>{
  setalert(true);
  }
  return (
<>
    <p id="payentsrules">Payments Add Rules</p>
    <div style={{color:"white"}}>
        <ol>
            <li style={{backgroundColor:"blue"}}>PER GMAIL RS. 3 RUPEES</li>
            <li style={{backgroundColor:"black"}}>UPI Payments Availables</li>
            <li style={{backgroundColor:"red"}}>payments Add instant in Your Wallet</li>
            <li style={{backgroundColor:"blue"}}>Min Rechcarge 50 Rupees</li>
            <li style={{backgroundColor:"black"}}>PAST THE UTR NO.</li>
            <li style={{backgroundColor:"orange"}}>PAYEMENTS FAILED TRANSACTION ID PAST</li>

        </ol>
    </div>
    
    <div id="paymensinputsconiner">
        <p id="Copyaddress">Copy The Address--</p>
        <div id="kkd">

        </div>
        <h3 id="Upiid"><span>UPI Id: </span>snabk@ybl</h3>
        <div id="PaymentsBox">
        <input type="text" placeholder=' ENTER UTR NO.' />
        
        <button onClick={submittfuntion}>Submit</button>
        </div>  
    </div>
    <div style={{color:"white"}}>
      { 
        alert?<div id="payementssumbit">
         <span> PAYMENENTS SUBMIT <span id="SUCCESSFULLY">SUCCESSFULLY</span>,</span> 
        <span id="alert">ALERT:PAYMENTS UNDER 50 NOT ADD </span>
        </div>:null
      }
      
        <ol>
          <h2 style={{color:"black"}} id="note">NOTE------</h2>
            <li>Min Recharge 50 Rupees</li>
            <li>IF PAYEMNTS UNDER 50 PAY PAYMENST CAN NOT ADD IN YOUR WALLET</li>
            <li><span style={{color:"blue"}}>PAY:-</span>snabk@ybl</li>
            
        </ol>
    </div>
    
</>
  );
}

export default Paymens

