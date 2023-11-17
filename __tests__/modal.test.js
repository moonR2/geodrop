import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import Modal from "../src/components/Modal";

describe("Modal component", () => {
  it("renders with correct content", () => {
    const onClose = jest.fn();
    const onConfirm = jest.fn();

    render(
      <Modal
        title="Test Title"
        subtitle="Test Subtitle"
        message="Test Message"
        onClose={onClose}
        onConfirm={onConfirm}
      />,
    );

    // Assert that the modal renders with the correct content
    expect(screen.getByText("Test Title")).toBeInTheDocument();
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument();
    expect(screen.getByText("Test Message")).toBeInTheDocument();

    // Assert that the buttons are rendered
    expect(screen.getByText("Understood")).toBeInTheDocument();
  });

  it("calls onClose when close button is clicked", () => {
    const onClose = jest.fn();
    const onConfirm = jest.fn();

    render(
      <Modal
        title="Test Title"
        subtitle="Test Subtitle"
        message="Test Message"
        onClose={onClose}
        onConfirm={onConfirm}
      />,
    );

    fireEvent.click(screen.getByText("Close modal"));
    expect(onClose).toHaveBeenCalled();
  });

  it("calls onConfirm when 'Understood' button is clicked", () => {
    const onClose = jest.fn();
    const onConfirm = jest.fn();

    render(
      <Modal
        title="Test Title"
        subtitle="Test Subtitle"
        message="Test Message"
        onClose={onClose}
        onConfirm={onConfirm}
      />,
    );

    fireEvent.click(screen.getByText("Understood"));
    expect(onConfirm).toHaveBeenCalled();
  });
});
