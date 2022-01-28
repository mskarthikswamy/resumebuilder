const form = document.getElementById("form");
const username = document.getElementById("username");
const address = document.getElementById("address");
const date = document.getElementById("date");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const nationality = document.getElementById("national");
const Linkedin = document.getElementById("Linkedin");
const gender = document.getElementById("gender");
const skillOne = document.getElementById("skillOne");
const skillTwo = document.getElementById("skillTwo");
const skillThree = document.getElementById("skillThree");
const skillFour = document.getElementById("skillFour");
const college = document.getElementById("college");
const highSchool = document.getElementById("highSchool");
const midSchool = document.getElementById("midSchool");
const projectOne = document.getElementById("projectOne");
const projectTwo = document.getElementById("projectTwo");
const projectContentOne = document.getElementById("projectContentOne");
const projectContentTwo = document.getElementById("projectContentTwo");
const workOne = document.getElementById("workOne");

// var usernameValue = "";
// var addressValue = "";
// var dateValue = "";
// var emailValue = "";
// var phoneValue = "";
// var nationalityValue = "";
// var LinkedinValue = "";
// var genderValue = "";
// var skillOneValue = "";
// var skillTwoValue = "";
// var skillThreeValue = "";
// var skillFourValue = "";
// var collegeValue = "";
// var highSchoolValue = "";
// var midSchoolValue = "";
// var projectOneValue = "";
// var projectTwoValue = "";
// var projectContentOneValue = "";
// var projectContentTwoValue = "";
// var workOneValue = "";

form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("error check");
  checkError();
});

// const inputs = [
//   "form",
//   "username",
//   "email",
//   "phone",
//   "nationality",
//   "Linkedin",
//   "gender",
// ];
// const validate = () => {
//   return inputs.every((x) => document.getElementById(x).value.trim() != "");
//   if (validate == false);
console.log(" store test");

function checkInputs() {
  // trim to remove the whitespaces
  usernameValue = username.value.trim();
  emailValue = email.value.trim();
  addressValue = address.value.trim();
  dateValue = date.value.trim();
  phoneValue = phone.value.trim();
  nationalityValue = national.value.trim();
  LinkedinValue = Linkedin.value.trim();
  genderValue = gender.value.trim();
  skillOneValue = skillOne.value.trim();
  skillTwoValue = skillTwo.value.trim();
  skillThreeValue = skillThree.value.trim();
  skillFourValue = skillFour.value.trim();
  collegeValue = college.value.trim();
  highShcoolValue = highSchool.value.trim();
  midSchoolValue = midSchool.value.trim();
  projectOneValue = projectOne.value.trim();
  projectTwoValue = projectTwo.value.trim();
  projectContentOneValue = projectContentOne.value.trim();
  projectContentTwoValue = projectContentTwo.value.trim();
  workOneValue = workOne.value.trim();

  // console.log(
  //   "data =>",
  //   usernameValue,
  //   emailValue,
  //   addressValue,
  //   dateValue,
  //   phoneValue,
  //   nationalityValue,
  //   LinkedinValue,
  //   genderValue,
  //   skillOneValue,
  //   skillTwoValue,
  //   skillThreeValue,
  //   skillFourValue,
  //   collegeValue,
  //   highShcoolValue,
  //   midSchoolValue,
  //   projectOneValue,
  //   projectTwoValue
  // );
  let noError = true;

  if (usernameValue === "") {
    setErrorFor(username, "Username cannot be blank");
    noError = false;
  } else {
    setSuccessFor(username);
  }

  if (emailValue === "") {
    setErrorFor(email, "Email cannot be blank");
    noError = false;
  } else {
    setSuccessFor(email);
  }

  if (addressValue === "") {
    setErrorFor(address, "Address cannot be blank");
    noError = false;
  } else {
    setSuccessFor(address);
  }

  if (dateValue === "") {
    setErrorFor(date, "date cannot be blank");
    noError = false;
  } else {
    setSuccessFor(date);
  }

  if (phoneValue === "") {
    setErrorFor(phone, "Phone cannot be blank");
    noError = false;
  } else {
    setSuccessFor(phone);
  }

  if (genderValue === "") {
    setErrorFor(gender, "Gender cannot be blank");
    noError = false;
  } else {
    setSuccessFor(gender);
  }

  if (nationalityValue === "") {
    setErrorFor(national, "Nationality cannot be blank");
    noError = false;
  } else {
    setSuccessFor(national);
  }
  if (LinkedinValue === "") {
    setErrorFor(Linkedin, "linkedin cannot be blank");
    noError = false;
  } else {
    setSuccessFor(Linkedin);
  }
  if (skillOneValue === "") {
    setErrorFor(skillOne, "skill cannot be blank");
    noError = false;
  } else {
    setSuccessFor(skillOne);
  }
  if (skillTwoValue === "") {
    setErrorFor(skillTwo, "skill cannot be blank");
    noError = false;
  } else {
    setSuccessFor(skillTwo);
  }
  if (skillThreeValue === "") {
    setErrorFor(skillThree, "skill cannot be blank");
    noError = false;
  } else {
    setSuccessFor(skillThree);
  }
  if (skillFourValue === "") {
    setErrorFor(skillFour, "skill cannot be blank");
    noError = false;
  } else {
    setSuccessFor(skillFour);
  }

  if (collegeValue === "") {
    setErrorFor(college, "Education cannot be blank");
    noError = false;
  } else {
    setSuccessFor(college);
  }
  if (highShcoolValue === "") {
    setErrorFor(highSchool, "Education cannot be blank");
    noError = false;
  } else {
    setSuccessFor(highSchool);
  }

  if (midSchoolValue === "") {
    setErrorFor(midSchool, "Education cannot be blank");
    noError = false;
  } else {
    setSuccessFor(midSchool);
  }

  if (projectOneValue === "") {
    setErrorFor(projectOne, "Project cannot be blank");
    noError = false;
  } else {
    setSuccessFor(projectOne);
  }

  if (projectContentOneValue === "") {
    setErrorFor(projectContentOne, "Project cannot be blank");
    noError = false;
  } else {
    setSuccessFor(projectOne);
  }

  if (projectTwoValue === "") {
    setErrorFor(projectTwo, "Project cannot be blank");
    noError = false;
  } else {
    setSuccessFor(projectTwo);
  }

  if (projectContentTwoValue === "") {
    setErrorFor(projectContentTwo, "Project cannot be blank");
    noError = false;
  } else {
    setSuccessFor(projectContentTwo);
  }
  if (workOneValue === "") {
    setErrorFor(workOne, "work cannot be blank");
    noError = false;
  } else {
    setSuccessFor(workOne);
  }

  return noError;
}
//////////////

