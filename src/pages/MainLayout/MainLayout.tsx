import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./MainLayout.scss";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <div className="main-layout">
        <Header />

        <div className="main-layout__body">
          <Sidebar />

          <main className="main-layout__content">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  )
}

export default MainLayout
