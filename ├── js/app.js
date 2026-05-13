document
.getElementById("loanForm")
?.addEventListener("submit", async function(e){

e.preventDefault();

const fullName =
document.getElementById("fullName").value;

const idNumber =
document.getElementById("idNumber").value;

const phone =
document.getElementById("phone").value;

const income =
Number(document.getElementById("income").value);

if(!validateSAID(idNumber)){

alert("Invalid South African ID Number");

return;

}

if(!validatePhone(phone)){

alert("Invalid Phone Number");

return;

}

if(!validateIncome(income)){

alert("Invalid Income");

return;

}

const affordability =
calculateAffordability(income);

const applicationData = {

fullName,
idNumber,
phone,
income,
affordability,
timestamp:new Date()

};

console.log(applicationData);

const result =
await submitApplication(applicationData);

if(result.success){

alert(
"Application Submitted Successfully"
);

}else{

alert(
"Submission Failed"
);

}

});
