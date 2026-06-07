import { render, screen, fireEvent } from "@testing-library/react";
import Pagination from "./Pagination";

describe("Pagination", () => {
  test("calls page change handler", () => {
    const onPageChange = jest.fn();

    render(
      <Pagination
        currentPage={1}
        totalPages={10}
        usersPerPage={10}
        totalUsers={100}
        onPageChange={onPageChange}
        onUsersPerPageChange={jest.fn()}
      />
    );

    const nextButton = screen.getByRole("button", {
      name: /›/i,
    });

    fireEvent.click(nextButton);

    expect(onPageChange).toHaveBeenCalled();
  });
});