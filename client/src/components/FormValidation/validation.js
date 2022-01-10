// Validator for last and first name
export const nameValidation = (nameType, name, Id, setError) => {
  const nameRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*){0,39}$/;
  nameType &&
    document.getElementById(Id).addEventListener("keyup", function () {
      if (!document.getElementById(Id).value.trim()) {
        setError(`${name} is required.`);
      } else if (nameType.length >= 40) {
        setError(`${name} can only be 40 characters.`);
      } else if (!nameType.match(nameRegex)) {
        setError(`${name} is invalid.`);
      } else {
        this.classList.toggle("green", document.getElementById(Id));
        setError("");
      }
    });
};

export const emailValidation = (nameType, name, setError) => {
  const email = document.getElementById("Email Address");
  const emailRegex =
    /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

  email.addEventListener("keyup", function () {
    if (!email.value.trim()) {
      setError(`${name} is required.`);
    } else if (!nameType.match(emailRegex)) {
      setError("Enter a valid email.");
    } else {
      this.classList.toggle("green", email);
      setError("");
    }
  });
};

export const textAreaValidation = (nameType, name, setError) => {
  const description = document.getElementById("Project Description");

  description.addEventListener("keyup", function () {
    if (!description.value.trim()) {
      setError(`${name} is required.`);
    } else {
      this.classList.toggle("green", description);
      setError("");
    }
  });
};
