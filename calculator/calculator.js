window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});


function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  const values = {amount: 400000, years: 5, rate: 100}
  let amount = document.getElementById("loan-amount")
  let years = document.getElementById("loan-years")
  let rate = document.getElementById("loan-rate")
  amount.value = values.amount;
  years.value = values.years;
  rate.value = values.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
let currentValues = getCurrentUIValues()
updateMonthly(calculateMonthlyPayment(currentValues))
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  let principle = values.amount;
  let monthlyRate = (values.rate/100)/12;
  let paymentAmount = values.years*12;
  let payment =  (principle*monthlyRate)/(1-Math.pow((1+monthlyRate),-paymentAmount));
  let roPayment = Math.round(payment*100);
  let actualPayment = roPayment/100
  console.log(monthlyRate, paymentAmount, actualPayment);
  return actualPayment;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let printPayment = document.getElementById('monthly-payment')
  printPayment.innerText = '$'+ monthly;
}
