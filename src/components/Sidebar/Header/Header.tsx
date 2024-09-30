import { Container, Content, Label } from "./styles";
import { AnimatePresence } from "framer-motion";

import Logo from "../../../assets/logo.svg";

interface HeaderProps {
  isOpen: boolean;
}

export const Header = ({ isOpen }: HeaderProps) => {
  return (
    <Container layout>
      <Content>
        <img src={Logo} style={{ marginLeft: "6px" }} />
        <AnimatePresence>
          {isOpen && (
            <Label
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              ABC Solutions
            </Label>
          )}
        </AnimatePresence>
      </Content>
    </Container>
  );
};
