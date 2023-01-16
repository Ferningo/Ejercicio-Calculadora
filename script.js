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

const add = () => {
  validateInputs();
  nums = getInputs();

  const first = parseFloat(nums[0]);
  const second = parseFloat(nums[1]);

  const myResult = first + second;
  alert(myResult);
};
