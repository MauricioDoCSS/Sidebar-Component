import styled from "styled-components";

export const Container = styled.button`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  padding: 4px;
  right: -12px;
  top: 22px;
  outline: none;
  cursor: pointer;
  border-radius: 50%;
  font-size: 1rem;
  color: ${(props) => props.theme.sidebar.nameColor};
  background: ${(props) => props.theme.sidebar.background};
  border: 1px solid ${(props) => props.theme.sidebar.badgeColor};
`;
