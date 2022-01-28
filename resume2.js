// const name = document.getElementById.("name");
// const date = document.getElementById("date").innerHTML;
// const national = document.getElementById("national").innerHTML;
// const gender = document.getElementById("gender").innerHTML;
// const phoneNumber = document.getElementById("phoneNumber").innerHTML;
// const email = document.getElementById("email").innerHTML;
// const social = document.getElementById("social").innerHTML;
// const address = document.getElementById("address").innerHTML;
// const skillOne = document.getAnimations("skillOne").innerHTML;
// const skillTwo = document.getElementById("skillTwo").innerHTML;
// const skillThree = document.getElementById("skillThree").innerHTML;
// const skillfour = document.getElementById("skillfour").innerHTML;
// const college = document.getElementById("college").innerHTML;
// const highSchool = document.getElementById("highSchool").innerHTML;
// const midSchool = document.getElementById("midSchool").innerHTML;
// const project = document.getElementById("project").innerHTML;
// const workOne = document.getElementById("workOne").innerHTML;

// let inputs = localStorage.getItem('inputs')

let nameElem = document.getElementById("name");
let dateElem = document.getElementById("date");
let nationalElem = document.getElementById("national");
let genderElem = document.getElementById("gender");
let phoneElem = document.getElementById("phone");
let emailElem = document.getElementById("email");
let socialElem = document.getElementById("social");
let addressElem = document.getElementById("address");
let skillOneElem = document.getElementById("skillOne");
let skillTwoElem = document.getElementById("skillTwo");
let skillThreeElem = document.getElementById("skillThree");
let skillFourElem = document.getElementById("skillFour");
let collegeElem = document.getElementById("college");
let highSchoolElem = document.getElementById("highSchool");
let midSchoolElem = document.getElementById("midSchool");
let projectOneElem = document.getElementById("projectOne");
let projectTwoElem = document.getElementById("projectTwo");
let projectContentOneElem = document.getElementById("projectContentOne");
let projectContentTwoElem = document.getElementById("projectContentTwo");
let workOneElem = document.getElementById("workOne");

let inputs = localStorage.getItem("inputs");

if (inputs) {
  let inputObj = JSON.parse(inputs);
  console.log(`inputObject => ${inputObj.projectContentOn}`);
  if (inputObj.userName) {
    nameElem.innerHTML = inputObj.userName;
  }
  if (inputObj.date) {
    dateElem.innerHTML = inputObj.date;
  }
  if (inputObj.email) {
    emailElem.innerHTML = inputObj.email;
  }
  if (inputObj.address) {
    addressElem.innerHTML = inputObj.address;
  }
  if (inputObj.phone) {
    phoneElem.innerHTML = inputObj.phone;
  }
  if (inputObj.gender) {
    genderElem.innerHTML = inputObj.gender;
  }
  if (inputObj.nationality) {
    nationalElem.innerHTML = inputObj.nationality;
  }
  if (inputObj.Linkedin) {
    socialElem.innerHTML = inputObj.Linkedin;
  }
  if (inputObj.skillOne) {
    skillOneElem.innerHTML = inputObj.skillOne;
  }
  if (inputObj.skillTwo) {
    skillTwoElem.innerHTML = inputObj.skillTwo;
  }
  if (inputObj.skillThree) {
    skillThreeElem.innerHTML = inputObj.skillThree;
  }
  if (inputObj.skillFour) {
    skillFourElem.innerHTML = inputObj.skillFour;
  }
  if (inputObj.midSchool) {
    midSchoolElem.innerHTML = inputObj.midSchool;
  }
  if (inputObj.highSchool) {
    highSchoolElem.innerHTML = inputObj.highSchool;
  }
  if (inputObj.college) {
    collegeElem.innerHTML = inputObj.college;
  }
  if (inputObj.projectOne) {
    projectOneElem.innerHTML = inputObj.projectOne;
  }
  if (inputObj.projectTwo) {
    projectTwoElem.innerHTML = inputObj.projectTwo;
  }
  if (inputObj.projectContentOn) {
    // console.log("presenting", inputObj.projectContentOn);
    projectContentOneElem.innerHTML = inputObj.projectContentOn;
  }
  if (inputObj.projectContentTwo) {
    projectContentTwoElem.innerHTML = inputObj.projectContentTwo;
  }
  if (inputObj.workOne) {
    console.log(inputObj.workOne);
    workOneElem.innerHTML = inputObj.workOne;
  }

  //    .....similarly do for all fields
}
