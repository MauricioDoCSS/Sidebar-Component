import { MdChevronRight } from "react-icons/md";
import { Avatar, Container } from "./styles";

interface ProfileProps {
  avatar?: string;
  name: string;
  isOpen: boolean;
}

export const Profile = ({ name, avatar, isOpen }: ProfileProps) => {
  return (
    <Container $isOpen={isOpen}>
      <div className="leftContent">
        <Avatar>
          <img src={avatar} />
        </Avatar>

        {isOpen && (
          <div className="containerTexts">
            <span className="message">Welcome back 👋</span>
            <span className="name">{name}</span>
          </div>
        )}
      </div>

      {isOpen && (
        <div className="rightContent">
          <button className="btn">
            <MdChevronRight />
          </button>
        </div>
      )}
    </Container>
  );
};
