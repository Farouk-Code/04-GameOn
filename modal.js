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
const modalBtn = document.querySelectorAll(".modal-btn");
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

// Launch modal event
for (let btn of modalBtn) {
  btn.addEventListener("click", launchModal);
}

// Close modal Form
const handleCloseModal = () => {
  content.classList.add("hide-modal");
  modalBg.style.display = "none";
  content.classList.remove("hide-modal");
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
