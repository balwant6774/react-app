import React from 'react';
import { useNavigate } from 'react-router-dom';
import Enlihsgmail from './Enlihsgmail';


const Inputs = () => {
  // const random =(Math.floor(Math.random()*1677215));
  // const randomclolr = "Gmail"+random.toString(16)
  // console.log(randomclolr)
  
  const navitotr = useNavigate()
  const englishrun = ()=>{
    navitotr("/enlishgmail")
  }
  return (
 <>
 <from>
  <div id="inputboxonainer">
<div>
  <input type="text" className="EmailBox" readOnly/>
  </div>
  <div className="bnt-groups inputconainerbox">
    <button className="btn-head gmailresp"  style={{marginRight:"20px"}}>Password</button> 
    <button className="btn-head"  style={{marginRight:"20px"}}>New Gmail</button>
    </div>
    
  </div>
  </from>
  <div id="Enlishgmail">
    <button onClick={englishrun}>Click English Gmail</button>
  </div>
  <div style={{color:"white"}}>
        <ol>
            <li style={{backgroundColor:"blue"}}>PER GMAIL RS. 3 RUPEES</li>
            <li style={{backgroundColor:"blue"}}>ALL TYPE GMAIL AVAILABLES</li>
            <li style={{backgroundColor:"red"}}>UNLIMITED GMAIL AVALIBELES</li>
            <li style={{backgroundColor:"black"}}>ENGLISH GMAIL AVALIBELES</li>
           
        </ol>
    </div>
 </>
  )
}

export default Inputs
