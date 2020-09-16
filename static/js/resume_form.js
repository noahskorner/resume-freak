// CONTACT
const firstNameLbl = document.getElementById("first-name");
const firstNameInput = document.getElementById("id_first_name");
const lastNameLbl = document.getElementById("last-name");
const lastNameInput = document.getElementById("id_last_name");
const phoneNumberLbl = document.getElementById("phone-number");
const phoneNumberInput = document.getElementById("id_phone_number");
const emailLbl = document.getElementById("email");
const emailInput = document.getElementById("id_email");
// EDUCATION
const schoolLbl = document.getElementById("school");
const schoolInput = document.getElementById("id_school");
const majorLbl = document.getElementById("major");
const majorInput = document.getElementById("id_major");
const startDateLbl = document.getElementById("start-date");
const startDateInput = document.getElementById("id_start_date");
const endDateLbl = document.getElementById("end-date");
const endDateInput = document.getElementById("id_end_date");
const gpaLbl = document.getElementById("gpa");
const gpaInput = document.getElementById("id_gpa");
//

firstNameInput.addEventListener("input", function () {
  firstNameLbl.innerHTML = firstNameInput.value;
});

lastNameInput.addEventListener("input", function () {
  lastNameLbl.innerHTML = lastNameInput.value;
});

phoneNumberInput.addEventListener("input", function () {
  phoneNumberLbl.innerHTML = phoneNumberInput.value;
});

emailInput.addEventListener("input", function () {
  emailLbl.innerHTML = emailInput.value;
});

schoolInput.addEventListener("input", function () {
  schoolLbl.innerHTML = schoolInput.value;
});

majorInput.addEventListener("input", function () {
  majorLbl.innerHTML = majorInput.value;
});
startDateInput.addEventListener("input", function () {
  startDateLbl.innerHTML = startDateInput.value;
});

endDateInput.addEventListener("input", function () {
  endDateLbl.innerHTML = endDateInput.value;
});

gpaInput.addEventListener("input", function () {
  gpaLbl.innerHTML = gpaInput.value;
});

const contactSection = document.getElementById("contact-info");
const educationSection = document.getElementById("education");
const contactNextBtn = document.getElementById("contact-next-btn");
const educationNextBtn = document.getElementById("education-next-btn");

contactNextBtn.addEventListener("click", function () {
  contactSection.classList.add("d-none");
  educationSection.classList.remove("d-none");
});

educationNextBtn.addEventListener("click", function (event) {
  event.preventDefault();
});
