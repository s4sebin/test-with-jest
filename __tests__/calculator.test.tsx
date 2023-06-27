import Calculator from "@/pages/calculator";
import { fireEvent, render, screen } from "@testing-library/react";
describe("calculator", () => {
  it("renders the calculator component", () => {
    render(<Calculator />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Calculator");

    const link = screen.getByRole("link");
    expect(link).toBeInTheDocument();
    expect(link).toHaveTextContent("Go back to Home");

    const buttons = screen.getAllByRole("button");
    expect(buttons).toHaveLength(4);
    expect(buttons[0]).toHaveTextContent("Add");
    expect(buttons[1]).toHaveTextContent("Subtract");
    expect(buttons[2]).toHaveTextContent("Multiply");
    expect(buttons[3]).toHaveTextContent("Divide");

    const field1 = screen.getByLabelText("Number 1:");
    expect(field1).toBeInTheDocument();

    const field2 = screen.getByLabelText("Number 2:");
    expect(field2).toBeInTheDocument();
  });
  it("Addition Operation", () => {
    render(<Calculator />);
    const field1 = screen.getByLabelText("Number 1:");
    const field2 = screen.getByLabelText("Number 2:");
    const button = screen.getByText("Add");
    const resultText = screen.getByTestId("result");

    fireEvent.change(field1, {
      target: { value: 2 },
    });
    fireEvent.change(field2, {
      target: { value: 3 },
    });
    fireEvent.click(button);
    expect(resultText).toHaveTextContent("5");
  });
  it("Subtraction Operation", () => {
    render(<Calculator />);
    const field1 = screen.getByLabelText("Number 1:");
    const field2 = screen.getByLabelText("Number 2:");
    const button = screen.getByText("Subtract");
    const resultText = screen.getByTestId("result");

    fireEvent.change(field1, {
      target: { value: 2 },
    });
    fireEvent.change(field2, {
      target: { value: 3 },
    });
    fireEvent.click(button);
    expect(resultText).toHaveTextContent("-1");
  });
  it("Multiplication Operation", () => {
    render(<Calculator />);
    const field1 = screen.getByLabelText("Number 1:");
    const field2 = screen.getByLabelText("Number 2:");
    const button = screen.getByText("Multiply");
    const resultText = screen.getByTestId("result");

    fireEvent.change(field1, {
      target: { value: 2 },
    });
    fireEvent.change(field2, {
      target: { value: 3 },
    });
    fireEvent.click(button);
    expect(resultText).toHaveTextContent("6");
  });
  it("Division Operation", () => {
    render(<Calculator />);
    const field1 = screen.getByLabelText("Number 1:");
    const field2 = screen.getByLabelText("Number 2:");
    const button = screen.getByText("Divide");
    const resultText = screen.getByTestId("result");

    fireEvent.change(field1, {
      target: { value: 2 },
    });
    fireEvent.change(field2, {
      target: { value: 2 },
    });
    fireEvent.click(button);
    expect(resultText).toHaveTextContent("1");
  });
});
