// variablers been declared using assignment operators
// var numeric ="0123456789";
// var symbols="!@#$%^&*()_+~\\`|}{[]:;?><,./-=";
// var lowerCase="abcdefghijklmnopqrstuvwxyz";
// var upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var passGen='';

// // This function invoke when click me button password on webpage
function passwordCreator() {
  // var passGen=''
  // var numeric ="0123456789";
  // var symbols="!@#$%^&*()_+~\\`|}{[]:;?><,./-=";
  // var lowerCase="abcdefghijklmnopqrstuvwxyz";
  // var upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var passwordChoice = prompt(
    "please choose a password length of at least 8 characters and no more than 128 characters"
  );
  // conditional statements with two  branches to validate the password is a number ,<8 and >128 and not blank
  if (passwordChoice > 7 && passwordChoice < 129) {
    alert(
      "☺️ Thanks for confirming the password length ✅ ✅ \n Please press OK to proceed "
    );
  } else if ((passwordChoice = isNaN || passwordChoice !== Number)) {
    alert(
      "    😔 Something does not seems right ❌ \n ☑ Please check the password length is correct \n ☑ you enter the valid number"
    );
    console.log(passwordChoice);
    return;
  }

  // conditional statements for user to choose character type
  var passGen = "";

  var numeric = confirm(
    "Would you like to add lowerCase in your password\npress ok to add and cancel to ignore"
  );
  if (numeric == 1) {
    passGen = passGen + "0123456789";
  }

  var lowerCase = confirm("Would you like to add lowerCase in your password");
  if (lowerCase == 1) {
    passGen = passGen + "abcdefghijklmnopqrstuvwxyz";
  }
  var upperCase = confirm("Would you like to add upperCase in your password");
  if ((upperCase = 1)) {
    passGen = passGen + "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  var symbols = confirm("Would you like to add symbols in your password");
  if (symbols == 1) {
    passGen = passGen + "!@#$%^&*()_+~\\`|}{[]:;?><,./-=";
    console.log(passGen);
  }

  if (numeric == 0 && lowerCase == 0 && upperCase == 0 && symbols == 0) {
    alert("You must select at least one character type");
  }
}
