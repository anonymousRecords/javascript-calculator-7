class Calculator {
  calculate(numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
  }
}

export default Calculator;