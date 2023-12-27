/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
      this.result = 0;
  }

  add(num) {
      this.result += num;
  }

  subtract(num) {
      this.result -= num;
  }

  multiply(num) {
      this.result *= num;
  }

  divide(num) {
      if (num !== 0) {
          this.result /= num;
      } else {
          throw new Error("Division by zero is not allowed");
      }
  }

  clear() {
      this.result = 0;
  }

  getResult() {
      return this.result;
  }

  calculate(expression) {
      // Remove continuous spaces and split the expression into tokens
      const tokens = expression.replace(/\s+/g, '').match(/(\d+(\.\d+)?|[-+*/()])/g);

      // Check for invalid characters in the expression
      if (!tokens || tokens.join('') !== expression.replace(/\s+/g, '')) {
          throw new Error("Invalid expression");
      }

      const stack = [];
      const operators = [];
      const precedence = { '+': 1, '-': 1, '*': 2, '/': 2 };

      for (const token of tokens) {
          if (token === '(') {
              stack.push(token);
          } else if (token === ')') {
              while (stack.length && stack[stack.length - 1] !== '(') {
                  this.performOperation(stack.pop(), operators.pop());
              }
              stack.pop(); // Discard '('
          } else if (token in precedence) {
              while (
                  operators.length &&
                  precedence[operators[operators.length - 1]] >= precedence[token]
              ) {
                  this.performOperation(stack.pop(), operators.pop());
              }
              operators.push(token);
          } else {
              stack.push(parseFloat(token));
          }
      }

      while (operators.length > 0) {
          this.performOperation(stack.pop(), operators.pop());
      }

      return this.getResult();
  }

  performOperation(operand2, operator) {
      const operand1 = this.result;
      switch (operator) {
          case '+':
              this.add(operand2);
              break;
          case '-':
              this.subtract(operand2);
              break;
          case '*':
              this.multiply(operand2);
              break;
          case '/':
              this.divide(operand2);
              break;
      }
  }
}

// Test the Calculator class

module.exports = Calculator;
