import { sidebarSections } from "./SidebarData";
import SidebarItem from "./SidebarItem";
import './Sidebar.scss'
import { Briefcase, ChevronDown } from "lucide-react";

const Sidebar = () => {
  return (
    <aside className="sidebar">
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