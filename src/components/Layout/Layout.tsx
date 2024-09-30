import { Outlet } from "react-router-dom";
import { ContainerLayout } from "./styles";
import { Sidebar } from "../Sidebar/Sidebar";

export const Layout = () => {
  return (
    <ContainerLayout>
      <div className="sidebar">
        <Sidebar />
      </div>
      <div className="content">
        <Outlet />
      </div>
    </ContainerLayout>
  );
};
