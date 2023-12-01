import axios from 'axios';
import React, {  useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Loginform = () => {
 
  const navitotr = useNavigate();
  
  const [randomID,setrandom] = useState("");
  const [inputdata,setinpudata] = useState("");
  const GenrateId = () =>{
    const randomId = Math.floor(Math.random()*16777215);
    const roId = "Gzilla"+ randomId;
    setrandom(roId);  
    axios.post("https://65560cf484b36e3a431ee70c.mockapi.io/crud",{
      name:randomID,
      
     });
   
  }  
  const inpudata = (event) =>{
    setinpudata(event.target.value);    
  }
  console.log(inputdata);
  const submitt = () =>{

    getdata(); 
    
    
  }
   const getdata =() =>{
    axios.get("https://65560cf484b36e3a431ee70c.mockapi.io/crud")
    .then((response)=>{ 
      const index=response.data;  
      index.forEach((data)=>{ 
        console.log(data.name);
        console.log("ipudata" +inputdata);
        if(data.name===inputdata){
          navitotr("/input")
         }
      });
    });
   }
  return (
    <>
        <div className="input-box">
         <input 
         type="text" placeholder='ENTER YOUR ID..' 
         name="name"
         value={inputdata}
         onChange={inpudata}
         />
         <div id="randomID">{randomID}</div><br />
         <button onClick={GenrateId}>Generate Id</button>
         <button onClick={submitt}>submit</button>
        </div>
    </>
  )
}

export default Loginform
