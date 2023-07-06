const form = document.querySelector(".form");
const inputs = document.querySelectorAll(".input");
const input_name = document.querySelector(".input-name");
const input_lastname = document.querySelector(".input-lastname");
const input_phone = document.querySelector(".input-phone");
const input_email = document.querySelector(".input-email");
var rgName = /^[a-zA-Z ]+$/;
var rglastname = /ov$/;
var rgphone = /^[+]9989[012345789][0-9]{7}$/;
var rgEmail = /^([\w]*[\w\.]*(?!\.)@gmail.com)/;
form.addEventListener("submit", (event) => {
    event.preventDefault()
    if (rgName.test(input_name.value)) {
        input_lastname.style.border = "none";
        input_name.style.border = "5px solid green";
    } else {
        input_name.style.border = "3px solid red";
        input_name.innerHTML = " ";
    }

    if (rglastname.test(input_lastname.value)) {
        input_lastname.style.border = "none";
        input_lastname.style.border = "5px solid green";
    }
    else {
        input_lastname.style.border = "3px solid red";
        input_lastname.innerHTML = " "
    }

    if (rgphone.test(input_phone.value)) {
        input_phone.style.border = "none";
        input_phone.style.border = "5px solid green";
    }
    else {
        input_phone.style.border = "3px solid red";
        input_phone.innerHTML = " ";
    }

    if (rgEmail.test(input_email.value)) {
        input_email.style.border = "none";
        input_email.style.border = "5px solid green";
    }
    else {
        input_email.style.border = "3px solid red";
        input_email.innerHTML=" ";
    }
});