/*
Create a calculator that performs four basic operations.
The styling should be something like calculator.png
*/

class calculator {
   constructor(previousOperandTextElement, currentOperandTextElement) {
    this.previousOperandTextElement = previousOperandTextElement
    this.currentOperandTextElement = currentOperandTextElement
    this.clear()
   }

   clear() {
     this.currentOperand = ''
     this.previousOperand = ''
     this.operation = undefined
   }

   appendNumber(number) {
    if(number === '.' && this.currentOperand.includes('.')) return
      this.currentOperand = this.currentOperand.toString() + number.toString()
   }

   chooseOperations(operation) {
    if(this.currentOperand === '') return
    if(this.previousOperand !== '') {
        this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
   }

   compute() {
     let computation
     const prev = parseFloat(this.previousOperand)
     const current = parseFloat(this.currentOperand)
     if(isNaN(prev) || isNaN(current)) return
     switch (this.operation) {
        case '+':
            computation = prev + current
            break
        case '-':
            computation = prev - current
            break
        case '/':
            computation = prev / current
            break
        case '*':
            computation = prev * current
            break

            default:
                return
     }
     this.currentOperand = computation
     this.operation = undefined
     this.previousOperand = ''
   }


   getDisplayNumber(number) {
    const stringNumber = number.toString()
    const integerDigits = parseFloat(stringNumber.split('.')[0])
    const decimalDigits = stringNumber.split('.')[1]
    let integerDisplay
    if(isNaN(integerDigits)) {
        integerDisplay = ''
    } else {
        integerDisplay = integerDigits.toLocaleString('en', {
            maximumFractionDigits: 0 })
    }
    if(decimalDigits != null) {
        return `${integerDisplay}.${decimalDigits}`
      } else {
        return integerDisplay
      }
   }

   updateDisplay() {
      this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand);
      if(this.operation != null) {
        this.previousOperandTextElement.innerText =
        `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
      } else {
        this.previousOperandTextElement.innerText = ''
      }
      
   }
}

const numerButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.data-operation');
const equalsButton = document.querySelector('.data-equals');
const allClearButton = document.querySelector('.data-all-clear');
const previousOperandTextElement = document.querySelector('.data-previous-operand');
const currentOperandTextElement = document.querySelector('.current-operand');
const calculatore = new calculator(previousOperandTextElement, currentOperandTextElement)

numerButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculatore.appendNumber(button.innerText)
        calculatore.updateDisplay()
    })
});


operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculatore.chooseOperations(button.innerText)
        calculatore.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculatore.compute()
    calculatore.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculatore.compute()
    calculatore.updateDisplay()
})


