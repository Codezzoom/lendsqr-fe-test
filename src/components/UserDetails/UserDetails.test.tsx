import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import UserDetails from "./UserDetails";

const mockUser = {
  id: "1",
  organization: "Lendsqr",
  username: "graceeffiom",
  email: "grace@example.com",
  phoneNumber: "07060780922",
  dateJoined: "Apr 30, 2020 10:00 AM",
  status: "Active",

  fullName: "Grace Effiom",
  bvn: "12345678901",
  gender: "Female",
  maritalStatus: "Single",
  children: "None",
  typeOfResidence: "Parent Apartment",

  education: "B.Sc",
  employmentStatus: "Employed",
  sector: "FinTech",
  durationOfEmployment: "2 years",
  officeEmail: "grace@lendsqr.com",
  monthlyIncome: "₦200,000 - ₦400,000",
  loanRepayment: "₦40,000",

  twitter: "@grace",
  facebook: "Grace Effiom",
  instagram: "@grace",

  guarantorName: "Debby Ogana",
  guarantorPhone: "07060780923",
  guarantorEmail: "debby@example.com",
  guarantorRelationship: "Sister",

  accountBalance: "₦200,000.00",
  accountNumber: "9912345678",
  bankName: "Providus Bank",
};

describe("UserDetails", () => {
  beforeEach(() => {
    localStorage.setItem("selectedUser", JSON.stringify(mockUser));
  });

  afterEach(() => {
    localStorage.clear();
  });

  test("renders selected user details from localStorage", () => {
    render(
      <MemoryRouter>
        <UserDetails />
      </MemoryRouter>
    );

    expect(screen.getByText(/user details/i)).toBeInTheDocument();
    expect(screen.getAllByText(/grace effiom/i)[0]).toBeInTheDocument();
    expect(screen.getByText(/07060780922/i)).toBeInTheDocument();
    expect(screen.getByText(/grace@example.com/i)).toBeInTheDocument();
    expect(screen.getByText(/providus bank/i)).toBeInTheDocument();
  });
});