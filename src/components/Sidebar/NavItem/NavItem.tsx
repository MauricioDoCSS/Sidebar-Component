import { AnimatePresence } from "framer-motion";
import { ContainerNavItem, IconNavItem, LabelNavItem } from "./styles";

interface NavItemProps {
  label: string;
  icon: React.ReactNode;
  to: string;
  isOpen: boolean;
}

export const NavItem = ({ label, icon, to, isOpen }: NavItemProps) => {
  return (
    <ContainerNavItem to={to}>
      <IconNavItem>{icon}</IconNavItem>
      <AnimatePresence>
        {isOpen && (
          <LabelNavItem
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {label}
          </LabelNavItem>
        )}
      </AnimatePresence>
    </ContainerNavItem>
  );
};
