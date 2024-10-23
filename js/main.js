const nameInput = document.getElementById("input-Name");
const kilometersInput = document.getElementById("input-Kilometers");
const ageRangeInput = document.getElementById("input-AgeRange");
const submitButtonInput = document.getElementById("submit-button");
const cancelButtonnIput = document.getElementById("cancel-button");
const personalTicketInfo = document.getElementById("personal-ticket-info");

const nameOutput = document.getElementById("output-name");
const priceOutput = document.getElementById("output-price");

// console.log(nameIput);
// console.log(kilometersIput);
// console.log(ageRangeIput);
// console.log(submitButtonIput);
// console.log(cancelButtonIput);

const ageRange = ageRangeInput.value;

const kilometers = Number(kilometersInput.value);
console.log(kilometers);

let milesPrice = 0.21;
const ticketPrice = kilometers * milesPrice;
// priceOutput.textContent = ticketPrice;
console.log(ticketPrice);

submitButtonInput.addEventListener("click", () => {
  const name = nameInput.value.trim();
  nameOutput.textContent = name;
});

// personalTicketInfo.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const name = nameInput.value.trim();
//   const kilometers = kilometersInput.value.trim();
//   const ageRange = ageRangeInput.value.trim();

// });
