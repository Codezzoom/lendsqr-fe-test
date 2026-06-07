import { render, screen } from "@testing-library/react";
import { Users } from "lucide-react";
import StatCard from "./StatCard";

describe("StatCard", () => {
  test("renders stat data", () => {
    render(
      <StatCard
        title="USERS"
        value="2453"
        className="pink"
        icon={Users}
      />
    );

    expect(screen.getByText("USERS")).toBeInTheDocument();
    expect(screen.getByText("2453")).toBeInTheDocument();
  });
});