// const inputs = {
//   username: "usernameValue",
//   email: "emailValue",
//   phone: "phoneValue",
//   gender: "genderValue",
//   nationality: "nationalValue",
//   Linkedin: "LinkedinValue",
// };

function submitForm() {
  const inputs = {
    userName: usernameValue,
    date: dateValue,
    email: emailValue,
    address: addressValue,
    phone: phoneValue,
    gender: genderValue,
    nationality: nationalityValue,
    Linkedin: LinkedinValue,
    skillOne: skillOneValue,
    skillTwo: skillTwoValue,
    skillThree: skillThreeValue,
    skillFour: skillFourValue,
    college: collegeValue,
    highSchool: highShcoolValue,
    midSchool: midSchoolValue,
    projectOne: projectOneValue,
    projectTwo: projectTwoValue,
    projectContentOn: projectContentOneValue,
    projectContentTwo: projectContentTwoValue,
    workOne: workOneValue,
  };
  localStorage.setItem("inputs", JSON.stringify(inputs));
}
//////////////

// function submitForm() {
//   localStorage.setItem("username", usernameValue);
//   localStorage.setItem("email", emailValue);
//   localStorage.setItem("phone", phoneValue);
//   localStorage.setItem("gender", genderValue);
//   localStorage.setItem("natioanlity", nationalityValue);
//   localStorage.setItem("Linkedin", LinkedinValue);
// }

function checkError() {
  if (checkInputs()) {
    submitForm();
    console.log("submitted");
  } else {
    alert("NOT VALID - Please enter all the value");
  }
  // console.log("value =>", checkInputs());
}
// checkInputs() ? submitForm() : alert("Form Invalid");

function setErrorFor(input, message) {
  console.log(`input => ${input}, ${message}`);
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");
  formControl.className = "form-control error";
  // small.innerText = message;
}

function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}

// function isEmail(email) {
//   return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//     email
//   );
// }

// // SOCIAL PANEL JS
// const floating_btn = document.querySelector(".floating-btn");
// const close_btn = document.querySelector(".close-btn");
// const social_panel_container = document.querySelector(
//   ".social-panel-container"
// );

// floating_btn.addEventListener("click", () => {
//   social_panel_container.classList.toggle("visible");
// });

// close_btn.addEventListener("click", () => {
//   social_panel_container.classList.remove("visible");
// });
