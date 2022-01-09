
  // variablers been declared using assignment operators
  var numeric ="0123456789";
  var symbols="!@#$%^&*()_+~\\`|}{[]:;?><,./-=";
  var lowerCase="abcdefghijklmnopqrstuvwxyz";
  var upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passGen='';


// // This function invoke when click me button password on webpage
function passwordCreator() {
  var passGen=''
  var passwordChoice =prompt
    ("please choose a password length of at least 8 characters and no more than 128 characters"
  );
// conditional statments with two  branchers to validate the password is a number ,<8 and >128 and not blank
  if (passwordChoice > 8 && passwordChoice < 128) {
    alert("☺️ Thanks for confirming the password length ✅ ✅ \n Please press OK to proceed ")
  } 
  else if ((passwordChoice = isNaN || passwordChoice !== Number)) {
    alert("    😔 Something does not seems right ❌ \n ☑ Please check the password lenght is correct \n ☑ you enter the valid number");
  
return;}

  // conditional statements for user to choose character type  
  var numeric = confirm("Would you like to add numerics in your password")
  if(numeric){
    passGen=passGen+numeric
    
   }

  var lowerCase = confirm("Would you like to add lowerCase in your password")
  if(lowerCase){
    passGen=passGen+lowerCase
    
   }
  var upperCase = confirm("Would you like to add upperCase in your password")
  if(upperCase){
    passGen=passGen+upperCase
    
   }
  var symbols = confirm("Would you like to add symbols in your password")
  if(symbols){
    passGen=passGen+symbols
    
   }
  
  if (numeric==false&& lowerCase==false && upperCase==false&&symbols== false) {
    
    alert("please select at least one character type");
    return;
  }


  }
  
  
// for (let i = 0; i < numeric.length; i++) {
//   text += numeric[i] + "<br>";
// }

// document.getElementById("demo").innerHTML = numeric;
// }




//using conditional statements to obtain user password choice










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
