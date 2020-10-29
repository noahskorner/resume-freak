//declare sections
const contactSection = document.getElementById("contact-info");
const educationSection = document.getElementById("education");
const experienceSection = document.getElementById("experience");
const projectSection = document.getElementById("project");
const skillSection = document.getElementById("skill");
const hobbySection = document.getElementById("hobby");

// next buttons
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

//button functions
contactNextBtn.addEventListener("click", function (event) {
  event.preventDefault();
  contactSection.classList.add("d-none");
  educationSection.classList.remove("d-none");
});

educationBackBtn.addEventListener("click", function(event){
  event.preventDefault();
  educationSection.classList.add("d-none");
  contactSection.classList.remove("d-none");
});

educationNextBtn.addEventListener("click", function (event){
  event.preventDefault();
  educationSection.classList.add("d-none");
  experienceSection.classList.remove("d-none");
});

experienceNextBtn.addEventListener("click", function (event){
  event.preventDefault();
  experienceSection.classList.add("d-none");
  projectSection.classList.remove("d-none");
});

experienceBackBtn.addEventListener("click", function(event){
  event.preventDefault();
  experienceSection.classList.add("d-none");
  educationSection.classList.remove("d-none");
});

projectNextBtn.addEventListener("click", function(event){
  event.preventDefault();
  projectSection.classList.add("d-none");
  skillSection.classList.remove("d-none");
});

projectBackBtn.addEventListener("click", function(event){
  event.preventDefault();
  projectSection.classList.add("d-none");
  experienceSection.classList.remove("d-none");
});

skillNextBtn.addEventListener("click", function(event){
  event.preventDefault();
  skillSection.classList.add("d-none");
  hobbySection.classList.remove("d-none");
});

skillBackBtn.addEventListener("click", function(event){
  event.preventDefault();
  skillSection.classList.add("d-none");
  projectSection.classList.remove("d-none");
});

hobbyBackBtn.addEventListener("click", function(event){
  event.preventDefault();
  hobbySection.classList.add("d-none");
  skillSection.classList.remove("d-none");
});