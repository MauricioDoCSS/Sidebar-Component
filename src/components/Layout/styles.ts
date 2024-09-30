import styled from "styled-components";

export const ContainerLayout = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  background: ${({ theme }) => theme.colors.background};
  grid:
    "sidebar content" 1fr
    / auto 1fr;

  .sidebar {
    grid-area: "sidebar";
  }

  .content {
    grid-area: "content";
  }
`;
