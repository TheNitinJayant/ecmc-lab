const userData = [
    { name: "Nitin", email: "nitin1@gmail.com", password: "helloworld1" },
    { name: "John", email: "john1@gmail.com", password: "helloworld2" },
    { name: "Albert", email: "alber1@gmail.com", password: "helloworld3" },
];

const isAuthenticated = (email, password) => {
    let auth = false;
    userData.forEach((user) => {
        if (email == user.email && password == user.password) {
            console.log(user.email, user.password);
            auth = true;
        }
    });

    return auth;
};

const submitButton = document.getElementById("submit-button");

const displayAuthentication = document.getElementById("display-authentication");

submitButton.addEventListener("click", handleClick);

function handleClick() {
    authenticate();
}

function authenticate() {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    if (isAuthenticated(email, password)) {
        displayAuthentication.textContent = "Successfull";
    } else {
        displayAuthentication.textContent = "Try again";
    }
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
