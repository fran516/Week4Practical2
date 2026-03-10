const submitBtn = document.getElementById("submit");

function submitForm(event) {
    event.preventDefault();
    console.log("submit");

    if (document.getElementById("yesChildren").checked && document.getElementById("age"). value === "") {
        console.log("User has answered yes to having children but has not said how many");
    }

    if (document.getElementById("yesPets").checked && document.getElementById("species"). value === "") {
        console.log("User has answered yes to having pets but has not answered what pets they have");
    }
}

submitBtn.addEventListener("click", submitForm);

const children = document.getElementsByName("childAtHome-yes-or-no");

function childOptionChanged(event) {
    const input = document.getElementById("age");
    const label = document.getElementById("child-ages");
    if (event.target.value === "yes") {
        input.style.display = "block";
        label.style.display = "block";
    } else {
        input.style.display = "none";
        label.style.display = "none";
    }
}

for (let childOption of children) {
    childOption.addEventListener("change", childOptionChanged);
}

const pet = document.getElementsByName("otherPet-yes-or-no");

function petVariationChanged(event) {
    const input = document.getElementById("species");
    const label = document.getElementById("otherSpecies");
    if (event.target.value === "yes") {
        input.style.display = "block";
        label.style.display = "block";
    } else {
        input.style.display = "none";
        label.style.display = "none";
    }
}

for (let petVariation of pet) {
    petVariation.addEventListener("change", petVariationChanged);
}