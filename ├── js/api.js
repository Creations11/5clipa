const API_URL =
"https://script.google.com/macros/s/AKfycbwpiI5nTk0tNhjAFgORitlG0-Osvv4j48hfTTohbfQ48UGVDuGXO_muSfzceNgHOc3XZQ/exec";

async function submitApplication(data){

try{

const response = await fetch(API_URL,{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(data)

});

const result =
await response.json();

return result;

}catch(error){

console.error(
"API Error:",
error
);

return {
success:false
};

}

}
