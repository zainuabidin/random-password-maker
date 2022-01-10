// // This function invoke when click me button password on webpage

function passwordCreator() {
  const object = {
    lowercase: "abcdefghijklmnopqrstuvwxyz",
    uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    numbers: "0123456789",
    symbols: "~`!@#$%^&*()_-+={[}]|:;'<,>.?/",
  };

  let lengthchoice = "";
  let characterchoice = "";

  lengthchoice = window.prompt(
    "please choose a password length of at least 8 characters and no more than 128 characters"
  );

  console.log(passwordChoice);
  // conditional statements with two  branches to validate the password is a number ,<8 and >128 and not blank
  if (lengthchoice > 7 && lengthchoice < 129) {
    window.alert(
      "☺️ Thanks for confirming the password length ✅ ✅ \n Please press OK to proceed "
    );
  } else if ((lengthchoice = isNaN || lengthchoice !== Number)) {
    window.alert(
      "    😔 Something does not seems right ❌ \n ☑ Please check the password length is correct \n ☑ you enter the valid number"
    );

    return;
  }

  let numerics = window.confirm(
    "would you like to add numbers in your password"
  );
  let symbols = window.confirm(
    "would you like to add symbols in  your password"
  );
  let lowerCase = window.confirm(
    "would you like to add lowercase characters in your password"
  );
  let upperCase = window.confirm(
    "would you like to add capitals  in your password"
  );

  if (!numerics && !symbols && !lowerCase && !upperCase) {
    window.alert("you must choose at least one character type");
    return;
  }

  if (numerics == true) {
    characterchoice = characterchoice + object.numbers;
  }

  if (symbols == true) {
    characterchoice = characterchoice + object.symbols;
  }

  if (lowerCase == true) {
    characterchoice = characterchoice + object.lowerCase;
  }

  if (upperCase == true) {
    characterchoice = characterchoice + object.uppercase;

    console.log(characterchoice);
  }
  let password = "";
  for (let i = 0; i < lengthchoice; i++) {
    password +=
      characterchoice[Math.floor(Math.random() * characterchoice.length)];
    console.log(password);

    return password;
  }
  console.log(password);

  document.getElementById("password").innerHTML = password;
}
