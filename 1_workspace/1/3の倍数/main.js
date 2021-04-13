const genkiFunction = function(number) {
  for (let n = 1; n <= number; n++) {
    if (n % 3 === 0) {
      console.log(`${n}!!!!!!!`)
    } else {
      console.log(n)
    }
  }
}
for (let k = 1; k <= 100; k++) {
  if (k % 3 === 0 && k % 5 === 0) {
    console.log("Fizz")
  } else if (k % 5 === 0) {
    console.log("Buzz")
  } else if (k % 3 === 0) {
    console.log("FizzBuzz")
  } else {
    console.log(k)
  }
}
