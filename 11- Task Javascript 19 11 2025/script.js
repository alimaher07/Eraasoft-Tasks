const btn = document.querySelector(".btn")
const input = document.querySelector(".inch")
const result = document.querySelector(".result")

btn.addEventListener("click" , function(){
  const inch = input.value
  const calc = inch * 0.0254
  result.textContent = calc
})