const nameIput = document.getElementById("input-Name");
const kilometersIput = document.getElementById("input-Kilometers");
const ageRangeIput = document.getElementById("input-AgeRange");
const submitButtonIput = document.getElementById("submit-button");
const cancelButtonIput = document.getElementById("cancel-button");
const personalTicketInfo = document.getElementById("personal-ticket-info");

// console.log(nameIput);
// console.log(kilometersIput);
// console.log(ageRangeIput);
// console.log(submitButtonIput);
// console.log(cancelButtonIput);

personalTicketInfo.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = nameIput.value.trim();
  const kilometers = nameIput.value.trim();
  const ageRange = nameIput.value.trim();
});
