import styled from "styled-components";

export const Container = styled.div<{ $isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 0;
  /* padding: ${(props) => (props.$isOpen ? "24px" : "16px")}; */
  padding: 16px;
  width: 100%;
  overflow: hidden;
  border-top: 1px solid ${(props) => props.theme.sidebar.badgeColor};

  .leftContent {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .containerTexts {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  .message {
    font-size: 0.75rem;
    font-weight: 500;
    line-height: 20px;
    white-space: nowrap;
    color: ${(props) => props.theme.sidebar.color};
  }

  .name {
    font-size: 0.875rem;
    font-weight: 500;
    line-height: 20px;
    white-space: nowrap;
    color: ${(props) => props.theme.sidebar.nameColor};
  }

  .rightContent {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
  }

  .btn {
    background: transparent;
    outline: none;
    border: none;
    color: ${(props) => props.theme.sidebar.nameColor};
    font-size: 1.25rem;
    cursor: pointer;
  }
`;

export const Avatar = styled.figure`
  width: 40px;
  height: 40px;
  overflow: hidden;
  border-radius: 50%;
  background-color: ${(props) => props.theme.sidebar.bgAvatar};

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
