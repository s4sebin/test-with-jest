import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import styles from "../../styles/Home.module.css";
export default function Calculator() {
    const [number1, setNumber1] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [result, setResult] = useState(0);

    const calculateResult = (operator) => {
        const num1 = parseFloat(number1);
        const num2 = parseFloat(number2);
        switch (operator) {
            case 'addition':
                setResult(num1 + num2);
                break;
            case 'subtraction':
                setResult(num1 - num2);
                break;
            case 'multiplication':
                setResult(num1 * num2);
                break;
            case 'division':
                setResult(num1 / num2);
                break;
            default:
                setResult('Invalid operator');
        }
    };

    return (
        <div className={styles['container']}>
            <div className={styles['header']}>Calculator</div>
            <input
                type="number"
                className={styles["input-box"]}
                data-testid="number1"
                value={number1}
                onChange={(e) => setNumber1(e.target.value)}
            />
            <input
                type="number"
                className={styles["input-box"]}
                data-testid="number2"
                value={number2}
                onChange={(e) => setNumber2(e.target.value)}
            />
            <div className={styles["answer"]} data-testid="answer">{result}</div>
            <div className={styles["all-button"]}>
                <button onClick={() => { calculateResult('addition') }} className={styles["button"]} data-testid="addition">
                    Addition
                </button>
                <button onClick={() => { calculateResult('subtraction') }} className={styles["button"]} data-testid="subtraction">
                    Subtraction
                </button>
                <button onClick={() => { calculateResult('multiplication') }} className={styles["button"]} data-testid="multiplication">
                    Multiplication
                </button>
                <button onClick={() => { calculateResult('division') }} className={styles["button"]} data-testid="division">
                    Division
                </button>
            </div>

        </div>
    );
}