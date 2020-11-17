// Buttons
const addExperienceBtn = document.getElementById("add-experience-btn");
const removeExperienceBtn = document.getElementById("remove-experience-btn");

// Forms
const experienceForm0 = document.getElementById("experience-form-0");
const experienceLbls0 = document.getElementById("experience-lbls-0");
// Inputs
const experienceOrgInput0 = document.getElementById("experience-org-input-0");
const experienceStartDateInput0 = document.getElementById(
  "experience-start-date-input-0"
);
const experienceEndDateInput0 = document.getElementById(
  "experience-end-date-input-0"
);

// Labels
const experienceOrgLbl0 = document.getElementById("experience-org-lbl-0");
const experienceStartDateLbl0 = document.getElementById(
  "experience-start-date-lbl-0"
);
const experienceEndDateLbl0 = document.getElementById(
  "experience-end-date-lbl-0"
);

// Event Listeners
addExperienceBtn.addEventListener("click", function (event) {
  event.preventDefault();
  //duplicate the experience form
  numExperiences++;
  let formClone = experienceForm0.cloneNode(true);
  formClone.id = "experience-form-" + numExperiences;
  let formInputs = formClone.getElementsByTagName("*");
  //change ids
  formInputs[3].id = "experience-org-input-" + numExperiences;
  formInputs[6].id = "experience-start-date-input-" + numExperiences;
  formInputs[9].id = "experience-end-date-input-" + numExperiences;
  // change names
  formInputs[3].name = "experience-org-" + numExperiences;
  formInputs[6].name = "experience-start-date-" + numExperiences;
  formInputs[9].name = "experience-end-date-" + numExperiences;
  experienceForm0.parentNode.insertBefore(
    formClone,
    experienceForm0.lastSibling
  );
  //duplicate the expereince labels
  let labelsClone = experienceLbls0.cloneNode(true);
  labelsClone.id = "experience-lbls-" + numExperiences;
  let labelsInputs = labelsClone.getElementsByTagName("*");
  labelsInputs[1].id = "experience-org-lbl-" + numExperiences;
  labelsInputs[3].id = "experience-start-date-lbl-" + numExperiences;
  labelsInputs[4].id = "experience-end-date-lbl-" + numExperiences;
  formInputs[3].addEventListener("input", function () {
    labelsInputs[1].innerHTML = formInputs[3].value;
  });
  formInputs[6].addEventListener("input", function () {
    labelsInputs[3].innerHTML = formInputs[6].value;
  });
  formInputs[9].addEventListener("input", function () {
    labelsInputs[4].innerHTML = formInputs[9].value;
  });
  experienceLbls0.parentNode.insertBefore(labelsClone, experienceLbls0.lastSibling)
});

removeExperienceBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if(numExperiences === 0) { return; }
  removedForm = document.getElementById('experience-form-' + numExperiences);
  removedLabels = document.getElementById('experience-lbls-' + numExperiences);
  removedForm.remove();
  removedLabels.remove();
  numExperiences--;
});

experienceOrgInput0.addEventListener("input", function () {
  experienceOrgLbl0.innerHTML = experienceOrgInput0.value;
});
experienceStartDateInput0.addEventListener("input", function () {
  experienceStartDateLbl0.innerHTML = experienceStartDateInput0.value;
});
experienceEndDateInput0.addEventListener("input", function () {
  experienceEndDateLbl0.innerHTML = experienceEndDateInput0.value;
});
