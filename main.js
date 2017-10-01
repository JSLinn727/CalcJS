const clear = document.getElementById('clear')
const operator = document.querySelectorAll('.operator')
const output = document.querySelector('.results-box')
const results = document.querySelector('.results')
const number = document.querySelectorAll('button.number')
const equals = document.querySelector('#equals')

clear.addEventListener('mousedown', function() {
  clear.className = 'btn-click'
})

equals.addEventListener('mousedown', function() {
  equals.className = 'btn-click'
})

clear.addEventListener('mouseup', function() {
  clear.className = ''
})

equals.addEventListener('mouseup', function() {
  equals.className = ''
})

// Logic

let num1 = ''
let num2 = ''
let opValue = ''
let solution = ''

number.forEach(number => {
  number.addEventListener('click', numberEvent => {
    let numberValue = numberEvent.target.value
    results.textContent += numberValue
    if (opValue) {
      num2 += numberValue
    } else {
      num1 += numberValue
    }
  })
})

operator.forEach(operator => {
  operator.addEventListener('click', operatorEvent => {
    opValue = operatorEvent.target.value
    results.textContent += opValue
  })
})

clear.addEventListener('click', clearEvent => {
  num1 = ''
  num2 = ''
  opValue = null
  solution = ''
  results.textContent = solution
})

equals.addEventListener('click', answerEvent => {
  console.log({ num1, num2 })
  if (opValue === '+') {
    solution = parseFloat(num1) + parseFloat(num2)
  } else if (opValue === '-') {
    solution = num1 - num2
  } else if (opValue === '/') {
    solution = num1 / num2
  } else if (opValue === '*') {
    solution = num1 * num2
  }
  results.textContent = solution
  num1 = solution
  opValue = null
  num2 = ''
})
