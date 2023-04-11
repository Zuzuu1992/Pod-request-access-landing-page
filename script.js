const emailText = document.querySelector(".email");
const error = document.querySelector(".error-message");
const btn = document.querySelector(".btn-check");

const emailText2 = document.querySelector(".email2");
const error2 = document.querySelector(".error-message2");
const btn2 = document.querySelector(".btn-check2");
const regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
console.log(error);
console.log(emailText);
console.log(btn);

btn.addEventListener("click", () => {
  if (regex.test(emailText.value)) {
    error.style.display = "none";
    emailText.style.border = "2px solid green";
    setTimeout(() => {
      emailText.style.border = "none";
    }, "3000");
  } else {
    error.style.display = "block";
    emailText.style.border = "2px solid red";
    setTimeout(() => {
      emailText.style.border = "none";
      error.style.border = "none";
    }, "3000");
  }
});

btn2.addEventListener("click", () => {
  if (regex.test(emailText2.value)) {
    error2.style.display = "none";
    emailText2.style.border = "2px solid green";
    setTimeout(() => {
      emailText2.style.border = "none";
    }, "3000");
  } else {
    error2.style.display = "block";
    emailText2.style.border = "2px solid red";
    setTimeout(() => {
      emailText2.style.border = "none";
      error2.style.border = "none";
    }, "3000");
  }
});
