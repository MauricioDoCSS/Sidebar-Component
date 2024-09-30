import styled from "styled-components";

export const ContainerSidebar = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 24px;
  background: ${({ theme }) => theme.sidebar.background};
  height: 100%;
  width: ${(props) => (props.$isOpen ? "280px" : "76px")};
  border-radius: 0 16px 16px 0;
  transition: width 0.5s ease;
`;

export const ContainerOptions = styled.div<{ $isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  /* padding: 0 ${(props) => (props.$isOpen ? "24px" : "16px")}; */
  padding: 16px;
  gap: 0.5rem;
`;

export const Badge = styled.div`
  height: 1px;
  background: ${(props) => props.theme.sidebar.badgeColor};
`;
