import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Register from "./Register";

describe("Register Component", () => {
  it("renders register page correctly", () => {
    render(<Register />);
    expect(screen.queryByText("Register Page")).toBeDefined();
    expect(
      screen.queryByText("Please sign up using the form below.")
    ).toBeDefined();
    expect(screen.getByLabelText("Username:")).toBeDefined();
    expect(screen.getByLabelText("Email:")).toBeDefined();
    expect(screen.getByLabelText("UK Mobile Number:")).toBeDefined();
    expect(screen.getByRole("button", { name: "Register" })).toBeDefined();
  });

  it("shows error for invalid username", () => {
    render(<Register />);
    const usernameInput = screen.getByLabelText("Username:");
    // Enter an invalid username which is less than 8 characters
    fireEvent.change(usernameInput, { target: { value: "abc" } });
    expect(
      screen.queryByText(
        /Username must be atleast 8 characters long, must have at least 1 Uppercase letter, 1 Lowercase letter, 1 number and 1 special character/
      )
    ).toBeDefined();
  });

  it("clears error for valid username", () => {
    render(<Register />);
    const usernameInput = screen.getByLabelText("Username:");
    // Enter an invalid username first
    fireEvent.change(usernameInput, { target: { value: "abc" } });
    expect(
      screen.queryByText(
        /Username must be atleast 8 characters long, must have at least 1 Uppercase letter, 1 Lowercase letter, 1 number and 1 special character/
      )
    ).toBeDefined();
    // Now enter a valid username
    fireEvent.change(usernameInput, { target: { value: "Valid1@pass" } });
    const errorMessage = screen.queryByText(
      /Username must be atleast 8 characters long, must have at least 1 Uppercase letter, 1 Lowercase letter, 1 number and 1 special character/
    );
    expect(errorMessage).toBeNull();
  });

  it("shows error for invalid mobile number", () => {
    render(<Register />);
    const mobileInput = screen.getByLabelText("UK Mobile Number:");
    // Enter an invalid mobile number
    fireEvent.change(mobileInput, { target: { value: "123456" } });
    expect(
      screen.queryByText(
        /Mobile number must be a UK mobile number starting with \+44 or 07 and must be 11 digits long/
      )
    ).toBeDefined();
  });

  it("clears error for valid mobile number", () => {
    render(<Register />);
    const mobileInput = screen.getByLabelText("UK Mobile Number:");
    // First, enter an invalid mobile number to trigger error
    fireEvent.change(mobileInput, { target: { value: "123456" } });
    expect(
      screen.queryByText(
        /Mobile number must be a UK mobile number starting with \+44 or 07 and must be 11 digits long/
      )
    ).toBeDefined();
    // Now, enter a valid mobile number ("+447123456789" is valid as it matches +447 and 9 digits)
    fireEvent.change(mobileInput, { target: { value: "+447123456789" } });
    const errorMessage = screen.queryByText(
      /Mobile number must be a UK mobile number starting with \+44 or 07 and must be 11 digits long/
    );
    expect(errorMessage).toBeNull();
  });
});
