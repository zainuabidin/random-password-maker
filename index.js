var upperCase = [];
var items =['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var symbol=[]
var numeric=['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];


    
function passwordCreator() {
    var passwordChoice = prompt("please choose a password length of at least 8 characters and no more than 128 characters")
    
    if (passwordChoice > 8 && passwordChoice<128) {
        alert("working")

   }else{
    alert("please enter the password between 8 and 128 characters.")

   }
    

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
