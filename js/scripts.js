"use strict";

const form = document.getElementById("form");
const email = document.getElementById("email");
const group = document.querySelector(".form__group");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();

    email.value = "";
    setTimeout(function () {
        group.classList.remove("success");
    }, 1000);
});

function checkInputs() {
    const emailValue = email.value.trim();

    if (emailValue === "") {
        setErrorFor(email, "Email cannot be empty");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "Check your email please");
    } else {
        setSuccessFor(email);
    }
}

function setErrorFor(input, message) {
    const formGroup = input.parentElement;
    const small = formGroup.querySelector("small");

    small.innerText = message;

    formGroup.className = "form__group error";
}

function setSuccessFor(input) {
    const formGroup = input.parentElement;
    formGroup.className = "form__group success";
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}
