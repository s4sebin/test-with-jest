import Calculator from "../../pages/calculator/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { createElement } from "react";

describe("Calculator", () => {
    it("Check the addition working correctly", () => {
        render(<Calculator />);
        const number1 = screen.getByTestId('number1');
        const number2 = screen.getByTestId('number2');
        const addButton = screen.getByTestId('addition');
        const result = screen.getByTestId('answer');
        fireEvent.change(number1, { target: { value: '5' } });
        fireEvent.change(number2, { target: { value: '10' } });
        fireEvent.click(addButton);
        expect(result).toHaveTextContent('15');
    });
    it("Check the subtraction working correctly", () => {
        render(<Calculator />);
        const number1 = screen.getByTestId('number1');
        const number2 = screen.getByTestId('number2');
        const addButton = screen.getByTestId('subtraction');
        const result = screen.getByTestId('answer');
        fireEvent.change(number1, { target: { value: '10' } });
        fireEvent.change(number2, { target: { value: '2' } });
        fireEvent.click(addButton);
        expect(result).toHaveTextContent('8');
    });
    it("Check the subtraction working correctly", () => {
        render(<Calculator />);
        const number1 = screen.getByTestId('number1');
        const number2 = screen.getByTestId('number2');
        const addButton = screen.getByTestId('subtraction');
        const result = screen.getByTestId('answer');
        fireEvent.change(number1, { target: { value: '10' } });
        fireEvent.change(number2, { target: { value: '2' } });
        fireEvent.click(addButton);
        expect(result).toHaveTextContent('8');
    });
    it("Check the multiplication working correctly", () => {
        render(<Calculator />);
        const number1 = screen.getByTestId('number1');
        const number2 = screen.getByTestId('number2');
        const addButton = screen.getByTestId('multiplication');
        const result = screen.getByTestId('answer');
        fireEvent.change(number1, { target: { value: '10' } });
        fireEvent.change(number2, { target: { value: '2' } });
        fireEvent.click(addButton);
        expect(result).toHaveTextContent('20');
    });
    it("Check the division working correctly", () => {
        render(<Calculator />);
        const number1 = screen.getByTestId('number1');
        const number2 = screen.getByTestId('number2');
        const addButton = screen.getByTestId('division');
        const result = screen.getByTestId('answer');
        fireEvent.change(number1, { target: { value: '10' } });
        fireEvent.change(number2, { target: { value: '2' } });
        fireEvent.click(addButton);
        expect(result).toHaveTextContent('5');
    });

});

