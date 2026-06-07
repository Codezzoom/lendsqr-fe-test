import { sidebarSections } from "./SidebarData";
import SidebarItem from "./SidebarItem";
import './Sidebar.scss'
import { Briefcase, ChevronDown } from "lucide-react";

interface SidebarProps {
  isSidebarOpen: boolean;
}

const Sidebar = ({ isSidebarOpen }: SidebarProps) => {
  return (
    <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
      <div className="switch-org">
        <Briefcase size={16} />
        <span>Switch Organization</span>
        <ChevronDown size={16} />
      </div>
      {sidebarSections.map((section) => (
        <div key={section.title}>
          <p className="nav-title">
            {section.title}
          </p>

          {section.items.map((item) => (
            <SidebarItem
              key={item.path}
              icon={item.icon}
              label={item.name}
              path={item.path}
            />
          ))}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;

