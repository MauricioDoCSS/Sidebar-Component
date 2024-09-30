import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled(motion.div)`
  display: flex;
  align-items: center;
  padding: 16px;
  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Label = styled(motion.span)`
  color: ${(props) => props.theme.sidebar.colorLabelLogo};
  font-size: 1.25rem;
  font-weight: 600;
  line-height: 140%;
  white-space: nowrap;
`;
