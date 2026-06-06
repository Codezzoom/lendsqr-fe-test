import { useNavigate } from "react-router-dom";
import { Eye, UserX, UserCheck } from "lucide-react";
import "./ActionMenu.scss";

interface ActionMenuProps {
  userId: string;
}

const ActionMenu = ({ userId }: ActionMenuProps) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/users/${userId}`);
  };

  return (
    <div className="action-menu">
      <button type="button" onClick={handleViewDetails}>
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