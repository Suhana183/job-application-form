// Get form
const form = document.getElementById("applicationForm");


// Get input fields
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");


// Get error elements
const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const messageError = document.getElementById("messageError");


// Success message
const successMessage = document.getElementById("successMessage");


// ============================
// FORM SUBMIT
// ============================

form.addEventListener("submit", function (event) {

    // Stop page from refreshing
    event.preventDefault();


    // Get values
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const message = messageInput.value.trim();


    // Clear previous errors
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    messageError.textContent = "";

    successMessage.textContent = "";


    // Remove previous classes
    nameInput.classList.remove("input-error", "input-success");
    emailInput.classList.remove("input-error", "input-success");
    phoneInput.classList.remove("input-error", "input-success");
    messageInput.classList.remove("input-error", "input-success");


    let isValid = true;


    // ============================
    // NAME VALIDATION
    // ============================

    if (name === "") {

        nameError.textContent = "Name is required.";

        nameInput.classList.add("input-error");

        isValid = false;

    }

    else if (name.length < 3) {

        nameError.textContent =
            "Name must contain at least 3 characters.";

        nameInput.classList.add("input-error");

        isValid = false;

    }

    else {

        nameInput.classList.add("input-success");
    }


    // ============================
    // EMAIL VALIDATION
    // ============================

    const emailPattern =
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


    if (email === "") {

        emailError.textContent =
            "Email is required.";

        emailInput.classList.add("input-error");

        isValid = false;

    }

    else if (!emailPattern.test(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        emailInput.classList.add("input-error");

        isValid = false;

    }

    else {

        emailInput.classList.add("input-success");
    }


    // ============================
    // PHONE VALIDATION
    // ============================

    const phonePattern = /^[0-9]{10}$/;


    if (phone === "") {

        phoneError.textContent =
            "Phone number is required.";

        phoneInput.classList.add("input-error");

        isValid = false;

    }

    else if (!phonePattern.test(phone)) {

        phoneError.textContent =
            "Phone number must contain exactly 10 digits.";

        phoneInput.classList.add("input-error");

        isValid = false;

    }

    else {

        phoneInput.classList.add("input-success");
    }


    // ============================
    // MESSAGE VALIDATION
    // ============================

    if (message === "") {

        messageError.textContent =
            "Message is required.";

        messageInput.classList.add("input-error");

        isValid = false;

    }

    else if (message.length < 10) {

        messageError.textContent =
            "Message must contain at least 10 characters.";

        messageInput.classList.add("input-error");

        isValid = false;

    }

    else {

        messageInput.classList.add("input-success");
    }


    // ============================
    // SUCCESS
    // ============================

    if (isValid) {

        successMessage.textContent =
            "✓ Application submitted successfully!";

        // Clear form
        form.reset();

        // Remove green borders after reset
        setTimeout(function () {

            nameInput.classList.remove("input-success");
            emailInput.classList.remove("input-success");
            phoneInput.classList.remove("input-success");
            messageInput.classList.remove("input-success");

        }, 100);
    }

});


// ============================
// PHONE INPUT
// Allow numbers only
// ============================

phoneInput.addEventListener("input", function () {

    this.value = this.value.replace(/[^0-9]/g, "");

});


// ============================
// REMOVE ERROR WHILE TYPING
// ============================

nameInput.addEventListener("input", function () {

    nameError.textContent = "";

    this.classList.remove("input-error");

});


emailInput.addEventListener("input", function () {

    emailError.textContent = "";

    this.classList.remove("input-error");

});


phoneInput.addEventListener("input", function () {

    phoneError.textContent = "";

    this.classList.remove("input-error");

});


messageInput.addEventListener("input", function () {

    messageError.textContent = "";

    this.classList.remove("input-error");

});
