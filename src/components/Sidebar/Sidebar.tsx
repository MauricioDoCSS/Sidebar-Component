import { useState } from "react";
import { Badge, ContainerOptions, ContainerSidebar } from "./styles";
import { Header } from "./Header/Header";
import { Toggle } from "./Toggle/Toggle";
import { Profile } from "./Profile/Profile";
import { NavItem } from "./NavItem/NavItem";
import {
  MdOutlineAnalytics,
  MdOutlineCalendarToday,
  MdOutlineInfo,
  MdOutlineInventory2,
  MdOutlineLocalShipping,
  MdOutlineNotifications,
  MdOutlineSettings,
  MdOutlineSpaceDashboard,
} from "react-icons/md";

import Avatar from "../../assets/avatar.svg";

export const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ContainerSidebar $isOpen={isOpen}>
      <Toggle onToggle={toggleOpen} />
      <Header isOpen={isOpen} />

      <ContainerOptions $isOpen={isOpen}>
        <NavItem
          label="Dashboard"
          icon={<MdOutlineSpaceDashboard />}
          to="/"
          isOpen={isOpen}
        />
        <NavItem
          label="Products"
          icon={<MdOutlineInventory2 />}
          to="/products"
          isOpen={isOpen}
        />
        <NavItem
          label="Calendar"
          icon={<MdOutlineCalendarToday />}
          to="/calendar"
          isOpen={isOpen}
        />
        <NavItem
          label="Suppliers"
          icon={<MdOutlineLocalShipping />}
          to="/suppliers"
          isOpen={isOpen}
        />
        <NavItem
          label="Reports"
          icon={<MdOutlineAnalytics />}
          to="/reports"
          isOpen={isOpen}
        />
      </ContainerOptions>

      <Badge />

      <ContainerOptions $isOpen={isOpen}>
        <NavItem
          label="Notifications"
          icon={<MdOutlineNotifications />}
          to="/notifications"
          isOpen={isOpen}
        />
        <NavItem
          label="Settings"
          icon={<MdOutlineSettings />}
          to="/settings"
          isOpen={isOpen}
        />
        <NavItem
          label="Support"
          icon={<MdOutlineInfo />}
          to="/support"
          isOpen={isOpen}
        />
      </ContainerOptions>

      <Profile avatar={Avatar} name="Mauricio" isOpen={isOpen} />
    </ContainerSidebar>
  );
};
