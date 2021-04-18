const number1 = document.getElementById("number-1")
const number2 = document.getElementById("number-2")
const number3 = document.getElementById("number-3")
const number4 = document.getElementById("number-4")
const number5 = document.getElementById("number-5")
const number6 = document.getElementById("number-6")
const number7 = document.getElementById("number-7")
const number8 = document.getElementById("number-8")
const number9 = document.getElementById("number-9")
const number0 = document.getElementById("number-0")
const plus = document.getElementById("plus")
const negative = document.getElementById("negative")
const kakeru = document.getElementById("kakeru")
const waru = document.getElementById("waru")
const equal = document.getElementById("equal")
const display = document.getElementById("display")
//数字を表示
number0.onclick = function() {
  display.textContent = 0
}
number1.onclick = function() {
  display.textContent = 1
}
number2.onclick = function() {
  display.textContent = 2
}
number3.onclick = function() {
  display.textContent = 3
}
number4.onclick = function() {
  display.textContent = 4
}
number5.onclick = function() {
  display.textContent = 5
}
number6.onclick = function() {
  display.textContent = 6
}
number7.onclick = function() {
  display.textContent = 7
}
number8.onclick = function() {
  display.textContent = 8
}
number9.onclick = function() {
  display.textContent = 9
}
//ここから符号
plus.onclick = function() {}
negative.onclick = function() {
  display.textContent = 0
}
