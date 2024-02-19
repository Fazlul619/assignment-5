let totalSeats = 8;
let remainingSeats = totalSeats;
let selectedSeatCount = 0;
let selectedSeats = [];
window.addEventListener("load", function () {
  document.getElementById("next-btn").disabled = true;
});

function toggleSeatColor(button) {
  if (!button.classList.contains("selected")) {
    remainingSeats--;
    selectedSeats.push(button.textContent);
    selectedSeatCount++;
  } else {
    remainingSeats++;
    selectedSeats = selectedSeats.filter((seat) => seat !== button.textContent);

    selectedSeatCount--;
  }

  document.getElementById("remainingSeats").textContent = `${remainingSeats}`;
  document.getElementById(
    "selectedSeatCount"
  ).textContent = `${selectedSeatCount}`;
  button.classList.toggle("selected");
  updateSelectedSeatsTable();
}
// table code
function updateSelectedSeatsTable() {
  const selectedSeatsBody = document.getElementById("selectedSeatsBody");
  selectedSeatsBody.innerHTML = "";
  let totalPrice = 0;
  selectedSeats.forEach((seat) => {
    const row = document.createElement("tr");
    const seatCell = document.createElement("td");
    seatCell.textContent = seat;
    row.appendChild(seatCell);
    const classCell = document.createElement("td");
    classCell.textContent = "Economy";
    row.appendChild(classCell);
    const priceCell = document.createElement("td");
    priceCell.textContent = "550";
    row.appendChild(priceCell);
    row.style.display = "flex";
    row.style.gap = "55px";
    row.style.width = "100%";
    row.style.marginLeft = "20px";

    selectedSeatsBody.appendChild(row);
    totalPrice += 550;
  });
  document.getElementById("totalPriceCount").textContent = totalPrice;
  document.getElementById("totalPriceCount1").textContent = totalPrice;
  // Show or hide the table based on the number of selected seats
  const selectedSeatsTable = document.getElementById("selectedSeatsTable");
  if (selectedSeats.length > 0) {
    selectedSeatsTable.classList.remove("hidden");
    document.getElementById("next-btn").removeAttribute("disabled");
  } else {
    selectedSeatsTable.classList.add("hidden");
    document.getElementById("next-btn").disabled = true;
  }
}

const displaySection = document.getElementById("display-screen");

function display() {
  displaySection.classList.remove("hidden");
}
function Show() {
  displaySection.classList.add("hidden");
}
