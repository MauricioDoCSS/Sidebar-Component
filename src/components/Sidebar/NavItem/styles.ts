import styled from "styled-components";

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

export const ContainerNavItem = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 12px;
  height: 44px;
  border-radius: 99px;
  padding: 12px;
  color: ${(props) => props.theme.sidebar.color};
  text-decoration: none;
  transition: all 0.4s;

  &:hover {
    background: ${(props) => props.theme.sidebar.bgHover};
  }

  &:active {
    scale: 0.98;
  }

  &.active {
    background: ${(props) => props.theme.sidebar.bgActive};
    color: ${(props) => props.theme.sidebar.colorActive};
  }
`;

export const LabelNavItem = styled(motion.span)`
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 20px;
`;

export const IconNavItem = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20px;
  height: 20px;
  font-size: 1.25rem;
`;
