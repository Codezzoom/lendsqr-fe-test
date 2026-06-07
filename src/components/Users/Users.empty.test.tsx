import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Users from "./Users";

jest.mock("../../services/users.service", () => ({
  getUsers: jest.fn(() => Promise.resolve([])),
}));

describe("Users Empty State", () => {
  test("shows empty state when no users exist", async () => {
    render(
      <MemoryRouter>
        <Users />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/no users found/i)).toBeInTheDocument();
    });
  });
});