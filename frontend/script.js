import { isAuthenticated } from "../data/userData.js";

const email = document.getElementById("email").value;
const password = document.getElementById("password").value;

const submitButton = document.getElementById("submit-button").value;

submitButton.addEventListener("click", handleClick);

function handleClick() {
    console.log("clicked");
}
