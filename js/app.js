const form =
document.getElementById("loanForm");

const submitButton =
document.querySelector(".full-btn");

const resultBox =
document.getElementById("resultBox");

const resultText =
document.getElementById("resultText");

form?.addEventListener("submit", async function(e){

e.preventDefault();

/* LOADING STATE */

submitButton.disabled = true;

submitButton.innerHTML =
"Submitting Application...";

/* FORM VALUES */

const fullName =
document.getElementById("fullName").value;

const idNumber =
document.getElementById("idNumber").value;

const phone =
document.getElementById("phone").value;

const income =
Number(
document.getElementById("income").value
);

const loanAmount =
Number(
document.getElementById("loanAmount").value
);

const employment =
document.getElementById("employment").value;

/* VALIDATION */

if(!validateSAID(idNumber)){

showError(
"Invalid South African ID Number"
);

resetButton();

return;

}

if(!validatePhone(phone)){

showError(
"Invalid Phone Number"
);

resetButton();

return;

}

if(!validateIncome(income)){

showError(
"Invalid Income Amount"
);

resetButton();

return;

}

/* AFFORDABILITY */

const affordability =
calculateAffordability(income);

/* APPLICATION OBJECT */

const applicationData = {

fullName,
idNumber,
phone,
income,
loanAmount,
employment,
affordability,
timestamp:new Date()

};

console.log(applicationData);

/* API SUBMISSION */

const result =
await submitApplication(applicationData);

/* SUCCESS */

if(result.success){

resultBox.style.display = "block";

resultText.innerHTML = `

<div class="success-card">

<h2>
Application Submitted Successfully
</h2>

<p>
Reference Number:
<strong>${result.reference}</strong>
</p>

<p>
Estimated Qualification:
<strong>R${affordability}</strong>
</p>

<p>
Our team will contact you shortly.
</p>

</div>

`;

form.reset();

}else{

showError(
"Submission failed. Please try again."
);

}

/* RESET BUTTON */

resetButton();

});

/* RESET BUTTON FUNCTION */

function resetButton(){

submitButton.disabled = false;

submitButton.innerHTML =
"Submit Application";

}

/* ERROR FUNCTION */

function showError(message){

resultBox.style.display = "block";

resultText.innerHTML = `

<div class="error-card">

<h3>
Submission Error
</h3>

<p>${message}</p>

</div>

`;

}
