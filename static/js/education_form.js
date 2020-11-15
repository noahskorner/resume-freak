// Buttons
const addEducationBtn = document.getElementById('add-education-btn');
const removeEducationBtn = document.getElementById('remove-education-btn');

// Forms 
const educationForm0 = document.getElementById('education-form-0');
const educationLbls0 = document.getElementById('education-lbls-0');
// Inputs
const educationSchoolInput0 = document.getElementById('education-school-input-0');
const educationMajorInput0 = document.getElementById('education-major-input-0');
const educationStartDateInput0 = document.getElementById('education-start-date-input-0');
const educationEndDateInput0 = document.getElementById('education-end-date-input-0');

// Labels
const educationSchoolLbl0 = document.getElementById('education-school-lbl-0');
const educationMajorLbl0 = document.getElementById('education-major-lbl-0');
const educationStartDateLbl0 = document.getElementById('education-start-date-lbl-0');
const educationEndDateLbl0 = document.getElementById('education-end-date-lbl-0');

// Event Listeners
addEducationBtn.addEventListener("click", function (event) {
    event.preventDefault();
    //duplicate the education form
    numEducations++;
    let formClone = educationForm0.cloneNode(true);
    formClone.id = "education-form-" + numEducations;
    let formInputs = formClone.getElementsByTagName('*');
    //change ids
    formInputs[3].id = 'education-school-input-' + numEducations;
    formInputs[6].id = 'education-major-input-' + numEducations;
    formInputs[9].id = 'education-start-date-input-' + numEducations;
    formInputs[12].id = 'education-end-date-input-' + numEducations;
    // change names
    formInputs[3].name = 'education-school-' + numEducations;
    formInputs[6].name = 'education-major-' + numEducations;
    formInputs[9].name = 'education-start-date-' + numEducations;
    formInputs[12].name = 'education-end-date-' + numEducations;
    educationForm0.parentNode.insertBefore(formClone, educationForm0.lastSibling)
    //duplicate the education labels
    let labelsClone = educationLbls0.cloneNode(true);
    labelsClone.id = 'education-lbls-' + numEducations;
    let labelsInputs = labelsClone.getElementsByTagName('*');
    labelsInputs[1].id = 'education-school-lbl-' + numEducations;
    labelsInputs[3].id = 'education-major-lbl-' + numEducations;
    labelsInputs[5].id = 'education-start-date-lbl-' + numEducations;
    labelsInputs[6].id = 'education-end-date-lbl-' + numEducations;
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
    educationLbls0.parentNode.insertBefore(labelsClone, educationLbls0.lastSibling)
});
removeEducationBtn.addEventListener("click", function (event){
    event.preventDefault();
    if(numEducations === 0) { return; }
    removedForm = document.getElementById('education-form-' + numEducations);
    removedLabels = document.getElementById('education-lbls-' + numEducations);
    removedForm.remove();
    removedLabels.remove();
    numEducations--;
});

educationSchoolInput0.addEventListener("input", function () {
  educationSchoolLbl0.innerHTML = educationSchoolInput0.value;
});
educationMajorInput0.addEventListener("input", function () {
  educationMajorLbl0.innerHTML = educationMajorInput0.value;
});
educationStartDateInput0.addEventListener("input", function () {
  educationStartDateLbl0.innerHTML = educationStartDateInput0.value;
});
educationEndDateInput0.addEventListener("input", function () {
  educationEndDateLbl0.innerHTML = educationEndDateInput0.value;
});
