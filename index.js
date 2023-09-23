const dobInput = document.getElementById("dob");
const luckyNumberInput = document.getElementById("lucky-number");

const checkBtn = document.getElementById("check-btn");
const resetBtn = document.getElementById("reset-btn");

const infoBox = document.getElementById("info");

resetBtn.addEventListener("click", () => {
  dobInput.value = "";
  luckyNumberInput.value = 0;
  infoBox.innerHTML = "";
});

checkBtn.addEventListener("click", () => {
  const dobVal = parseInt(dobInput.value);
  const luckNumVal = parseInt(luckyNumberInput.value);

  if (Number.isNaN(dobVal) || Number.isNaN(luckNumVal)) {
    window.alert("Please provide valid inputs.");
  }

  const dobSumVal = dobInput.value
    .split("-")
    .map((item) => parseInt(item))
    .reduce((cur, acc) => {
      return cur + acc;
    }, 0);

  infoBox.innerHTML =
    dobSumVal % luckNumVal === 0
      ? "Congrats your DOB is lucky!"
      : "Oops! your DOB isn't lucky.";
});
