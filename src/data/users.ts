import type { User } from "../types/user";

export const users: User[] = Array.from({ length: 500 }, (_, index) => {
  const statuses = ["Active", "Inactive", "Pending", "Blacklisted"] as const;

  const id = String(index + 1);

  return {
    id,
    organization: index % 2 === 0 ? "Lendsqr" : "Lendstar",
    username: index % 2 === 0 ? "Grace Effiom" : "Tosin Dokunmu",
    email: `user${id}@lendsqr.com`,
    phoneNumber: `07060780${String(index).padStart(3, "0")}`,
    dateJoined: "Apr 30, 2020 10:00 AM",
    status: statuses[index % statuses.length],
    fullName: index % 2 === 0 ? "Grace Effiom" : "Tosin Dokunmu",
    bvn: "07060780922",
    gender: index % 2 === 0 ? "Female" : "Male",
    maritalStatus: "Single",
    children: "None",
    typeOfResidence: "Parent’s Apartment",

    education: "B.Sc",
    employmentStatus: "Employed",
    sector: "FinTech",
    durationOfEmployment: "2 years",
    officeEmail: `office${id}@lendsqr.com`,
    monthlyIncome: "₦200,000.00 - ₦400,000.00",
    loanRepayment: "40,000",

    twitter: "@grace_effiom",
    facebook: "Grace Effiom",
    instagram: "@grace_effiom",

    accountBalance: "₦200,000.00",
    accountNumber: `991234${String(index).padStart(4, "0")}`,
    bankName: "Providus Bank",

    guarantorName: "Debby Ogana",
    guarantorPhone: "07060780922",
    guarantorEmail: "debby@gmail.com",
    guarantorRelationship: "Sister",
  };
});
