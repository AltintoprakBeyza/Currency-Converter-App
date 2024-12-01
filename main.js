const amountInput = document.querySelector("#amount");
const firstOption = document.querySelector("#firstCurrencyOption");
const secondOption = document.querySelector("#secondCurrencyOption");
const resultInput = document.querySelector("#result");

const currency = new Currency();
//inputa bir değer girildiğinde bir şey olsun dersek inputların input adında
// bir eventi var.

runEventListeners();

function runEventListeners() {
  amountInput.addEventListener("input", exchanged);
}

function exchanged() {
  const amount = Number(amountInput.value.trim());
  console.log(amount);
  const firstOptionValue =
    firstOption.options[firstOption.selectedIndex].textContent;
  const secondOptionValue =
    secondOption.options[secondOption.selectedIndex].textContent;

  currency
    .exchange(amount, firstOptionValue, secondOptionValue)
    .then((result) => {
      resultInput.value = result.toFixed(3);
    });
}
