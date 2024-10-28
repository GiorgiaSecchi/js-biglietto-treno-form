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

  const milesPrice = 0.21;
  const fullTicketPrice = kilometers * milesPrice;
  // console.log(fullTicketPrice);

  let ticketText = "Biglietto Standard";
  let discountPerc = 0;

  if (ageRange === "Under 18") {
    discountPerc = 20;
    ticketText = "Biglietto Under 18";
  } else if (ageRange === "Over 65") {
    discountPerc = 40;
    ticketText = "Biglietto Over 65";
  }

  let discountEur = (fullTicketPrice * discountPerc) / 100;
  let finalPrice = fullTicketPrice - discountEur;
  const finalPriceText = `€ ${finalPrice.toFixed(2)}`;

  console.log(`fullTicketPrice: ` + fullTicketPrice);
  console.log(`discountEur: ` + discountEur);
  console.log(`finalPriceText: ` + finalPriceText);
});

// personalTicketInfo.addEventListener("submit", (event) => {
//   event.preventDefault();

//   const name = nameInput.value.trim();
//   const kilometers = kilometersInput.value.trim();
//   const ageRangeInIput = ageRangeInIput.value.trim();

// });
