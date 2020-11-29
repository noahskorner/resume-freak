// Buttons
const addSkillBtn = document.getElementById("add-skill-btn");
const removeSkillBtn = document.getElementById("remove-skill-btn");

// Forms
const skillForm0 = document.getElementById("skill-form-0");
const skillLbls0 = document.getElementById("skill-lbls-0");
// Inputs
const skillNameInput0 = document.getElementById("skill-name-input-0");

// Labels
const skillNameLbl0 = document.getElementById("skill-name-lbl-0");

// Event Listeners
addSkillBtn.addEventListener("click", function (event) {
  event.preventDefault();
  //duplicate the experience form
  numSkills++;
  let formClone = skillForm0.cloneNode(true);
  formClone.id = "skill-form-" + numSkills;
  let formInputs = formClone.getElementsByTagName("*");
  //change ids
  formInputs[2].id = "skill-name-input-" + numSkills;
  // change names
  formInputs[2].name = "skill-name-" + numSkills;
  skillForm0.parentNode.insertBefore(formClone, skillForm0.lastSibling);
  //duplicate the skill labels
  let labelsClone = skillLbls0.cloneNode(true);
  labelsClone.id = "skill-lbls-" + numSkills;
  let labelsInputs = labelsClone.getElementsByTagName("*");
  labelsInputs[1].id = "skill-name-lbl-" + numSkills;
  //add event listeners to all those
  formInputs[2].addEventListener("input", function () {
    labelsInputs[1].innerHTML = formInputs[2].value;
  });
  skillLbls0.parentNode.insertBefore(labelsClone, skillLbls0.lastSibling);
});

removeSkillBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (numSkills === 0) {
    return;
  }
  removedForm = document.getElementById("skill-form-" + numSkills);
  removedLabels = document.getElementById("skill-lbls-" + numSkills);
  removedForm.remove();
  removedLabels.remove();
  numSkills--;
});

skillNameInput0.addEventListener("input", function () {
  skillNameLbl0.innerHTML = skillNameInput0.value;
});
