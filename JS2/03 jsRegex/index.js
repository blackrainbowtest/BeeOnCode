const INPUTS = document.querySelectorAll("input");

const patterns = {
  telephone: /^\d{11}$/,
  email: "",
  password: "",
};

const feedbackMessage = {
  telephone: {
    valid: "Phone number is valid!",
    invalid: "Please provide a valid phone number (11 digits).",
  },
};

const validate = (field, regex) => {
  console.log(
    "%cindex.js:8 regex.test(field.value)",
    "color: #007acc;",
    regex.test(field.value)
  );
  const isValid = regex.test(field.value)
  if (isValid) {
    field.classList.remove("is-invalid");
    field.classList.add("is-valid");
  } else {
    field.classList.remove("is-valid");
    field.classList.add("is-invalid");
  }

  let feedbackDiv = field.parentElement.querySelector('.valid-feedback, .invalid-feedback')
  console.log('%cindex.js:31 feedbackDiv', 'color: #007acc;', feedbackDiv);
  if (feedbackDiv) feedbackDiv.remove()

	feedbackDiv = document.createElement('div')
	feedbackDiv.classList.add(isValid ? 'valid-feedback' : 'invalid-feedback')
	feedbackDiv.textContent = feedbackMessage[field.name][isValid ? "valid" : "invalid"]

	field.parentElement.appendChild(feedbackDiv)
};

INPUTS.forEach((input) => {
  input.addEventListener("keyup", (event) => {
    validate(event.target, patterns[event.target.attributes.name.value]);
    // console.log(event.target.attributes.name.value);
  });
});
