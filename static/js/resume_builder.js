// Varibales
let numEducations = 0;

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
    
    //Make the post request
    fetch("/resume_form/", {
    method: "POST", 
    body: JSON.stringify(formObj),
    headers: { "X-CSRFToken": csrftoken }
    }).then(res => {
    window.location.href = res.url;
    });
});