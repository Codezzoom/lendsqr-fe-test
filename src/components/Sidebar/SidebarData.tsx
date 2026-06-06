import {
  Home,
  Users,
  UserCheck,
  Landmark,
  HandCoins,
  PiggyBank,
  FileText,
  UserRoundCheck,
  UserX,
  Building2,
  Coins,
  BadgePercent,
  Receipt,
  Settings,
  SlidersHorizontal,
  ScrollText,
} from "lucide-react";

export const sidebarSections = [
  {
    title: "",
    items: [
      {
        name: "Dashboard",
        path: "/dashboard",
        icon: Home,
      }
    ]
  },
  {
    title: "CUSTOMERS",
    items: [
      {
        name: "Users",
        path: "/users",
        icon: Users,
      },
      {
        name: "Guarantors",
        path: "/guarantors",
        icon: UserCheck,
      },
      {
        name: "Loans",
        path: "/loans",
        icon: Landmark,
      },
      {
        name: "Decision Models",
        path: "/decision-models",
        icon: HandCoins,
      },
      {
        name: "Savings",
        path: "/savings",
        icon: PiggyBank,
      },
      {
        name: "Loan Requests",
        path: "/loan-requests",
        icon: FileText,
      },
      {
        name: "Whitelist",
        path: "/whitelist",
        icon: UserRoundCheck,
      },
      {
        name: "Karma",
        path: "/karma",
        icon: UserX,
      },
    ],
  },
  {
    title: "BUSINESSES",
    items: [
      {
        name: "Organization",
        path: "/organization",
        icon: Building2,
      },
      {
        name: "Loan Products",
        path: "/loan-products",
        icon: Coins,
      },
      {
        name: "Savings Products",
        path: "/savings-products",
        icon: BadgePercent,
      },
      {
        name: "Fees and Charges",
        path: "/fees-and-charges",
        icon: Receipt,
      },
      {
        name: "Transactions",
        path: "/transactions",
        icon: FileText,
      }
    ],
  },
  {
    title: "SETTINGS",
    items: [
      {
        name: "Preferences",
        path: "/preferences",
        icon: SlidersHorizontal,
      },
      {
        name: "Fees and Pricing",
        path: "/fees-and-pricing",
        icon: Settings,
      },
      {
        name: "Audit Log",
        path: "/audit-log",
        icon: ScrollText,
      },
    ],
  },
];