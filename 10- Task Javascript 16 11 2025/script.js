const btn = document.querySelector(".btn")
const input1 = document.querySelector(".num1")
const input2 = document.querySelector(".num2")
const result = document.querySelector(".result")
btn.addEventListener("click" , function() {
  const x = input1.value
  const y = input2.value
  const sum = x + y
  result.textContent = sum
})