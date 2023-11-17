import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import SearchResults from "../src/components/SearchResults";

describe("SearchResults component", () => {
  const mockResults = [
    {
      description: "result test",
      place_id: "1",
      structured_formatting: {
        main_text: "main text test",
        secondary_text: "secondary text test",
      },
    },
  ];

  it("renders correctly with results", () => {
    const onSelectResult = jest.fn();

    render(
      <SearchResults results={mockResults} onSelectResult={onSelectResult} />,
    );

    // Assert that the component renders with the correct content
    expect(screen.getByText("main text test")).toBeInTheDocument();
    expect(screen.getByText("secondary text test")).toBeInTheDocument();
  });

  it("calls onSelectResult when a result is clicked", () => {
    const onSelectResult = jest.fn();

    render(
      <SearchResults results={mockResults} onSelectResult={onSelectResult} />,
    );

    // Trigger a click on a result
    fireEvent.click(screen.getByText("main text test"));

    // Assert that onSelectResult is called with the correct address
    expect(onSelectResult).toHaveBeenCalledWith("result test");
  });

  it("does not render when there are no results", () => {
    const onSelectResult = jest.fn();

    render(<SearchResults results={[]} onSelectResult={onSelectResult} />);

    // Assert that the component does not render when there are no results
    expect(screen.queryByText("main text test")).toBeNull();
  });
});
