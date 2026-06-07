// import { useEffect, useState } from "react";
// import { Users as UsersIcon, UserCheck, FileText, Coins } from "lucide-react";

// import StateMessage from "../../components/StateMessage/StateMessage";

// import StatCard from "../../components/StatCard/StatCard";
// import Table from "../../components/Table/Table";
// import Pagination from "../../components/Pagination/Pagination";

// import { getUsers } from "../../services/users.service";
// import type { User } from "../../types/user";
// import "./Users.scss";

// const stats = [
//   { title: "USERS", value: "2,453", icon: UsersIcon, className: "pink" },
//   { title: "ACTIVE USERS", value: "2,453", icon: UserCheck, className: "purple" },
//   { title: "USERS WITH LOANS", value: "12,453", icon: FileText, className: "orange" },
//   { title: "USERS WITH SAVINGS", value: "102,453", icon: Coins, className: "red" },
// ];

// const Users = () => {
//   const [users, setUsers] = useState<User[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [error, setError] = useState("");

//   const [currentPage, setCurrentPage] = useState(1);
//   const [usersPerPage, setUsersPerPage] = useState(10);

//   const [searchText, setSearchText] = useState("");
//   const [statusFilter, setStatusFilter] = useState("");

//   useEffect(() => {
//     const fetchUsers = async () => {
//       try {
//         setIsLoading(true);
//         const data = await getUsers();
//         setUsers(data);
//       } catch {
//         setError("Something went wrong while fetching users.");
//       } finally {
//         setIsLoading(false);
//       }
//     };

//     fetchUsers();
//   }, []);

//   const filteredUsers = users.filter((user) => {
//     const search = searchText.toLowerCase();

//     const matchesSearch =
//       user.username.toLowerCase().includes(search) ||
//       user.email.toLowerCase().includes(search) ||
//       user.organization.toLowerCase().includes(search) ||
//       user.phoneNumber.toLowerCase().includes(search);

//     const matchesStatus = statusFilter ? user.status === statusFilter : true;

//     return matchesSearch && matchesStatus;
//   });

//   const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

//   const startIndex = (currentPage - 1) * usersPerPage;
//   const endIndex = startIndex + usersPerPage;

//   const currentUsers = filteredUsers.slice(startIndex, endIndex);

//   const handleUsersPerPageChange = (value: number) => {
//     setUsersPerPage(value);
//     setCurrentPage(1);
//   };

//   const handleResetFilters = () => {
//     setSearchText("");
//     setStatusFilter("");
//     setCurrentPage(1);
//   };

//   return (
//     <section className="users-page">
//       <h1>Users</h1>

//       <div className="stats-grid">
//         {stats.map((item) => (
//           <StatCard key={item.title} {...item} />
//         ))}
//       </div>

//       {isLoading && (
//         <StateMessage
//           type="loading"
//           title="Loading users"
//           message="Please wait while we fetch users."
//         />
//       )}

//       {!isLoading && error && (
//         <StateMessage
//           type="error"
//           title="Something went wrong"
//           message={error}
//         />
//       )}

//       {!isLoading && !error && filteredUsers.length === 0 && (
//         <StateMessage
//           type="empty"
//           title="No users found"
//           message="Try adjusting your search or filter criteria."
//         />
//       )}

//       {!isLoading && !error && filteredUsers.length > 0 && (
//         <>
//           <Table
//             users={currentUsers}
//             searchText={searchText}
//             statusFilter={statusFilter}
//             onSearchChange={setSearchText}
//             onStatusChange={setStatusFilter}
//             onResetFilters={handleResetFilters}
//           />

//           <Pagination
//             currentPage={currentPage}
//             totalPages={totalPages}
//             usersPerPage={usersPerPage}
//             totalUsers={filteredUsers.length}
//             onPageChange={setCurrentPage}
//             onUsersPerPageChange={handleUsersPerPageChange}
//           />
//         </>
//       )}
//     </section>
//   );
// };

// export default Users;


import { useEffect, useState } from "react";
import { Users as UsersIcon, UserCheck, FileText, Coins } from "lucide-react";

import StateMessage from "../../components/StateMessage/StateMessage";

import StatCard from "../../components/StatCard/StatCard";
import Table from "../../components/Table/Table";
import Pagination from "../../components/Pagination/Pagination";

import { getUsers } from "../../services/users.service";
import type { User } from "../../types/user";
import "./Users.scss";

const stats = [
  { title: "USERS", value: "2,453", icon: UsersIcon, className: "pink" },
  { title: "ACTIVE USERS", value: "2,453", icon: UserCheck, className: "purple" },
  { title: "USERS WITH LOANS", value: "12,453", icon: FileText, className: "orange" },
  { title: "USERS WITH SAVINGS", value: "102,453", icon: Coins, className: "red" },
];

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage, setUsersPerPage] = useState(10);

  const [searchText, setSearchText] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setIsLoading(true);
        const data = await getUsers();
        setUsers(data);
      } catch {
        setError("Something went wrong while fetching users.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers = users.filter((user) => {
    const search = searchText.toLowerCase();

    const matchesSearch =
      user.username.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search) ||
      user.organization.toLowerCase().includes(search) ||
      user.phoneNumber.toLowerCase().includes(search);

    const matchesStatus = statusFilter ? user.status === statusFilter : true;

    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredUsers.length / usersPerPage);

  const startIndex = (currentPage - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;

  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  const handleUsersPerPageChange = (value: number) => {
    setUsersPerPage(value);
    setCurrentPage(1);
  };

  const handleResetFilters = () => {
    setSearchText("");
    setStatusFilter("");
    setCurrentPage(1);
  };

  return (
    <section className="users-page">
      <h1>Users</h1>

      <div className="stats-grid">
        {stats.map((item) => (
          <StatCard key={item.title} {...item} />
        ))}
      </div>

      {isLoading && (
        <StateMessage
          type="loading"
          title="Loading users"
          message="Please wait while we fetch users."
        />
      )}

      {!isLoading && error && (
        <StateMessage
          type="error"
          title="Something went wrong"
          message={error}
        />
      )}

      {!isLoading && !error && filteredUsers.length === 0 && (
        <StateMessage
          type="empty"
          title="No users found"
          message="Try adjusting your search or filter criteria."
        />
      )}

      {!isLoading && !error && filteredUsers.length > 0 && (
        <>
          <Table
            users={currentUsers}
            searchText={searchText}
            statusFilter={statusFilter}
            onSearchChange={setSearchText}
            onStatusChange={setStatusFilter}
            onResetFilters={handleResetFilters}
          />

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            usersPerPage={usersPerPage}
            totalUsers={filteredUsers.length}
            onPageChange={setCurrentPage}
            onUsersPerPageChange={handleUsersPerPageChange}
          />
        </>
      )}
    </section>
  );
};

export default Users;