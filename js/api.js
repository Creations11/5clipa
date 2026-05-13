const API_URL =
"https://script.google.com/macros/s/AKfycbwpiI5nTk0tNhjAFgORitlG0-Osvv4j48hfTTohbfQ48UGVDuGXO_muSfzceNgHOc3XZQ/exec";

async function submitApplication(data){

try{

const formData =
new FormData();

for(const key in data){

formData.append(
key,
data[key]
);

}

await fetch(API_URL,{

method:"POST",
mode:"no-cors",
body:formData

});

return {

success:true,
reference:"5C-" + Date.now()

};

}catch(error){

console.error(error);

return {
success:false
};

}

}
