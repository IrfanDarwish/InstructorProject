import InstructorForm from "./InstructorForm";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import { MemoryRouter } from "react-router-dom";

function renderInstructorForm(props = {}) {
    const defaultProps = {
        initialData: null,
        onSubmit: vi.fn(),
        buttonText: "Create Instructor",
    };

    return render(
        <MemoryRouter>
            <InstructorForm {...defaultProps} {...props} />
        </MemoryRouter>
    );
}

describe("InstructorForm", () => {
    it("shows validation error when submitting an empty form", async () => {
        const user = userEvent.setup();
        const mockSubmit = vi.fn();

        renderInstructorForm({ onSubmit: mockSubmit });
        await user.click(
            screen.getByRole("button", { name: /create instructor/i })
        );

        expect(screen.getByText(/name is required/i)).toBeInTheDocument();
        expect(screen.getByText(/email is required/i)).toBeInTheDocument();
        expect(screen.getByText(/specialization is required/i)).toBeInTheDocument();
        expect(screen.getByText(/years of experience must be at least 1/i)).toBeInTheDocument();
        expect(screen.getByText(/status is required/i)).toBeInTheDocument();

        expect(mockSubmit).not.toHaveBeenCalled();
    });

    it("submits the form when all fields are valid", async () => {
        const user = userEvent.setup();
        const mockSubmit = vi.fn();

        renderInstructorForm({ onSubmit: mockSubmit });
        await user.type(screen.getByLabelText(/name/i), "John Doe");
        await user.type(screen.getByLabelText(/email/i), "Y8TtM@example.com");
        await user.type(screen.getByLabelText(/specialization/i), "Frontend");
        await user.type(screen.getByLabelText(/years of experience/i), "5");
        await user.selectOptions(screen.getByLabelText(/status/i), "ACTIVE");
        await user.click(
            screen.getByRole("button", { name: /create instructor/i })
        );

        expect(mockSubmit).toHaveBeenCalledWith({
            name: "John Doe",
            email: "Y8TtM@example.com",
            specialization: "Frontend",
            yearsOfExperience: 5,
            status: "ACTIVE",
        });
    });
})