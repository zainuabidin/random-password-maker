// // This function invoke when click me button password on webpage

function passwordCreator() {
  var passGenerator = "";
  const object = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "~`!@#$%^&*()_-+={[}]|:;'<,>.?/",
  };

  var passwordChoice = window.prompt(
    "please choose a password length of at least 8 characters and no more than 128 characters"
  );
  // conditional statements with two  branches to validate the password is a number ,<8 and >128 and not blank
  if (passwordChoice > 7 && passwordChoice < 129) {
    window.alert(
      "☺️ Thanks for confirming the password length ✅ ✅ \n Please press OK to proceed "
    );
  } else if ((passwordChoice = isNaN || passwordChoice !== Number)) {
    window.alert(
      "    😔 Something does not seems right ❌ \n ☑ Please check the password length is correct \n ☑ you enter the valid number"
    );

    return;
  }

  var numerics = window.confirm(
    "would you like to add numbers in your password"
  );
  var symbols = window.confirm(
    "would you like to add symbols in  your password"
  );
  var lowerCase = window.confirm(
    "would you like to add lowercase characters in your password"
  );
  var upperCase = window.confirm(
    "would you like to add capitals  in your password"
  );

  if (!numerics && !symbols && !lowerCase && !upperCase) {
    window.alert("you must choose at least one character type");
    return;
  }

  if (numerics == true) {
    passGenerator = passGenerator + object.numbers;
  }

  if (symbols == true) {
    passGenerator = passGenerator + object.symbols;
  }

  if (lowerCase == true) {
    passGenerator = passGenerator + object.lowerCase;
  }

  if (upperCase == true) {
    passGenerator = passGenerator + object.uppercase;

    console.log(passGenerator);
  }
  var password = "";
  for (let i = 0; i < length; i++) {
    password += passGenerator[Math.floor(Math.random() * passGenerator.length)];
    console.log(password);

    return password;
  }
  console.log(password);

  document.getElementById("password").innerHTML = password;
}
