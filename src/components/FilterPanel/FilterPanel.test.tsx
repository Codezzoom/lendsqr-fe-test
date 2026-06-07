import { render, screen, fireEvent } from "@testing-library/react";
import FilterPanel from "./FilterPanel";

describe("FilterPanel", () => {
  test("updates search field", () => {
    const onSearchChange = jest.fn();

    render(
      <FilterPanel
        searchText=""
        statusFilter=""
        onSearchChange={onSearchChange}
        onStatusChange={jest.fn()}
        onResetFilters={jest.fn()}
        onClose={jest.fn()}
      />
    );

    fireEvent.change(
      screen.getByPlaceholderText(/username/i),
      {
        target: {
          value: "grace",
        },
      }
    );

    expect(onSearchChange).toHaveBeenCalled();
  });
});