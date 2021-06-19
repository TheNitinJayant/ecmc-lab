const backend = "http://localhost:3000/signup";

const submitButton = document.getElementById("submit-button");

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const password = document.getElementById("password").value;
const confirmPassword = document.getElementById("confirm-password").value;
const phone = document.getElementById("phone").value;

const displayValidation = document.getElementById("display-validation");

submitButton.addEventListener("click", handleClick);

function handleClick() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const phone = document.getElementById("phone").value;

    if (
        !isEmailValid(email) ||
        !isPasswordValid(password, confirmPassword) ||
        !isPhoneValid(phone)
    ) {
        displayValidation.textContent = "please enter correctly";
    } else {
        displayValidation.textContent = "Singin Up";
        signUp();
    }

    // displayValidation.textContent = "Singin Up";
    // signUp();
}

function signUp() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;
    const phone = document.getElementById("phone").value;
    const data = { name: name, email: email, password: password, phone: phone };

    const postData = {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
            "Content-type": "application/json; charset=UTF-8",
        },
    };

    fetch(backend, postData)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log("data sent", data);
        });
}

function isEmailValid(email) {
    let result = true;

    let atIndex = email.indexOf("@");
    let dotIndex = email.lastIndexOf(".");

    if (atIndex < 1 || dotIndex >= email.length - 2 || dotIndex - atIndex < 3) {
        result = false;
    }

    return result;
}

function isPhoneValid(phone) {
    if (phone.length != 10) {
        return false;
    }

    let result = true;

    for (let i = 0; i < phone.length; i++) {
        let c = phone[i];
        if (c >= "0" && c <= "9") {
            result = true;
        } else {
            return false;
        }
    }

    return result;
}

function isPasswordValid(password1, password2) {
    if (password1 != password2) {
        return false;
    }
    return true;
}
