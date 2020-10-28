//declare sections
const contactSection = document.getElementById("contact-info");
const educationSection = document.getElementById("education");
const experienceSection = document.getElementById("experience");
const projectSection = document.getElementById("project");
const skillSection = document.getElementById("skill");
const hobbySection = document.getElementById("hobby");

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
//EXPERIENCE
const orgLbl = document.getElementById("organization");
const orgInput = document.getElementById("id_organization");
const startDate1Lbl = document.getElementById("start-date1");
const startDate1Input = document.getElementById("id_start_date1");
const endDate1Lbl = document.getElementById("end-date1");
const endDate1Input = document.getElementById("id_end_date1");
const responsibilitiesLbl = document.getElementById("responsibilities");
const responsibilitiesInput = document.getElementById("id_responsibilities");
//PROJECT
const nameLbl = document.getElementById("name");
const nameInput = document.getElementById("id_name");
const responsibilitiesLbl1 = document.getElementById("responsibilities1");
const responsibilitiesInput1 = document.getElementById("id_responsibilities1");
//SKILLS: name
const skillnameLbl = document.getElementById("skill_name");
const skillnameInput = document.getElementById("id_skill_name");
//HOBBY: name
const hobbynameLbl = document.getElementById("hobby_name");
const hobbynameInput = document.getElementById("id_hobby_name");

//declare buttons
const contactNextBtn = document.getElementById("contact-next-btn");
const educationNextBtn = document.getElementById("education-next-btn");
const experienceNextBtn = document.getElementById("experience-next-btn");
const projectNextBtn = document.getElementById("project-next-btn");
const skillNextBtn = document.getElementById("skill-next-btn");
const hobbyNextBtn = document.getElementById("hobby-next-btn");

//back buttons
const contactBackBtn = document.getElementById("contact-back-btn");
const educationBackBtn = document.getElementById("education-back-btn");
const experienceBackBtn = document.getElementById("experience-back-btn");
const projectBackBtn = document.getElementById("project-back-btn");
const skillBackBtn = document.getElementById("skill-back-btn");
const hobbyBackBtn = document.getElementById("hobby-back-btn");

//labels and input 
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

orgInput.addEventListener("input", function() {
  orgLbl.innerHTML = orgInput.value;
});

startDate1Input.addEventListener("input", function () {
  startDate1Lbl.innerHTML = startDate1Input.value;
});

endDate1Input.addEventListener("input", function () {
  endDate1Lbl.innerHTML = endDate1Input.value;
});

responsibilitiesInput.addEventListener("input", function() {
  responsibilitiesLbl.innerHTML = responsibilitiesInput.value;
});

nameInput.addEventListener("input", function(){
  nameLbl.innerHTML = nameInput.value;
});

responsibilitiesInput1.addEventListener("input", function(){
  responsibilitiesLbl1.innerHTML = responsibilitiesInput1.value;
});

skillnameInput.addEventListener("input", function(){
  skillnameLbl.innerHTML = skillnameInput.value;
});

hobbynameInput.addEventListener("input", function(){
  hobbynameLbl.innerHTML = hobbynameInput.value;
});

//button functions
contactNextBtn.addEventListener("click", function () {
  contactSection.classList.add("d-none");
  educationSection.classList.remove("d-none");
});

educationBackBtn.addEventListener("click", function(){
  educationSection.classList.add("d-none");
  contactSection.classList.remove("d-none");
});

educationNextBtn.addEventListener("click", function (){
  educationSection.classList.add("d-none");
  experienceSection.classList.remove("d-none");
});

experienceNextBtn.addEventListener("click", function (){
  experienceSection.classList.add("d-none");
  projectSection.classList.remove("d-none");
});

experienceBackBtn.addEventListener("click", function(){
  experienceSection.classList.add("d-none");
  educationSection.classList.remove("d-none");
});

projectNextBtn.addEventListener("click", function(){
  projectSection.classList.add("d-none");
  skillSection.classList.remove("d-none");
});

projectBackBtn.addEventListener("click", function(){
  projectSection.classList.add("d-none");
  experienceSection.classList.remove("d-none");
});

skillNextBtn.addEventListener("click", function(){
  skillSection.classList.add("d-none");
  hobbySection.classList.remove("d-none");
});

skillBackBtn.addEventListener("click", function(){
  skillSection.classList.add("d-none");
  projectSection.classList.remove("d-none");
});

hobbyBackBtn.addEventListener("click", function(){
  hobbySection.classList.add("d-none");
  skillSection.classList.remove("d-none");
});

hobbyNextBtn.addEventListener("click", function(event){
  event.preventDefault();
});




