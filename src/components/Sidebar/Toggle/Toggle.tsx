import { MdChevronRight } from "react-icons/md";
import { Container } from "./styles";

interface ToggleProps {
  onToggle: () => void;
}

export const Toggle = ({ onToggle }: ToggleProps) => {
  return (
    <Container onClick={onToggle}>
      <MdChevronRight />
    </Container>
  );
};
