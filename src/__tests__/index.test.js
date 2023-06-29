import Home from "../pages/index";
import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Calculator", () => {
    it("Check the H=home screen render correctly", () => {
        render(<Home />);
        const button = screen.getByText('Calculator Page');
        const link = screen.getByRole('link', { name: 'Calculator Page' });
        expect(button).toBeInTheDocument();
        expect(link).toBeInTheDocument();
        expect(link).toHaveAttribute('href', '/calculator');
    });

});

