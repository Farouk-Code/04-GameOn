function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalBg = document.querySelector(".bground");
const modalBtns = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModal = document.querySelectorAll(".close");
const content = document.querySelector(".content");
const testModal = document.querySelector(".postRegisterModal");
const testClose = document.querySelector(".postRegisterClose");
const btnClose = document.querySelector(".btn-close");
const testContent = document.querySelector(".postRegisterContent");

// launch modal form
const launchModal = () => {
  modalBg.style.display = "block";
};

// launch post registration modal
const launchM = () => {
  testModal.style.display = "block";
  testContent?.classList.remove("hide-modal");
};

// Launch modal event
for (let btn of modalBtns) {
  btn.addEventListener("click", launchModal);
}

// Close modal Form
const handleCloseModal = () => {
  modalBg.style.display = "none";
};

for (let element of closeModal) {
  element.addEventListener("click", handleCloseModal);
}

// Form Validation

const validateName = (input, errorElement) => {
  const regex = /^[A-Za-zÀ-ÖØ-öø-ÿ]{2,}$/;
  if (regex.test(input.value)) {
    errorElement.style.display = "none";
    input.classList.remove("field-error");
    return true;
  } else {
    errorElement.style.display = "block";
    input.classList.add("field-error");
    return false;
  }
};

const validateEmail = (input, errorElement) => {
  const regex = /^[A-Za-z]{1,}[A-Za-z0-9._%+-]+@[A-Za-z.-]+\.[A-Za-z]{2,}$/;
  if (regex.test(input.value)) {
    errorElement.style.display = "none";
    input.classList.remove("field-error");
    return true;
  } else {
    errorElement.style.display = "block";
    input.classList.add("field-error");
    return false;
  }
};

const validateBirthDate = (input, errorElement) => {
  if (input.value === "") {
    errorElement.style.display = "block";
    input.classList.add("field-error");
    return false;
  } else {
    const birthDate = new Date(input.value);
    const currentDate = new Date();
    const age = currentDate.getFullYear() - birthDate.getFullYear();
    if (age < 12 || age > 100) {
      errorElement.style.display = "block";
      input.classList.add("field-error");
      return false;
    } else {
      errorElement.style.display = "none";
      input.classList.remove("field-error");
      return true;
    }
  }
};

// Form Validation process

const firstNameInput = document.querySelector("#first");
const firstNameError = document.querySelector("#firstNameError");
const lastNameInput = document.querySelector("#last");
const lastNameError = document.querySelector("#lastNameError");
const emailInput = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const dateInput = document.querySelector("#birthdate");
const dateError = document.querySelector("#birthdateError");

firstNameInput?.addEventListener("input", () => {
  validateName(firstNameInput, firstNameError);
});

lastNameInput?.addEventListener("input", () => {
  validateName(lastNameInput, lastNameError);
});

emailInput?.addEventListener("input", () => {
  validateEmail(emailInput, emailError);
});

dateInput?.addEventListener("input", () => {
  validateBirthDate(dateInput, dateError);
});
// Main Validation

const validate = () => {
  const isFirstNameValidate = validateName(firstNameInput, firstNameError);
  const isLastNameValidate = validateName(lastNameInput, lastNameError);
  const isEmailValidate = validateEmail(emailInput, emailError);
  const isDateValidate = validateBirthDate(dateInput, dateError);

  const isValidate =
    isFirstNameValidate &&
    isLastNameValidate &&
    isEmailValidate &&
    isDateValidate;

  if (isValidate) {
    launchM();
    handleCloseModal();
    return true;
  } else {
    return false;
  }
};
