//check that both fields are not empty
function validateInputs() {
  nums = getInputs();
  num1 = nums[0];
  num2 = nums[1];

  if (num1 === "" || num2 === "") {
    alert("Please fill both fields");
  }
}

function getInputs() {
  const input_1 = document.getElementById("firstNum").value;
  const input_2 = document.getElementById("secondNum").value;
  return [input_1, input_2];
}

//returns an array of parsed floats
function getParsedNumbers() {
  validateInputs();
  var nums = getInputs();
  nums[0] = parseFloat(nums[0]);
  nums[1] = parseFloat(nums[1]);
  return nums;
}

function showResult(result) {
  const resultBox = document.getElementById("result");
  resultBox.innerHTML = result;
}

const add = () => {
  const myResult = (getParsedNumbers()[0] + getParsedNumbers()[1]).toFixed(2);
  showResult(myResult);
};

const substract = () => {
  const myResult = (getParsedNumbers()[0] - getParsedNumbers()[1]).toFixed(2);
  showResult(myResult);
};

const multiply = () => {
  const myResult = (getParsedNumbers()[0] * getParsedNumbers()[1]).toFixed(2);
  showResult(myResult);
};

const divide = () => {
  const myResult = (getParsedNumbers()[0] / getParsedNumbers()[1]).toFixed(2);
  showResult(myResult);
};
