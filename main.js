const submitBtn = document.getElementById("submit");

function submitForm() {
    event.preventDefault();
    console.log("submit");
}

submitBtn.addEventListener("click", submitForm);