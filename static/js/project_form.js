// Buttons
const addProjectBtn = document.getElementById("add-project-btn");
const removeProjectBtn = document.getElementById("remove-project-btn");

// Forms
const projectForm0 = document.getElementById("project-form-0");
const projectLbls0 = document.getElementById("project-lbls-0");
// Inputs
const projectNameInput0 = document.getElementById("project-name-input-0");
const projectResponsibilitiesInput0 = document.getElementById(
  "project-responsibilities-input-0"
);

// Labels
const projectNameLbl0 = document.getElementById("project-name-lbl-0");
const projectResponsibilitiesLbl0 = document.getElementById(
  "project-responsibilities-lbl-0"
);

// Event Listeners
addProjectBtn.addEventListener("click", function (event) {
  event.preventDefault();
  //duplicate the experience form
  numProjects++;
  let formClone = projectForm0.cloneNode(true);
  formClone.id = "project-form-" + numProjects;
  let formInputs = formClone.getElementsByTagName("*");
  console.log(formInputs);
  //change ids
  formInputs[2].id = "project-name-input-" + numProjects;
  formInputs[5].id = "project-responsibilities-input-" + numProjects;
  // change names
  formInputs[2].name = "project-name-" + numProjects;
  formInputs[5].name = "project-responsibilities-" + numProjects;
  projectForm0.parentNode.insertBefore(formClone, projectForm0.lastSibling);
  //duplicate the project labels
  let labelsClone = projectLbls0.cloneNode(true);
  labelsClone.id = "project-lbls-" + numProjects;
  let labelsInputs = labelsClone.getElementsByTagName("*");
  labelsInputs[1].id = "project-name-lbl-" + numProjects;
  labelsInputs[3].id = "project-responsibilities-lbl-" + numProjects;
  //add event listeners to all those
  formInputs[2].addEventListener("input", function () {
    labelsInputs[1].innerHTML = formInputs[2].value;
  });
  formInputs[5].addEventListener("input", function () {
    labelsInputs[3].innerHTML = formInputs[5].value;
  });
  projectLbls0.parentNode.insertBefore(
    labelsClone,
    projectLbls0.lastSibling
  );
});

removeProjectBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (numProjects === 0) {
    return;
  }
  removedForm = document.getElementById("project-form-" + numProjects);
  removedLabels = document.getElementById("project-lbls-" + numProjects);
  removedForm.remove();
  removedLabels.remove();
  numProjects--;
});

projectNameInput0.addEventListener("input", function () {
  projectNameLbl0.innerHTML = projectNameInput0.value;
});
projectResponsibilitiesInput0.addEventListener("input", function () {
  projectResponsibilitiesLbl0.innerHTML = projectResponsibilitiesInput0.value;
});
