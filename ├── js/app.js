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
document.getElementById("income").value;

if(!validateSAID(idNumber)){
  alert("Invalid ID Number");
  return;
}

if(!validatePhone(phone)){
  alert("Invalid Phone Number");
  return;
}

const affordability =
calculateAffordability(Number(income));

const applicationData = {
  fullName,
  idNumber,
  phone,
  income,
  affordability,
  timestamp:new Date()
};

console.log(applicationData);

alert(
  "Estimated Qualification: R" +
  affordability
);

});
