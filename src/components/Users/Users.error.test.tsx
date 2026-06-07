import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Users from "./Users";

jest.mock("../../services/users.service", () => ({
  getUsers: jest.fn(() => Promise.reject(new Error("API Error"))),
}));

describe("Users Error State", () => {
  test("shows error state when request fails", async () => {
    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(
        screen.getByRole("heading", { name: /something went wrong/i })
      ).toBeInTheDocument();
    });

    expect(
      screen.getByText(/something went wrong while fetching users/i)
    ).toBeInTheDocument();
  });
});