const nameInput = document.getElementById("input-Name");
const kilometersInput = document.getElementById("input-Kilometers");
const ageRangeInIput = document.getElementById("age-range");
const submitButtonInput = document.getElementById("submit-button");
const cancelButtonnIput = document.getElementById("cancel-button");
const personalTicketInfo = document.getElementById("personal-ticket-info");

const nameOutput = document.getElementById("output-name");
const priceOutput = document.getElementById("output-price");

// console.log(nameIput);
// console.log(kilometersIput);
// console.log(ageRangeInIputIput);
// console.log(submitButtonIput);
// console.log(cancelButtonIput);

// const ageRangeInIput = ageRangeInIput.value;

// const kilometers = Number(kilometersInput.value);
// console.log(kilometers);

// let milesPrice = 0.21;
// const ticketPrice = kilometers * milesPrice;
// // priceOutput.textContent = ticketPrice;
// console.log(ticketPrice);

personalTicketInfo.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameInput.value;
  const kilometers = kilometersInput.value;
  const ageRange = ageRangeInIput.value;

  console.log(name, kilometers, ageRange);
});

// personalTicketInfo.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const name = nameInput.value.trim();
//   const kilometers = kilometersInput.value.trim();
//   const ageRangeInIput = ageRangeInIput.value.trim();

// });
