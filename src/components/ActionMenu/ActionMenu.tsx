import "./ActionMenu.scss";
import { Eye, UserX, UserCheck } from "lucide-react";

const ActionMenu = () => {
  return (
    <div className="action-menu">
      <button type="button">
        <Eye size={16} />
        <span>View Details</span>
      </button>

      <button type="button">
        <UserX size={16} />
        <span>Blacklist User</span>
      </button>

      <button type="button">
        <UserCheck size={16} />
        <span>Activate User</span>
      </button>
    </div>
  );
};

export default ActionMenu;