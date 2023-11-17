import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchBox from "../src/components/SearchBox";

describe("SearchBox component", () => {
  it("renders with correct content", () => {
    const handleChange = jest.fn();
    const value = "Test Value";

    render(<SearchBox value={value} handleChange={handleChange} />);

    // Assert that the search box renders with the correct content
    expect(screen.getByDisplayValue("Test Value")).toBeInTheDocument();
  });
});
