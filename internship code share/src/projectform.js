import React, { useState } from 'react';
import './index.css'
import SetLocal from './setlocalstorage.js'
import GetLocal from './getlocalstorage.js';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
const Form =()=>{
  const [formInput,setFormInput] = useState({name:"",title:"",desc:"",
  date:new Date().toLocaleDateString(),
  time:new Date().toLocaleTimeString(),
upvote:0,id:""})
  const onchangeName=(eventname)=>{
    formInput.name=eventname.target.value ;
  };
  const onchangeTitle=(eventtitle)=>{
    formInput.title= eventtitle.target.value ;   
         };
  const onchangeDesc=(eventdesc)=>{
    formInput.desc=eventdesc.target.value ;
    formInput.time=new Date().toLocaleTimeString();
    formInput.date=new Date().toLocaleDateString();
  };
                     
  const submitbutton = async () =>  { 
    
      try{
    
        await  SetLocal('formData',formInput)
       
          alert('success');
      }
     catch(e){
      alert('oops , something went wrong')
     }
    }
   return(<>
     <div className="jumbotron">
     <h1>PLEASE ENTER THE FORM DETAILS</h1><br/>
     </div>
    <div className="form-group">
      
      <div>
      <label> ENTER YOUR NAME  </label><br/>
      <input className="input1" type="text" placeholder="ENTER YOUR NAME"  onChange={onchangeName}  /><br/><br/>
      </div>
      <div >
      <label> ENTER TITLE </label><br/>
      <input className="input2" type="text" size="50" placeholder="TITLE " onChange={onchangeTitle}  /><br/><br/>
      <label> ENTER DESCRIPTION </label><br/>
      <textarea rows="5" cols="100" placeholder="DESCRIPTION" onChange={onchangeDesc} /><br/>
      <input className="input1"  value={new Date().toLocaleDateString()} />
      <input className="input1"  value={new Date().toLocaleTimeString()} />
      <button onClick={submitbutton}className="btn btn-success"> SUBMIT </button>
      
      
    </div>
    </div>
    </> )
    
}

export default Form;





