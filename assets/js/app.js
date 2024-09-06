// Select & Create Elements
const numberInput = document.getElementById("numberInput");
const stepInput = document.getElementById("stepInput");
const shiftUpBtn = document.getElementById("shift-right");
const shiftDownBtn = document.getElementById("shift-left");
const resultBox = document.querySelector(".resault-box");
const errorMessage = document.querySelector(".error-message");
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Utility to show/hide error messages
const updateError = (message = "") => {
  errorMessage.textContent = message;
  errorMessage.classList.toggle("show", message !== "");
};

// Render Circles
const renderCircles = () => {
  resultBox.innerHTML = numbers
    .map(number => 
      `<div class="circle" style="${number % 2 ? 'background-color: #000; color: #fff;' : 'border: 2px solid #000;'}">${number}</div>`)
    .join("");
  updateError(); // Clear any previous error messages
};

// Shift Function
const shiftCircle = (direction) => {
  const numberValue = +numberInput.value;
  const stepValue = +stepInput.value;
  const index = numbers.indexOf(numberValue);
  const newIndex = index + direction * stepValue;
  if (index === -1 || stepValue < 0 || Number.isNaN(numberValue) || Number.isNaN(stepValue) || newIndex < 0 || newIndex >= numbers.length) {
    updateError("Invalid input or out-of-bound move.");
    return;
  }
  [numbers[index], numbers[newIndex]] = [numbers[newIndex], numbers[index]];
  renderCircles();
};

// Event Listeners
shiftUpBtn.addEventListener("click", () => shiftCircle(1));
shiftDownBtn.addEventListener("click", () => shiftCircle(-1));

// Initial Render
renderCircles();
