import { useState } from "react";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./MainLayout.scss";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
      <div className="main-layout">
        <Header
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />

        <div className="main-layout__body">
          <Sidebar
            isSidebarOpen={isSidebarOpen}
          />

          <main className="main-layout__content">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  )
}

export default MainLayout

