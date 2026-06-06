import { EllipsisVertical, ListFilter } from "lucide-react";
import "./Table.scss";

const users = [
  ["Lendsqr", "Adedeji", "adedeji@lendsqr.com", "08078903721", "May 15, 2020 10:00 AM", "Inactive"],
  ["Irorun", "Debby Ogana", "debby2@irorun.com", "08160780928", "Apr 30, 2020 10:00 AM", "Pending"],
  ["Lendstar", "Grace Effiom", "grace@lendstar.com", "07060780922", "Apr 30, 2020 10:00 AM", "Blacklisted"],
  ["Lendsqr", "Tosin Dokunmu", "tosin@lendsqr.com", "07003309226", "Apr 10, 2020 10:00 AM", "Pending"],
  ["Lendstar", "Grace Effiom", "grace@lendstar.com", "07060780922", "Apr 30, 2020 10:00 AM", "Active"],
  ["Lendsqr", "Tosin Dokunmu", "tosin@lendsqr.com", "08060780900", "Apr 10, 2020 10:00 AM", "Active"],
  ["Lendstar", "Grace Effiom", "grace@lendstar.com", "07060780922", "Apr 30, 2020 10:00 AM", "Blacklisted"],
  ["Lendsqr", "Tosin Dokunmu", "tosin@lendsqr.com", "08060780900", "Apr 10, 2020 10:00 AM", "Inactive"],
  ["Lendstar", "Grace Effiom", "grace@lendstar.com", "07060780922", "Apr 30, 2020 10:00 AM", "Inactive"],
];

const headings = [
  "ORGANIZATION",
  "USERNAME",
  "EMAIL",
  "PHONE NUMBER",
  "DATE JOINED",
  "STATUS",
];

const Table = () => {
  return (
    <div className="table-card">
      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              {headings.map((heading) => (
                <th key={heading}>
                  <span>{heading}</span>
                  <ListFilter size={16} />
                </th>
              ))}
              <th></th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, index) => (
              <tr key={`${user[1]}-${index}`}>
                <td>{user[0]}</td>
                <td>{user[1]}</td>
                <td>{user[2]}</td>
                <td>{user[3]}</td>
                <td>{user[4]}</td>
                <td>
                  <span className={`status ${user[5].toLowerCase()}`}>
                    {user[5]}
                  </span>
                </td>
                <td>
                  <button className="menu-button">
                    <EllipsisVertical size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;