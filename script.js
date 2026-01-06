const rates = {
  USD: 1,
  EUR: 0.92,
  BDT: 110,
  GBP: 0.78
};

const from = document.getElementById("from");
const to = document.getElementById("to");
const result = document.getElementById("result");

for (let currency in rates) {
  from.innerHTML += `<option value="${currency}">${currency}</option>`;
  to.innerHTML += `<option value="${currency}">${currency}</option>`;
}

function convert() {
  const amount = document.getElementById("amount").value;
  if (amount === "") return;

  const converted =
    (amount / rates[from.value]) * rates[to.value];

  result.innerText = `Result: ${converted.toFixed(2)} ${to.value}`;
}
