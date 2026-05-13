const API_URL = "YOUR_GOOGLE_APPS_SCRIPT_URL";

async function submitApplication(data){

try{

const response = await fetch(API_URL,{

method:"POST",

headers:{
  "Content-Type":"application/json"
},

body:JSON.stringify(data)

});

const result = await response.json();

return result;

}catch(error){

console.error("API Error:", error);

return {
  success:false
};

}

}
