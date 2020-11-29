// Buttons
const addHobbyBtn = document.getElementById("add-hobby-btn");
const removeHobbyBtn = document.getElementById("remove-hobby-btn");

// Forms
console.log('hobby_form')
const hobbyForm0 = document.getElementById("hobby-form-0");
const hobbyLbls0 = document.getElementById("hobby-lbls-0");
// Inputs
const hobbyNameInput0 = document.getElementById("hobby-name-input-0");

// Labels
const hobbyNameLbl0 = document.getElementById("hobby-name-lbl-0");

// Event Listeners
addHobbyBtn.addEventListener("click", function (event) {
  event.preventDefault();
  //duplicate the experience form
  numHobbies++;
  let formClone = hobbyForm0.cloneNode(true);
  formClone.id = "hobby-form-" + numHobbies;
  let formInputs = formClone.getElementsByTagName("*");
  //change ids
  formInputs[2].id = "hobby-name-input-" + numHobbies;
  // change names
  formInputs[2].name = "hobby-name-" + numHobbies;
  hobbyForm0.parentNode.insertBefore(formClone, hobbyForm0.lastSibling);
  //duplicate the hobby labels
  let labelsClone = hobbyLbls0.cloneNode(true);
  labelsClone.id = "hobby-lbls-" + numHobbies;
  let labelsInputs = labelsClone.getElementsByTagName("*");
  labelsInputs[1].id = "hobby-name-lbl-" + numHobbies;
  //add event listeners to all those
  formInputs[2].addEventListener("input", function () {
    labelsInputs[1].innerHTML = formInputs[2].value;
  });
  hobbyLbls0.parentNode.insertBefore(labelsClone, hobbyLbls0.lastSibling);
});

removeHobbyBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (numHobbies === 0) {
    return;
  }
  removedForm = document.getElementById("hobby-form-" + numHobbies);
  removedLabels = document.getElementById("hobby-lbls-" + numHobbies);
  removedForm.remove();
  removedLabels.remove();
  numHobbies--;
});

hobbyNameInput0.addEventListener("input", function () {
  hobbyNameLbl0.innerHTML = hobbyNameInput0.value;
});
