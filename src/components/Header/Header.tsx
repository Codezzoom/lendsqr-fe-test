import "./Header.scss";

import logo from "../../assets/images/logo.png";
import avatar from "../../assets/images/avatar.png";

import { Bell, Search, Menu } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
  isSidebarOpen: boolean,
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Header = ({ isSidebarOpen, setIsSidebarOpen }: HeaderProps) => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="header__logo" onClick={() => navigate("/dashboard")}>
        <img src={logo} alt="Lendsqr" />
      </div>

      <div className="header__search">
        <input
          type="text"
          placeholder="Search for anything"
        />

        <button>
          <Search size={18} />
        </button>
      </div>

      <div className="header__actions">
        <a href="/">Docs</a>

        <button className="header__notification">
          <Bell size={26} />
        </button>

        <div className="header__profile">
          <img src={avatar} alt="Adebeyi" />

          <span>Adebeyi</span>

          <FontAwesomeIcon icon={faCaretDown} />
        </div>
      </div>
      <button
        className="menu-button"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        <Menu size={24} />
      </button>
    </header>
  );
};

export default Header;

