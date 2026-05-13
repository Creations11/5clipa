function validateSAID(idNumber){

if(idNumber.length !== 13){
  return false;
}

return /^\d+$/.test(idNumber);

}

function validatePhone(phone){

return phone.length >= 10;

}
