const API_URL = "YOUR_GOOGLE_SCRIPT_URL";

async function submitApplication(data){

try{

const response = await fetch(API_URL,{
  method:"POST",
  body:JSON.stringify(data)
});

return await response.json();

}catch(error){

console.error(error);

}

}
