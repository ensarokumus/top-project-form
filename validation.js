function validate_password() {
  let pwd = document.getElementById("pwd").value;
  let pwd_check = document.getElementById("pwd-check").value;
  if (pwd != pwd_check && pwd != "") {
    document.getElementById("wrong_pass_alert").style.color = "#b92020";
    document.getElementById(
      "wrong_pass_alert"
    ).textContent = `*Passwords do not match.`;
    document.getElementById("pwd").style.border = "solid 2px #b92020";
    document.getElementById("pwd-check").style.border = "solid 2px #b92020";
  } else {
    document.getElementById("wrong_pass_alert").style.color = "#596d48";
    document.getElementById(
      "wrong_pass_alert"
    ).textContent = `Passwords matched.`;
    document.getElementById("pwd").style.border = "solid 2px #596d48";
    document.getElementById("pwd-check").style.border = "solid 2px #596d48";
    document.getElementById("create").disabled = false;
  }
}

let inputs = document.querySelectorAll("input");
let buttonSend = document.getElementById("button-send");

let inputValidator = {
  "first-name": false,
  "last-name": false,
  email: false,
  "mobile-number": false,
  pwd: false,
  "pwd-check": false,
};

inputs.forEach((input) => {
  input.addEventListener("input", () => {
    let name = event.target.getAttribute("name");
    if (event.target.value.length > 0) {
      inputValidator[name] = true;
    } else {
      inputValidator[name] = false;
    }

    let allTrue = Object.keys(inputValidator).every((item) => {
      return inputValidator[item] === true;
    });

    if (allTrue) {
      buttonSend.disabled = false;
    } else {
      buttonSend.disabled = true;
    }
  });
});
