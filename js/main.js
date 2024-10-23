const nameInput = document.getElementById("input-Name");
const kilometersInput = document.getElementById("input-Kilometers");
const ageRangeInput = document.getElementById("input-AgeRange");
const submitButtonInput = document.getElementById("submit-button");
const cancelButtonnIput = document.getElementById("cancel-button");
const personalTicketInfo = document.getElementById("personal-ticket-info");

const nameOutput = document.getElementById("output-name");

// console.log(nameIput);
// console.log(kilometersIput);
// console.log(ageRangeIput);
// console.log(submitButtonIput);
// console.log(cancelButtonIput);

submitButtonInput.addEventListener("click", () => {
  text = nameInput.value.trim();
  nameOutput.textContent = text;
});

// personalTicketInfo.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const name = nameInput.value.trim();
//   const kilometers = kilometersInput.value.trim();
//   const ageRange = ageRangeInput.value.trim();

// });
