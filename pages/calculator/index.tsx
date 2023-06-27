"use client";
import { useState } from "react";
import Link from "next/link";
enum ArithmeticOperations {
  Add = "add",
  Subtract = "subtract",
  Multiply = "multiply",
  Divide = "divide",
}
const Calculator = () => {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");
  const handleCalculate = (type: string): void => {
    switch (type) {
      case ArithmeticOperations.Add:
        const sum = Number(num1) + Number(num2);
        setResult(sum.toString());
        break;
      case "subtract":
        const difference = Number(num1) - Number(num2);
        setResult(difference.toString());
        break;
      case "product":
        const product = Number(num1) * Number(num2);
        setResult(product.toString());
        break;
      default:
        const quotient = Number(num1) / Number(num2);
        setResult(quotient.toString());
    }
  };
  return (
    <div>
      <h1>Calculator</h1>
      <Link href="/">Go back to Home</Link>
      <div>
        <label>
          Number 1:
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Number 2:
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </label>
      </div>
      <div>
        <button onClick={handleCalculate.bind(this, ArithmeticOperations.Add)}>
          Add
        </button>
        <button onClick={handleCalculate.bind(this, "subtract")}>
          Subtract
        </button>
        <button onClick={handleCalculate.bind(this, "product")}>
          Multiply
        </button>
        <button onClick={handleCalculate.bind(this, "divide")}>Divide</button>
      </div>
      <p>
        Result:<span data-testid="result">{result}</span>
      </p>
    </div>
  );
};

export default Calculator;
