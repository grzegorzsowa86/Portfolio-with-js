const button = document.querySelector("#btn");
const firstName = document.querySelector("#first-name");
const surName = document.querySelector("#surname");
const email = document.querySelector("#email");
const message = document.querySelector("#message");
const collapsibleDiv = document.querySelector("#collapsible-content-open");

button.addEventListener("click", (event) => {
  event.currentTarget.textContent = "Go to bottom of page";
});

form.addEventListener("submit-button", logSubmit);

function logSubmit(event) {
  event.preventDefault();
  log.textContent = `Form submitted! Welcome ${firstName.value}
    ${surName.value}
    ${email.value}
    ${message.value}`;
}

const toggleButton = document.querySelector("#toggle-reveal");
const collapsibleToggleDiv = document.querySelector(
  "#collapsible-content-toggle"
);

toggleButton.addEventListener("click", () => {
  collapsibleToggleDiv.classList.toggle("hide");
});
