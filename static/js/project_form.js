// Buttons
const addProjectBtn = document.getElementById("add-project-btn");
const removeProjectBtn = document.getElementById("remove-project-btn");

// Forms
const projectForm0 = document.getElementById("project-form-0");
const projectLbls0 = document.getElementById("project-lbls-0");

// Inputs
const projectNameInput0 = document.getElementById("project-name-input-0");
const projectResponsibilitesInput0 = document.getElementById(
  "project-responsibilites-input-0"
);

// Labels
const projectNameLbl0 = document.getElementById("project-name-lbl-0");
const projectResponsibilitesLbl0 = document.getElementById(
  "project-responsibilites-lbl-0"
);

// Event Listeners
projectNameInput0.addEventListener("input", function () {
    projectNameLbl0.innerHTML = projectNameInput0.value;
  });
  projectResponsibilitesInput0.addEventListener("input", function () {
    projectResponsibilitesLbl0.innerHTML = projectResponsibilitesInput0.value;
  });
