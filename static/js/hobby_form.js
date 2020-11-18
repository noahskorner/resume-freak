// Buttons
const addHobbyBtn = document.getElementById("add-hobby-btn");
const removeHobbyBtn = document.getElementById("remove-hobby-btn");

// Forms
const hobbyForm0 = document.getElementById("hobby-form-0");
const hobbyLbls0 = document.getElementById("hobby-lbls-0");

// Inputs
const hobbyNameInput0 = document.getElementById("hobby-name-input-0");

// Labels
const hobbyNameLbl0 = document.getElementById("hobby-name-lbl-0");

// Event Listeners
hobbyNameInput0.addEventListener("input", function () {
    hobbyNameLbl0.innerHTML = hobbyNameInput0.value;
  });
