import React, { useState, useEffect } from 'react';
import './index.css'
import GetLocal from './getlocalstorage.js';
import SetLocalVote from './setlocalstoragevotes'
import "../node_modules/bootstrap/dist/css/bootstrap.css"
const Forum =()=>{ 
  const [data,setdata]=useState([])
  const [count,setcount]=useState(0)
  const getforum= async ()=>{
    try{
      const data1=await GetLocal('formData')
      setdata(data1)
      
    }
    catch(err){
      alert('error , something went wrong')      
    }
  }
  useEffect(()=>{
    getforum();
  },[])
  
   const upvote=(event)=>{
   const id=event.target.attributes.getNamedItem("data-id").value;
   console.log(id,data)

    const selectedItem = data.filter(function(item) {
  return (item.id.toString()=== id.toString() );
   })
   console.log(selectedItem)
   const selectedObj=selectedItem[0];
   console.log(selectedObj)
   selectedObj.upvote=selectedObj.upvote + 1;
    SetLocalVote('formData',data) 
    setcount(count+1)
  }
 
   data.sort(function(a, b) {
    return b.upvote - a.upvote;
  });
   
   return (
    <div>
      <div className="jumbotron jumbotron-fluid">
      <h1>WELCOME TO FORUM</h1> 
      <p>here you will see all the content available on our website , do upvote the item you like  </p>
      </div>
     <table className="table table-sm table-hover table-bordered table-dark">
          <tr>
            <th>NAME</th>
            <th>TITLE</th>
            <th>DESCRIPTION</th>
            <th>DATE</th>
            <th>TIME</th>
            <th>UPVOTE</th>
            <br/>
          </tr>
           
        {  data.map((item)=>{
            return(
              <tr >
                <td >
                  {item.name}<br/><br/><br/><br/>
                </td>
                <td>
                  {item.title}<br/><br/><br/><br/>
                  </td>
                  <td className="tabledesc">
              {item.desc}<br/><br/><br/><br/>
              </td>
              <td >
              {item.date}<br/><br/><br/><br/>
              </td>
              <td>
              {item.time}<br/><br/><br/><br/>
              </td>
             
              <td >
              <button data-id={item.id} onClick={upvote} className="btn btn-outline-danger">upvote</button>
              <h2>{item.upvote}</h2><br/><br/><br/><br/>
              </td>
              </tr>
               )
          })        
        }
     </table>
   
     </div> 
  );
};

export default Forum;

