import { NavLink } from "react-router-dom";

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  path: string;
}

const SidebarItem = ({
  icon: Icon,
  label,
  path,
}: SidebarItemProps) => {
  return (
    <NavLink
      to={path}
      className={() =>
        label === "Users"
          ? "nav-item active"
          : "nav-item"
      }
    >
      <Icon size={18} />
      <span>{label}</span>
    </NavLink>
  );
};

export default SidebarItem;