// Varibales
let numEducations = 0;
let numExperiences = 0;
let numProjects = 0;
let numSkills = 0;
let numHobbies = 0;

// Buttons
const downloadResumeBtn = document.getElementById('download-resume-btn');

downloadResumeBtn.addEventListener("click", function(event){
    event.preventDefault();
    var formObj = {};
    var inputs = $('#resume-form').serializeArray();
    $.each(inputs, function (i, input) {
        formObj[input.name] = input.value;
    });
    formObj['num-educations'] = numEducations
    formObj['num-experiences'] = numExperiences
    formObj['num-projects'] = numProjects
    formObj['num-skills'] = numSkills
    formObj['num-hobbies'] = numHobbies
    //Make the post request
    fetch("/resume_form/", {
    method: "POST", 
    body: JSON.stringify(formObj),
    headers: { "X-CSRFToken": csrftoken }
    }).then(res => {
    window.location.href = res.url;
    });
});