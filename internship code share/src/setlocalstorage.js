import GetLocal from './getlocalstorage.js'
async function SetLocal(key,Item){   
    Item.id=new Date().getTime()
   let array= GetLocal('formData')||[]
   try{
  
    array.push(Item)   
    localStorage.setItem(key,JSON.stringify(array)); 
    }
      
    catch(e){
        return false

    }
       return (true); 

}


export default SetLocal;