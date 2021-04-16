const display = document.getElementById("display")
const plusButton = document.getElementById("plus-button")
const twice = document.getElementById("twice")
const negative = document.getElementById("negative")
let count = 0

plusButton.onclick = function() {
  count += 1
  display.textContent = count
}
twice.onclick = function() {
  count *= 2
  display.textContent = count
}
negative.onclick = function() {
  count -= 1
  display.textContent = count
}
