// Buttons
const addExperienceBtn = document.getElementById('add-experience-btn');
const removeExperienceBtn = document.getElementById('remove-experience-btn');

// Forms 
const experienceForm0 = document.getElementById('experience-form-0');
const experienceLbls0 = document.getElementById('experience-lbls-0');

// Inputs
const experienceOrganizationInput0 = document.getElementById('experience-organization-input-0');
const experienceResponsibilitesInput0 = document.getElementById('experience-responsibilites-input-0');
const experienceStartDateInput0 = document.getElementById('experience-start-date-input-0');
const experienceEndDateInput0 = document.getElementById('experience-end-date-input-0');

// Labels
const experienceOrganizationLbl0 = document.getElementById('experience-organization-lbl-0');
const experienceResponsibilitesLbl0 = document.getElementById('experience-responsibilites-lbl-0');
const experienceStartDateLbl0 = document.getElementById('experience-start-date-lbl-0');
const experienceEndDateLbl0 = document.getElementById('experience-end-date-lbl-0');


addExperienceBtn.addEventListener("click", function (event) {
    event.preventDefault();
    //duplicate the experience form
    let formClone = experienceForm0.cloneNode(true);
    formClone.id = "experience-form-" + ++numExperience;
    let formInputs = formClone.getElementsByTagName('*');
    formInputs[3].id = 'experience-organization-input-' + numExperience;
    formInputs[6].id = 'experience-responsibilites-input-' + numExperience;
    formInputs[9].id = 'experience-start-date-input-' + numExperience;
    formInputs[12].id = 'experience-end-date-input-' + numExperience;
    formInputs[3].name = 'experience-organization-' + numExperience;
    formInputs[6].name = 'experience-responsibilites-' + numExperience;
    formInputs[9].name = 'experience-start-date-' + numExperience;
    formInputs[12].name = 'experience-end-date-' + numExperience;
    experienceForm0.parentNode.insertBefore(formClone, experienceForm0.lastSibling)
    //duplicate the experience labels
    let labelsClone = experienceLbls0.cloneNode(true);
    labelsClone.id = 'experience-lbls-' + numExperience;
    let labelsInputs = labelsClone.getElementsByTagName('*');
    console.log(labelsInputs);
    labelsInputs[1].id = 'experience-organization-lbl-' + numExperience;
    labelsInputs[3].id = 'experience-responsibilites-lbl-' + numExperience;
    labelsInputs[5].id = 'experience-start-date-lbl-' + numExperience;
    labelsInputs[6].id = 'experience-end-date-lbl-' + numExperience;
    //add event listeners to all those
    formInputs[3].addEventListener("input", function () {
        labelsInputs[1].innerHTML = formInputs[3].value;
    });
    formInputs[6].addEventListener("input", function () {
        labelsInputs[3].innerHTML = formInputs[6].value;
    });
    formInputs[9].addEventListener("input", function () {
        labelsInputs[5].innerHTML = formInputs[9].value;
    });
    formInputs[12].addEventListener("input", function () {
        labelsInputs[6].innerHTML = formInputs[12].value;
    });
    experienceLbls0.parentNode.insertBefore(labelsClone, experienceLbls0.lastSibling)
  });

removeExperienceBtn.addEventListener("click", function (event){
    event.preventDefault();
    if(numExperience === 0) { return; }
    numExperience--;
    removedForm = document.getElementById('experience-form-' + numExperience);
    removedLabels = document.getElementById('experience-lbls-' + numExperience);
    removedForm.remove();
    removedLabels.remove();
});

// Event Listeners
experienceOrganizationInput0.addEventListener("input", function () {
  experienceOrganizationLbl0.innerHTML = experienceOrganizationInput0.value;
});

experienceStartDateInput0.addEventListener("input", function () {
  experienceStartDateLbl0.innerHTML = experienceStartDateInput0.value;
});
experienceEndDateInput0.addEventListener("input", function () {
  experienceEndDateLbl0.innerHTML = experienceEndDateInput0.value;
});
experienceResponsibilitesInput0.addEventListener("input", function () {
  experienceResponsibilitesLbl0.innerHTML = experienceResponsibilitesInput0.value;
});
