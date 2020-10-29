// Inputs
const contactFirstNameInput = document.getElementById('contact-first-name-input');
const contactLastNameInput = document.getElementById('contact-last-name-input');
const contactPhoneNumberInput = document.getElementById('contact-phone-number-input');
const contactEmailInput = document.getElementById('contact-email-input');

// Labels
const contactFirstNameLbl = document.getElementById('contact-first-name-lbl');
const contactLastNameLbl = document.getElementById('contact-last-name-lbl');
contactPhoneNumberLbl = document.getElementById('contact-phone-number-lbl');
contactEmailLbl = document.getElementById('contact-email-lbl');

// Event Listeners
contactFirstNameInput.addEventListener("input", function () {
  contactFirstNameLbl.innerHTML = contactFirstNameInput.value;
});
contactLastNameInput.addEventListener("input", function () {
  contactLastNameLbl.innerHTML = contactLastNameInput.value;
});
contactPhoneNumberInput.addEventListener("input", function () {
  contactPhoneNumberLbl.innerHTML = contactPhoneNumberInput.value;
});
contactEmailInput.addEventListener("input", function () {
  contactEmailLbl.innerHTML = contactEmailInput.value;
});