
 function SetLocalVote(key,Item){   
   
    localStorage.setItem(key,JSON.stringify(Item)); 
   
       return (true); 

}


export default SetLocalVote;