export const checkValidData = (email , password)=>{
  const isEmailValid = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(email); 
  const isPasswordValidation = /(?=^.{6,}$)((?=.*\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[^A-Za-z0-9])(?=.*[a-z])|(?=.*[^A-Za-z0-9])(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9]))^.*/.test(password);
  if(!isEmailValid ) return "Email is not valid";
  if(!isPasswordValidation) return "Password is not valid";
   return null;

}