function validateSAID(idNumber){

if(idNumber.length !== 13){
  return false;
}

return /^\d+$/.test(idNumber);

}

function validatePhone(phone){

if(phone.length < 10){
  return false;
}

return true;

}

function validateIncome(income){

if(income <= 0){
  return false;
}

return true;

}
