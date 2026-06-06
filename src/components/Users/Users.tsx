import Pagination from "../Pagination/Pagination";
import StatCard from "../StatCard/StatCard";
import Table from "../Table/Table";
import "./Users.scss";
import { Users as UsersIcon, UserCheck, FileText, Coins } from "lucide-react";

const stats = [
  { title: "USERS", value: "2,453", icon: UsersIcon, className: "pink" },
  { title: "ACTIVE USERS", value: "2,453", icon: UserCheck, className: "purple" },
  { title: "USERS WITH LOANS", value: "12,453", icon: FileText, className: "orange" },
  { title: "USERS WITH SAVINGS", value: "102,453", icon: Coins, className: "red" },
];

const Users = () => {
  return (
    <section className="users-page">
      <h1>Users</h1>

      <div className="stats-grid">
        {stats.map((item) => (
          <StatCard
            key={item.title}
            title={item.title}
            value={item.value}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </div>

      <Table />

      <Pagination />
    </section>
  );
};

export default Users;