



// This function invoke when click me button password on webpage
function passwordCreator() {
  var passwordChoice =prompt
    ("please choose a password length of at least 8 characters and no more than 128 characters"
  );
// conditional statments with two  branchers to validate the password is a number ,<8 and >128 and not blank
  if (passwordChoice > 8 && passwordChoice < 128) {
    alert("☺️ Thanks for confirming the password lenght ✅ ✅ \n Please press OK to proceed ")
  } 
  else if ((passwordChoice = isNaN || passwordChoice !== Number)) {
    alert("    😔 Something does not seems right ❌ \n ☑ Please check the password lenght is correct \n ☑ you enter the valid number");
  } 
  
  //Defining variables for password choices 
  var numeric =("0123456789");
  var symbols=("!@#$%^&*()_+~\\`|}{[]:;?><,./-=");
  var lowerCase=("abcdefghijklmnopqrstuvwxyz");
  var upperCase=("ABCDEFGHIJKLMNOPQRSTUVWXYZ");

  







}









// //   GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page
